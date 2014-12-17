###
# Make file for project.
#
# Downloads, filters, and converts data
#
###

# Directories
data := data
original := $(data)/original
build := $(data)/build
processing := $(data)/processing

# Scripts
script_combine := $(processing)/combine.js

# Sources
# http://www.mngeo.state.mn.us/chouse/metadata/schools1112.html
source_schools := ftp://ftp.lmic.state.mn.us/pub/data/admin_poli/schools1112.zip

# Local sources
local_schools := $(original)/schools1112-2012.zip
local_schools_dir := $(original)/schools1112-2012/
local_schools_shp := $(original)/schools1112-2012/schools1112.shp

# Converted
build_schools_sleds := $(build)/2014-sleds.csv
build_schools_grad := $(build)/2014-grad-data.csv
build_schools_analysis_csv := $(build)/school-remedial-and-grad-rates-statewide-large.csv
build_schools_analysis_json := $(build)/school-remedial-and-grad-rates.json
build_schools_geo := $(build)/schools-locations.geo.json

# Final
schools := $(data)/schools.geo.json


# The SLEDS and National data were downloaded manually

# Download and unzip sources.  Touch shapefile so that make knows it it
# up to date
$(local_schools_shp):
	mkdir -p $(original)
	curl -o $(local_schools) "$(source_schools)"
	unzip $(local_schools) -d $(local_schools_dir)
	touch $(local_schools_shp)

download: $(local_schools_shp)
clean_download:
	rm -rvf $(local_schools) $(local_schools_dir)


# The SLEDS and National Excel files were manually converted to CSV and
# some minor formatting changes were made

# Convert geo data
$(build_schools_geo): $(local_schools_shp)
	mkdir -p $(build)
	ogr2ogr -f "GeoJSON" $(build_schools_geo) $(local_schools_shp) -t_srs "EPSG:4326"

$(build_schools_analysis_json): $(build_schools_analysis_csv)
	csvjson $(build_schools_analysis_csv) --key="id" > $(build_schools_analysis_json)

convert: $(build_schools_geo) $(build_schools_analysis_json)
clean_convert:
	rm -rvf $(build_schools_geo) $(build_schools_analysis_json)


# Final processing
$(schools): $(build_schools_geo) $(build_schools_analysis_json)
	node $(script_combine)

process: $(schools)
clean_process:
	rm -rvf $(schools)


# General
all: process
clean: clean_download clean_convert clean_process

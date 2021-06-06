#population

copy(select row_to_json(t) from(

	select
	json_build_object(
		'area', da.area,
		'cities', json_agg(json_build_object(
			'city', c.city,
			'districts', (select json_agg(json_build_object(
				'district', d.district,
				'years', (select json_agg(json_build_object(
					'year', y.year,
					'population', fp.population
				))
				from dimyear y, factpopulation fp
				where y.yearid = fp.yearid and fp.districtid = d.districtid
			)
			))
    	from dimdistrict d
        where d.cityid = c.cityid
		)
	))


) as data
from dimarea da, dimcity c
where da.areaid = c.areaid
group by da.area
order by area desc



) t) to '/home/dongky/Documents/JsonFormatData/factpopulation.json';


#industry

copy(select row_to_json(t) from(

	select
	json_build_object(
		'area', da.area,
		'cities', json_agg(json_build_object(
			'city', c.city,
			'districts', (select json_agg(json_build_object(
				'district', d.district,
				'years', (select json_agg(json_build_object(
					'year', y.year,
					'industry', fd.industry
				))
				from dimyear y, factindustry fd
				where y.yearid = fd.yearid and fd.districtid = d.districtid
			)
			))
    	from dimdistrict d
        where d.cityid = c.cityid
		)
	))


) as data
from dimarea da, dimcity c
where da.areaid = c.areaid
group by da.area
order by area desc



) t) to '/home/dongky/Documents/JsonFormatData/factindustry.json';


#forest

copy(select row_to_json(t) from(

	select
	json_build_object(
		'area', da.area,
		'cities', json_agg(json_build_object(
			'city', c.city,
			'districts', (select json_agg(json_build_object(
				'district', d.district,
				'years', (select json_agg(json_build_object(
					'year', y.year,
					'afforestation', ff.afforestation,
					'sumOfForestAcreage', ff.sumOfForestAcreage,
					'ratioForestCover', ff.ratioForestCover
				))
				from dimyear y, factforest ff
				where y.yearid = ff.yearid and ff.districtid = d.districtid
			)
			))
    	from dimdistrict d
        where d.cityid = c.cityid
		)
	))


) as data
from dimarea da, dimcity c
where da.areaid = c.areaid
group by da.area
order by area desc

) t) to '/home/dongky/Documents/JsonFormatData/factforest.json';


#climate

copy(select row_to_json(t) from(

	select
	json_build_object(
		'area', da.area,
		'cities', json_agg(json_build_object(
			'city', c.city,
			'districts', (select json_agg(json_build_object(
				'district', d.district,
				'years', (select json_agg(json_build_object(
					'year', y.year,
					'humidity', fc.humidity,
					'rainfall', fc.rainfall,
					'temperature', fc.temperature
				))
				from dimyear y, factclimate fc
				where y.yearid = fc.yearid and fc.districtid = d.districtid
			)
			))
    	from dimdistrict d
        where d.cityid = c.cityid
		)
	))


) as data
from dimarea da, dimcity c
where da.areaid = c.areaid
group by da.area
order by area desc



) t) to '/home/dongky/Documents/JsonFormatData/factclimate.json';


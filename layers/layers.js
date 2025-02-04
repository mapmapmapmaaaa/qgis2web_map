var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lab1_1 = new ol.format.GeoJSON();
var features_lab1_1 = format_lab1_1.readFeatures(json_lab1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_1.addFeatures(features_lab1_1);
var lyr_lab1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_1, 
                style: style_lab1_1,
                popuplayertitle: 'красная рамка — lab 1',
                interactive: true,
                title: '<img src="styles/legend/lab1_1.png" /> красная рамка — lab 1'
            });
var format_building_2 = new ol.format.GeoJSON();
var features_building_2 = format_building_2.readFeatures(json_building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_2.addFeatures(features_building_2);
var lyr_building_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_2, 
                style: style_building_2,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_2.png" /> building'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'Результат обрезки',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> Результат обрезки'
            });
var format_highway_4 = new ol.format.GeoJSON();
var features_highway_4 = format_highway_4.readFeatures(json_highway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_4.addFeatures(features_highway_4);
var lyr_highway_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_4, 
                style: style_highway_4,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_4.png" /> highway'
            });

lyr_OSMStandard_0.setVisible(true);lyr_lab1_1.setVisible(true);lyr_building_2.setVisible(true);lyr__3.setVisible(true);lyr_highway_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_lab1_1,lyr_building_2,lyr__3,lyr_highway_4];
lyr_lab1_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_building_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'source:addr': 'source:addr', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'address': 'address', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'tracktype': 'tracktype', 'bicycle': 'bicycle', 'ref': 'ref', 'lanes': 'lanes', 'surface': 'surface', 'name': 'name', });
lyr_highway_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'ford': 'ford', 'shelter': 'shelter', });
lyr_lab1_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_building_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'source:addr': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'address': '', });
lyr__3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'tracktype': '', 'bicycle': '', 'ref': '', 'lanes': '', 'surface': '', 'name': '', });
lyr_highway_4.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'ford': 'TextEdit', 'shelter': 'TextEdit', });
lyr_lab1_1.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_building_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'source:addr': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'address': 'no label', });
lyr__3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'tracktype': 'no label', 'bicycle': 'no label', 'ref': 'no label', 'lanes': 'no label', 'surface': 'no label', 'name': 'no label', });
lyr_highway_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'header label - visible with data', 'highway': 'no label', 'ford': 'no label', 'shelter': 'no label', });
lyr_highway_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
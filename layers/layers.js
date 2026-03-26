ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([36.478097, -3.560341, 37.505412, -3.038417]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CBWSO_2 = new ol.format.GeoJSON();
var features_CBWSO_2 = format_CBWSO_2.readFeatures(json_CBWSO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CBWSO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBWSO_2.addFeatures(features_CBWSO_2);
var lyr_CBWSO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CBWSO_2, 
                style: style_CBWSO_2,
                popuplayertitle: 'CBWSO',
                interactive: true,
    title: 'CBWSO<br />\
    <img src="styles/legend/CBWSO_2_0.png" /> AMSHA<br />\
    <img src="styles/legend/CBWSO_2_1.png" /> ANGUPA<br />\
    <img src="styles/legend/CBWSO_2_2.png" /> ENGAMAKA<br />\
    <img src="styles/legend/CBWSO_2_3.png" /> KALANGA, & MURAKALI<br />\
    <img src="styles/legend/CBWSO_2_4.png" /> KIMAIKILE,KIMASAKINA, & NGUNGYESA<br />\
    <img src="styles/legend/CBWSO_2_5.png" /> KIMAIKILE, & KIWANGO<br />\
    <img src="styles/legend/CBWSO_2_6.png" /> KWAMIMA<br />\
    <img src="styles/legend/CBWSO_2_7.png" /> MAKILENGA<br />\
    <img src="styles/legend/CBWSO_2_8.png" /> MANDUSO<br />\
    <img src="styles/legend/CBWSO_2_9.png" /> MBUKA<br />\
    <img src="styles/legend/CBWSO_2_10.png" /> MKIKIMA, & VAPAMA<br />\
    <img src="styles/legend/CBWSO_2_11.png" /> NAKIMAKA<br />\
    <img src="styles/legend/CBWSO_2_12.png" /> NJOPONDA<br />\
    <img src="styles/legend/CBWSO_2_13.png" /> NSHUKILOMA<br />\
    <img src="styles/legend/CBWSO_2_14.png" /> OLKUNGABO<br />\
    <img src="styles/legend/CBWSO_2_15.png" /> SIMA<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_CBWSO_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OSMStandard_1,lyr_CBWSO_2];
lyr_CBWSO_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'reg_code': 'reg_code', 'reg_name': 'reg_name', 'dist_code': 'dist_code', 'dist_name': 'dist_name', 'counc_code': 'counc_code', 'counc_name': 'counc_name', 'const_code': 'const_code', 'const_name': 'const_name', 'div_code': 'div_code', 'div_name': 'div_name', 'ward_code': 'ward_code', 'ward_name': 'ward_name', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'CBWSO': 'CBWSO', });
lyr_CBWSO_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'reg_code': 'TextEdit', 'reg_name': 'TextEdit', 'dist_code': 'TextEdit', 'dist_name': 'TextEdit', 'counc_code': 'TextEdit', 'counc_name': 'TextEdit', 'const_code': 'TextEdit', 'const_name': 'TextEdit', 'div_code': 'TextEdit', 'div_name': 'TextEdit', 'ward_code': 'TextEdit', 'ward_name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'CBWSO': 'TextEdit', });
lyr_CBWSO_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'reg_code': 'no label', 'reg_name': 'no label', 'dist_code': 'no label', 'dist_name': 'no label', 'counc_code': 'no label', 'counc_name': 'no label', 'const_code': 'no label', 'const_name': 'no label', 'div_code': 'no label', 'div_name': 'no label', 'ward_code': 'no label', 'ward_name': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'CBWSO': 'no label', });
lyr_CBWSO_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
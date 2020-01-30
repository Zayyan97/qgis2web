var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRINationalGeographic_2 = new ol.layer.Tile({
            'title': 'ESRI National Geographic',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleTerrain_3 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_PL_SBB_Full_4 = new ol.format.GeoJSON();
var features_PL_SBB_Full_4 = format_PL_SBB_Full_4.readFeatures(json_PL_SBB_Full_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PL_SBB_Full_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PL_SBB_Full_4.addFeatures(features_PL_SBB_Full_4);
var lyr_PL_SBB_Full_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PL_SBB_Full_4, 
                style: style_PL_SBB_Full_4,
                interactive: true,
    title: 'PL_SBB_Full<br />\
    <img src="styles/legend/PL_SBB_Full_4_0.png" /> Bangunan Lain<br />\
    <img src="styles/legend/PL_SBB_Full_4_1.png" /> Fasilitas Umum/Fasilitas Sosial<br />\
    <img src="styles/legend/PL_SBB_Full_4_2.png" /> Hutan<br />\
    <img src="styles/legend/PL_SBB_Full_4_3.png" /> Jalan<br />\
    <img src="styles/legend/PL_SBB_Full_4_4.png" /> Kuburan<br />\
    <img src="styles/legend/PL_SBB_Full_4_5.png" /> Pelabuhan<br />\
    <img src="styles/legend/PL_SBB_Full_4_6.png" /> Perdagangan Jasa<br />\
    <img src="styles/legend/PL_SBB_Full_4_7.png" /> Perkantoran<br />\
    <img src="styles/legend/PL_SBB_Full_4_8.png" /> Perkebunan<br />\
    <img src="styles/legend/PL_SBB_Full_4_9.png" /> Perumahan Teratur<br />\
    <img src="styles/legend/PL_SBB_Full_4_10.png" /> Perumahan Tidak Teratur<br />\
    <img src="styles/legend/PL_SBB_Full_4_11.png" /> Pesisir Pantai<br />\
    <img src="styles/legend/PL_SBB_Full_4_12.png" /> Sabana<br />\
    <img src="styles/legend/PL_SBB_Full_4_13.png" /> Sawah<br />\
    <img src="styles/legend/PL_SBB_Full_4_14.png" /> Semak/Belukar<br />\
    <img src="styles/legend/PL_SBB_Full_4_15.png" /> Sungai/Tubuh Air<br />\
    <img src="styles/legend/PL_SBB_Full_4_16.png" /> Tanah Kosong<br />\
    <img src="styles/legend/PL_SBB_Full_4_17.png" /> Tegalan/Ladang<br />\
    <img src="styles/legend/PL_SBB_Full_4_18.png" /> Tempat Peribadatan<br />\
    <img src="styles/legend/PL_SBB_Full_4_19.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_ESRINationalGeographic_2.setVisible(true);lyr_GoogleTerrain_3.setVisible(false);lyr_PL_SBB_Full_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_ESRINationalGeographic_2,lyr_GoogleTerrain_3,lyr_PL_SBB_Full_4];
lyr_PL_SBB_Full_4.set('fieldAliases', {'PL': 'PL', 'layer': 'layer', });
lyr_PL_SBB_Full_4.set('fieldImages', {'PL': 'TextEdit', 'layer': 'TextEdit', });
lyr_PL_SBB_Full_4.set('fieldLabels', {'PL': 'inline label', 'layer': 'no label', });
lyr_PL_SBB_Full_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
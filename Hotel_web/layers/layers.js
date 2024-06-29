ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32733").setExtent([515055.178411, 9524189.248404, 536393.195377, 9535198.757157]);
var wms_layers = [];


        var lyr_GoogleSatelliteTyponimie_0 = new ol.layer.Tile({
            'title': 'Google Satellite Typonimie',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_SatelliteESRI_1 = new ol.layer.Tile({
            'title': 'Satellite ESRI',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_2DDessin_2 = new ol.layer.Tile({
            'title': '2D Dessin ',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors, under ODbL</a>',
                url: 'http://a.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
            })
        });
var format_LimiteBrazzaville_3 = new ol.format.GeoJSON();
var features_LimiteBrazzaville_3 = format_LimiteBrazzaville_3.readFeatures(json_LimiteBrazzaville_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32733'});
var jsonSource_LimiteBrazzaville_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteBrazzaville_3.addFeatures(features_LimiteBrazzaville_3);
var lyr_LimiteBrazzaville_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteBrazzaville_3, 
                style: style_LimiteBrazzaville_3,
                popuplayertitle: 'Limite Brazzaville',
                interactive: true,
                title: '<img src="styles/legend/LimiteBrazzaville_3.png" /> Limite Brazzaville'
            });
var format_Moungali_4 = new ol.format.GeoJSON();
var features_Moungali_4 = format_Moungali_4.readFeatures(json_Moungali_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32733'});
var jsonSource_Moungali_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Moungali_4.addFeatures(features_Moungali_4);
var lyr_Moungali_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Moungali_4, 
                style: style_Moungali_4,
                popuplayertitle: 'Moungali',
                interactive: false,
                title: '<img src="styles/legend/Moungali_4.png" /> Moungali'
            });
var format_LimiteMoungali_5 = new ol.format.GeoJSON();
var features_LimiteMoungali_5 = format_LimiteMoungali_5.readFeatures(json_LimiteMoungali_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32733'});
var jsonSource_LimiteMoungali_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteMoungali_5.addFeatures(features_LimiteMoungali_5);
var lyr_LimiteMoungali_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteMoungali_5, 
                style: style_LimiteMoungali_5,
                popuplayertitle: 'Limite Moungali',
                interactive: false,
                title: '<img src="styles/legend/LimiteMoungali_5.png" /> Limite Moungali'
            });
var format_Potopoto_6 = new ol.format.GeoJSON();
var features_Potopoto_6 = format_Potopoto_6.readFeatures(json_Potopoto_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32733'});
var jsonSource_Potopoto_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Potopoto_6.addFeatures(features_Potopoto_6);
var lyr_Potopoto_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Potopoto_6, 
                style: style_Potopoto_6,
                popuplayertitle: 'Poto-poto',
                interactive: false,
                title: '<img src="styles/legend/Potopoto_6.png" /> Poto-poto'
            });
var format_LimitePotopoto_7 = new ol.format.GeoJSON();
var features_LimitePotopoto_7 = format_LimitePotopoto_7.readFeatures(json_LimitePotopoto_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32733'});
var jsonSource_LimitePotopoto_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitePotopoto_7.addFeatures(features_LimitePotopoto_7);
var lyr_LimitePotopoto_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitePotopoto_7, 
                style: style_LimitePotopoto_7,
                popuplayertitle: 'Limite Poto-poto',
                interactive: false,
                title: '<img src="styles/legend/LimitePotopoto_7.png" /> Limite Poto-poto'
            });
var format_Etablissemments_dhebergement_8 = new ol.format.GeoJSON();
var features_Etablissemments_dhebergement_8 = format_Etablissemments_dhebergement_8.readFeatures(json_Etablissemments_dhebergement_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32733'});
var jsonSource_Etablissemments_dhebergement_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Etablissemments_dhebergement_8.addFeatures(features_Etablissemments_dhebergement_8);
var lyr_Etablissemments_dhebergement_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Etablissemments_dhebergement_8, 
                style: style_Etablissemments_dhebergement_8,
                popuplayertitle: 'Etablissemments_d\'hebergement',
                interactive: false,
    title: 'Etablissemments_d\'hebergement<br />\
    <img src="styles/legend/Etablissemments_dhebergement_8_0.png" /> 1 étoile<br />\
    <img src="styles/legend/Etablissemments_dhebergement_8_1.png" /> 2  étoiles<br />\
    <img src="styles/legend/Etablissemments_dhebergement_8_2.png" /> 2 étoiles<br />\
    <img src="styles/legend/Etablissemments_dhebergement_8_3.png" /> 3  étoiles<br />\
    <img src="styles/legend/Etablissemments_dhebergement_8_4.png" /> 3 étoiles<br />\
    <img src="styles/legend/Etablissemments_dhebergement_8_5.png" /> 4 étoiles<br />\
    <img src="styles/legend/Etablissemments_dhebergement_8_6.png" /> 5 étoile<br />\
    <img src="styles/legend/Etablissemments_dhebergement_8_7.png" /> 5 étoiles<br />' });
var format_Etablissementsofficieux_9 = new ol.format.GeoJSON();
var features_Etablissementsofficieux_9 = format_Etablissementsofficieux_9.readFeatures(json_Etablissementsofficieux_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32733'});
var jsonSource_Etablissementsofficieux_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Etablissementsofficieux_9.addFeatures(features_Etablissementsofficieux_9);
var lyr_Etablissementsofficieux_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Etablissementsofficieux_9, 
                style: style_Etablissementsofficieux_9,
                popuplayertitle: 'Etablissements officieux',
                interactive: true,
                title: '<img src="styles/legend/Etablissementsofficieux_9.png" /> Etablissements officieux'
            });
var format_DirectionGnraleduTourismeetdelHotellerie_10 = new ol.format.GeoJSON();
var features_DirectionGnraleduTourismeetdelHotellerie_10 = format_DirectionGnraleduTourismeetdelHotellerie_10.readFeatures(json_DirectionGnraleduTourismeetdelHotellerie_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32733'});
var jsonSource_DirectionGnraleduTourismeetdelHotellerie_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DirectionGnraleduTourismeetdelHotellerie_10.addFeatures(features_DirectionGnraleduTourismeetdelHotellerie_10);
var lyr_DirectionGnraleduTourismeetdelHotellerie_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DirectionGnraleduTourismeetdelHotellerie_10, 
                style: style_DirectionGnraleduTourismeetdelHotellerie_10,
                popuplayertitle: 'Direction Générale du Tourisme et de l\'Hotellerie',
                interactive: true,
                title: '<img src="styles/legend/DirectionGnraleduTourismeetdelHotellerie_10.png" /> Direction Générale du Tourisme et de l\'Hotellerie'
            });

lyr_GoogleSatelliteTyponimie_0.setVisible(true);lyr_SatelliteESRI_1.setVisible(true);lyr_2DDessin_2.setVisible(true);lyr_LimiteBrazzaville_3.setVisible(true);lyr_Moungali_4.setVisible(true);lyr_LimiteMoungali_5.setVisible(true);lyr_Potopoto_6.setVisible(true);lyr_LimitePotopoto_7.setVisible(true);lyr_Etablissemments_dhebergement_8.setVisible(true);lyr_Etablissementsofficieux_9.setVisible(true);lyr_DirectionGnraleduTourismeetdelHotellerie_10.setVisible(true);
var layersList = [lyr_GoogleSatelliteTyponimie_0,lyr_SatelliteESRI_1,lyr_2DDessin_2,lyr_LimiteBrazzaville_3,lyr_Moungali_4,lyr_LimiteMoungali_5,lyr_Potopoto_6,lyr_LimitePotopoto_7,lyr_Etablissemments_dhebergement_8,lyr_Etablissementsofficieux_9,lyr_DirectionGnraleduTourismeetdelHotellerie_10];
lyr_LimiteBrazzaville_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'NOM': 'NOM', 'KM2': 'KM2', 'PERIMètRE': 'PERIMètRE', 'POP_2007': 'POP_2007', 'DENSITé_2': 'DENSITé_2', 'X_DEGRé': 'X_DEGRé', 'Y_DEGRé': 'Y_DEGRé', 'q': 'q', });
lyr_Moungali_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'KM2': 'KM2', 'PERIMètRE': 'PERIMètRE', 'POP_2007': 'POP_2007', 'DENSITé_2': 'DENSITé_2', 'X_DEGRé': 'X_DEGRé', 'Y_DEGRé': 'Y_DEGRé', 'q': 'q', 'NOMS': 'NOMS', });
lyr_LimiteMoungali_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'KM2': 'KM2', 'PERIMètRE': 'PERIMètRE', 'POP_2007': 'POP_2007', 'DENSITé_2': 'DENSITé_2', 'X_DEGRé': 'X_DEGRé', 'Y_DEGRé': 'Y_DEGRé', 'q': 'q', 'NOMS': 'NOMS', });
lyr_Potopoto_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'NOM': 'NOM', 'KM2': 'KM2', 'PERIMètRE': 'PERIMètRE', 'POP_2007': 'POP_2007', 'DENSITé_2': 'DENSITé_2', 'X_DEGRé': 'X_DEGRé', 'Y_DEGRé': 'Y_DEGRé', 'q': 'q', });
lyr_LimitePotopoto_7.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'NOM': 'NOM', 'KM2': 'KM2', 'PERIMètRE': 'PERIMètRE', 'POP_2007': 'POP_2007', 'DENSITé_2': 'DENSITé_2', 'X_DEGRé': 'X_DEGRé', 'Y_DEGRé': 'Y_DEGRé', 'q': 'q', });
lyr_Etablissemments_dhebergement_8.set('fieldAliases', {'fid': 'fid', 'Nom de l\'e': 'Nom de l\'e', 'Date de l\'': 'Date de l\'', 'Nom de l\'�': 'Nom de l\'�', 'Année de': 'Année de', 'Arrondisse': 'Arrondisse', 'Quartier': 'Quartier', 'Adresse co': 'Adresse co', 'Numéro de': 'Numéro de', 'Adresse e-': 'Adresse e-', 'Site web': 'Site web', 'Catégorie': 'Catégorie', 'Nombre tot': 'Nombre tot', 'Capacité': 'Capacité', 'Types de c': 'Types de c', 'Tarifs moy': 'Tarifs moy', 'Resraurati': 'Resraurati', 'Services a': 'Services a', 'Installati': 'Installati', 'Wi-Fi disp': 'Wi-Fi disp', 'Climatisat': 'Climatisat', 'Autres éq': 'Autres éq', 'Nombre t_1': 'Nombre t_1', 'Langues pa': 'Langues pa', 'Formation': 'Formation', 'Proximité': 'Proximité', 'Accessibil': 'Accessibil', 'Disponibil': 'Disponibil', 'Certificat': 'Certificat', 'Initiative': 'Initiative', 'Programmes': 'Programmes', 'Moyens de': 'Moyens de', 'Offres sp�': 'Offres sp�', 'Langues su': 'Langues su', 'Suggestion': 'Suggestion', 'Autres inf': 'Autres inf', 'Moyens d_1': 'Moyens d_1', 'Photo': 'Photo', 'X': 'X', 'Y': 'Y', 'Types': 'Types', 'Nom_Hotel': 'Nom_Hotel', });
lyr_Etablissementsofficieux_9.set('fieldAliases', {'fid': 'fid', 'Nom de l\'e': 'Nom de l\'e', 'Date de l\'': 'Date de l\'', 'Nom de l\'�': 'Nom de l\'�', 'Année de': 'Année de', 'Arrondisse': 'Arrondisse', 'Quartier': 'Quartier', 'Adresse co': 'Adresse co', 'Numéro de': 'Numéro de', 'Adresse e-': 'Adresse e-', 'Site web': 'Site web', 'Catégorie': 'Catégorie', 'Nombre tot': 'Nombre tot', 'Capacité': 'Capacité', 'Types de c': 'Types de c', 'Tarifs moy': 'Tarifs moy', 'Resraurati': 'Resraurati', 'Services a': 'Services a', 'Installati': 'Installati', 'Wi-Fi disp': 'Wi-Fi disp', 'Climatisat': 'Climatisat', 'Autres éq': 'Autres éq', 'Nombre t_1': 'Nombre t_1', 'Langues pa': 'Langues pa', 'Formation': 'Formation', 'Proximité': 'Proximité', 'Accessibil': 'Accessibil', 'Disponibil': 'Disponibil', 'Certificat': 'Certificat', 'Initiative': 'Initiative', 'Programmes': 'Programmes', 'Moyens de': 'Moyens de', 'Offres sp�': 'Offres sp�', 'Langues su': 'Langues su', 'Suggestion': 'Suggestion', 'Autres inf': 'Autres inf', 'Moyens d_1': 'Moyens d_1', 'Photo': 'Photo', 'X': 'X', 'Y': 'Y', 'Types': 'Types', 'Nom_Hotel': 'Nom_Hotel', });
lyr_DirectionGnraleduTourismeetdelHotellerie_10.set('fieldAliases', {'fid': 'fid', 'Nom de l\'e': 'Nom de l\'e', 'Date de l\'': 'Date de l\'', 'Nom de l\'�': 'Nom de l\'�', 'Année de': 'Année de', 'Arrondisse': 'Arrondisse', 'Quartier': 'Quartier', 'Adresse co': 'Adresse co', 'Numéro de': 'Numéro de', 'Adresse e-': 'Adresse e-', 'Site web': 'Site web', 'Catégorie': 'Catégorie', 'Nombre tot': 'Nombre tot', 'Capacité': 'Capacité', 'Types de c': 'Types de c', 'Tarifs moy': 'Tarifs moy', 'Resraurati': 'Resraurati', 'Services a': 'Services a', 'Installati': 'Installati', 'Wi-Fi disp': 'Wi-Fi disp', 'Climatisat': 'Climatisat', 'Autres éq': 'Autres éq', 'Nombre t_1': 'Nombre t_1', 'Langues pa': 'Langues pa', 'Formation': 'Formation', 'Proximité': 'Proximité', 'Accessibil': 'Accessibil', 'Disponibil': 'Disponibil', 'Certificat': 'Certificat', 'Initiative': 'Initiative', 'Programmes': 'Programmes', 'Moyens de': 'Moyens de', 'Offres sp�': 'Offres sp�', 'Langues su': 'Langues su', 'Suggestion': 'Suggestion', 'Autres inf': 'Autres inf', 'Moyens d_1': 'Moyens d_1', 'Photo': 'Photo', });
lyr_LimiteBrazzaville_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'NOM': 'TextEdit', 'KM2': 'TextEdit', 'PERIMètRE': 'TextEdit', 'POP_2007': 'TextEdit', 'DENSITé_2': 'TextEdit', 'X_DEGRé': 'TextEdit', 'Y_DEGRé': 'TextEdit', 'q': 'TextEdit', });
lyr_Moungali_4.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'KM2': 'TextEdit', 'PERIMètRE': 'TextEdit', 'POP_2007': 'TextEdit', 'DENSITé_2': 'TextEdit', 'X_DEGRé': 'TextEdit', 'Y_DEGRé': 'TextEdit', 'q': 'TextEdit', 'NOMS': 'TextEdit', });
lyr_LimiteMoungali_5.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'KM2': 'TextEdit', 'PERIMètRE': 'TextEdit', 'POP_2007': 'TextEdit', 'DENSITé_2': 'TextEdit', 'X_DEGRé': 'TextEdit', 'Y_DEGRé': 'TextEdit', 'q': 'TextEdit', 'NOMS': 'TextEdit', });
lyr_Potopoto_6.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'NOM': 'TextEdit', 'KM2': 'TextEdit', 'PERIMètRE': 'TextEdit', 'POP_2007': 'TextEdit', 'DENSITé_2': 'TextEdit', 'X_DEGRé': 'TextEdit', 'Y_DEGRé': 'TextEdit', 'q': 'TextEdit', });
lyr_LimitePotopoto_7.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'NOM': 'TextEdit', 'KM2': 'TextEdit', 'PERIMètRE': 'TextEdit', 'POP_2007': 'TextEdit', 'DENSITé_2': 'TextEdit', 'X_DEGRé': 'TextEdit', 'Y_DEGRé': 'TextEdit', 'q': 'TextEdit', });
lyr_Etablissemments_dhebergement_8.set('fieldImages', {'fid': 'TextEdit', 'Nom de l\'e': 'TextEdit', 'Date de l\'': 'DateTime', 'Nom de l\'�': 'TextEdit', 'Année de': 'DateTime', 'Arrondisse': 'TextEdit', 'Quartier': 'TextEdit', 'Adresse co': 'TextEdit', 'Numéro de': 'TextEdit', 'Adresse e-': 'TextEdit', 'Site web': 'TextEdit', 'Catégorie': 'TextEdit', 'Nombre tot': 'TextEdit', 'Capacité': 'TextEdit', 'Types de c': 'TextEdit', 'Tarifs moy': 'TextEdit', 'Resraurati': 'TextEdit', 'Services a': 'TextEdit', 'Installati': 'TextEdit', 'Wi-Fi disp': 'TextEdit', 'Climatisat': 'TextEdit', 'Autres éq': 'TextEdit', 'Nombre t_1': 'TextEdit', 'Langues pa': 'TextEdit', 'Formation': 'TextEdit', 'Proximité': 'TextEdit', 'Accessibil': 'TextEdit', 'Disponibil': 'TextEdit', 'Certificat': 'TextEdit', 'Initiative': 'TextEdit', 'Programmes': 'TextEdit', 'Moyens de': 'TextEdit', 'Offres sp�': 'TextEdit', 'Langues su': 'TextEdit', 'Suggestion': 'TextEdit', 'Autres inf': 'TextEdit', 'Moyens d_1': 'TextEdit', 'Photo': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Types': 'TextEdit', 'Nom_Hotel': '', });
lyr_Etablissementsofficieux_9.set('fieldImages', {'fid': 'TextEdit', 'Nom de l\'e': 'TextEdit', 'Date de l\'': 'DateTime', 'Nom de l\'�': 'TextEdit', 'Année de': 'DateTime', 'Arrondisse': 'TextEdit', 'Quartier': 'TextEdit', 'Adresse co': 'TextEdit', 'Numéro de': 'TextEdit', 'Adresse e-': 'TextEdit', 'Site web': 'TextEdit', 'Catégorie': 'TextEdit', 'Nombre tot': 'TextEdit', 'Capacité': 'TextEdit', 'Types de c': 'TextEdit', 'Tarifs moy': 'TextEdit', 'Resraurati': 'TextEdit', 'Services a': 'TextEdit', 'Installati': 'TextEdit', 'Wi-Fi disp': 'TextEdit', 'Climatisat': 'TextEdit', 'Autres éq': 'TextEdit', 'Nombre t_1': 'TextEdit', 'Langues pa': 'TextEdit', 'Formation': 'TextEdit', 'Proximité': 'TextEdit', 'Accessibil': 'TextEdit', 'Disponibil': 'TextEdit', 'Certificat': 'TextEdit', 'Initiative': 'TextEdit', 'Programmes': 'TextEdit', 'Moyens de': 'TextEdit', 'Offres sp�': 'TextEdit', 'Langues su': 'TextEdit', 'Suggestion': 'TextEdit', 'Autres inf': 'TextEdit', 'Moyens d_1': 'TextEdit', 'Photo': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Types': 'TextEdit', 'Nom_Hotel': 'TextEdit', });
lyr_DirectionGnraleduTourismeetdelHotellerie_10.set('fieldImages', {'fid': 'TextEdit', 'Nom de l\'e': 'TextEdit', 'Date de l\'': 'DateTime', 'Nom de l\'�': 'TextEdit', 'Année de': 'DateTime', 'Arrondisse': 'TextEdit', 'Quartier': 'TextEdit', 'Adresse co': 'TextEdit', 'Numéro de': 'TextEdit', 'Adresse e-': 'TextEdit', 'Site web': 'TextEdit', 'Catégorie': 'TextEdit', 'Nombre tot': 'TextEdit', 'Capacité': 'TextEdit', 'Types de c': 'TextEdit', 'Tarifs moy': 'TextEdit', 'Resraurati': 'TextEdit', 'Services a': 'TextEdit', 'Installati': 'TextEdit', 'Wi-Fi disp': 'TextEdit', 'Climatisat': 'TextEdit', 'Autres éq': 'TextEdit', 'Nombre t_1': 'TextEdit', 'Langues pa': 'TextEdit', 'Formation': 'TextEdit', 'Proximité': 'TextEdit', 'Accessibil': 'TextEdit', 'Disponibil': 'TextEdit', 'Certificat': 'TextEdit', 'Initiative': 'TextEdit', 'Programmes': 'TextEdit', 'Moyens de': 'TextEdit', 'Offres sp�': 'TextEdit', 'Langues su': 'TextEdit', 'Suggestion': 'TextEdit', 'Autres inf': 'TextEdit', 'Moyens d_1': 'TextEdit', 'Photo': 'TextEdit', });
lyr_LimiteBrazzaville_3.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'NOM': 'header label - always visible', 'KM2': 'no label', 'PERIMètRE': 'no label', 'POP_2007': 'no label', 'DENSITé_2': 'no label', 'X_DEGRé': 'no label', 'Y_DEGRé': 'no label', 'q': 'no label', });
lyr_Moungali_4.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'KM2': 'no label', 'PERIMètRE': 'no label', 'POP_2007': 'no label', 'DENSITé_2': 'no label', 'X_DEGRé': 'no label', 'Y_DEGRé': 'no label', 'q': 'no label', 'NOMS': 'no label', });
lyr_LimiteMoungali_5.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'KM2': 'no label', 'PERIMètRE': 'no label', 'POP_2007': 'no label', 'DENSITé_2': 'no label', 'X_DEGRé': 'no label', 'Y_DEGRé': 'no label', 'q': 'no label', 'NOMS': 'no label', });
lyr_Potopoto_6.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'NOM': 'no label', 'KM2': 'no label', 'PERIMètRE': 'no label', 'POP_2007': 'no label', 'DENSITé_2': 'no label', 'X_DEGRé': 'no label', 'Y_DEGRé': 'no label', 'q': 'no label', });
lyr_LimitePotopoto_7.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'NOM': 'no label', 'KM2': 'no label', 'PERIMètRE': 'no label', 'POP_2007': 'no label', 'DENSITé_2': 'no label', 'X_DEGRé': 'no label', 'Y_DEGRé': 'no label', 'q': 'no label', });
lyr_Etablissemments_dhebergement_8.set('fieldLabels', {'fid': 'no label', 'Nom de l\'e': 'no label', 'Date de l\'': 'no label', 'Nom de l\'�': 'header label - always visible', 'Année de': 'no label', 'Arrondisse': 'inline label - visible with data', 'Quartier': 'inline label - visible with data', 'Adresse co': 'inline label - visible with data', 'Numéro de': 'no label', 'Adresse e-': 'no label', 'Site web': 'inline label - visible with data', 'Catégorie': 'inline label - always visible', 'Nombre tot': 'no label', 'Capacité': 'no label', 'Types de c': 'no label', 'Tarifs moy': 'inline label - visible with data', 'Resraurati': 'no label', 'Services a': 'no label', 'Installati': 'no label', 'Wi-Fi disp': 'inline label - visible with data', 'Climatisat': 'inline label - visible with data', 'Autres éq': 'no label', 'Nombre t_1': 'no label', 'Langues pa': 'inline label - visible with data', 'Formation': 'no label', 'Proximité': 'no label', 'Accessibil': 'no label', 'Disponibil': 'no label', 'Certificat': 'no label', 'Initiative': 'no label', 'Programmes': 'no label', 'Moyens de': 'inline label - visible with data', 'Offres sp�': 'no label', 'Langues su': 'no label', 'Suggestion': 'no label', 'Autres inf': 'no label', 'Moyens d_1': 'no label', 'Photo': 'no label', 'X': 'inline label - always visible', 'Y': 'inline label - visible with data', 'Types': 'inline label - always visible', 'Nom_Hotel': 'no label', });
lyr_Etablissementsofficieux_9.set('fieldLabels', {'fid': 'no label', 'Nom de l\'e': 'no label', 'Date de l\'': 'no label', 'Nom de l\'�': 'no label', 'Année de': 'no label', 'Arrondisse': 'inline label - always visible', 'Quartier': 'inline label - always visible', 'Adresse co': 'no label', 'Numéro de': 'no label', 'Adresse e-': 'no label', 'Site web': 'no label', 'Catégorie': 'inline label - always visible', 'Nombre tot': 'no label', 'Capacité': 'inline label - visible with data', 'Types de c': 'no label', 'Tarifs moy': 'no label', 'Resraurati': 'no label', 'Services a': 'no label', 'Installati': 'no label', 'Wi-Fi disp': 'header label - visible with data', 'Climatisat': 'header label - visible with data', 'Autres éq': 'no label', 'Nombre t_1': 'no label', 'Langues pa': 'no label', 'Formation': 'no label', 'Proximité': 'no label', 'Accessibil': 'no label', 'Disponibil': 'no label', 'Certificat': 'no label', 'Initiative': 'no label', 'Programmes': 'no label', 'Moyens de': 'no label', 'Offres sp�': 'no label', 'Langues su': 'no label', 'Suggestion': 'no label', 'Autres inf': 'no label', 'Moyens d_1': 'header label - always visible', 'Photo': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Types': 'no label', 'Nom_Hotel': 'header label - always visible', });
lyr_DirectionGnraleduTourismeetdelHotellerie_10.set('fieldLabels', {'fid': 'no label', 'Nom de l\'e': 'no label', 'Date de l\'': 'no label', 'Nom de l\'�': 'no label', 'Année de': 'no label', 'Arrondisse': 'inline label - always visible', 'Quartier': 'inline label - visible with data', 'Adresse co': 'no label', 'Numéro de': 'no label', 'Adresse e-': 'no label', 'Site web': 'no label', 'Catégorie': 'no label', 'Nombre tot': 'no label', 'Capacité': 'no label', 'Types de c': 'no label', 'Tarifs moy': 'no label', 'Resraurati': 'no label', 'Services a': 'no label', 'Installati': 'no label', 'Wi-Fi disp': 'no label', 'Climatisat': 'no label', 'Autres éq': 'no label', 'Nombre t_1': 'no label', 'Langues pa': 'no label', 'Formation': 'no label', 'Proximité': 'no label', 'Accessibil': 'no label', 'Disponibil': 'no label', 'Certificat': 'no label', 'Initiative': 'no label', 'Programmes': 'no label', 'Moyens de': 'no label', 'Offres sp�': 'no label', 'Langues su': 'no label', 'Suggestion': 'no label', 'Autres inf': 'no label', 'Moyens d_1': 'no label', 'Photo': 'no label', });
lyr_DirectionGnraleduTourismeetdelHotellerie_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
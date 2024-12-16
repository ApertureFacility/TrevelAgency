'use client';

import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Style, Icon } from 'ol/style';
import Overlay from 'ol/Overlay';

const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<Map | null>(null);

  useEffect(() => {
    // Проверяем, что мы на клиенте
    if (typeof window === 'undefined' || !mapRef.current) return;

    const vectorSource = new VectorSource();
    const locations = [
      { coords: [2.3522, 48.8566], name: 'Париж' },
      { coords: [86.925, 27.9881], name: 'Эверест' },
      { coords: [39.1903, 44.3342], name: 'Адыгея' },
    ];

    locations.forEach((location) => {
      const feature = new Feature({
        geometry: new Point(location.coords).transform('EPSG:4326', 'EPSG:3857'),
        name: location.name,
      });

      feature.setStyle(
        new Style({
          image: new Icon({
            src: 'https://cdn-icons-png.flaticon.com/512/252/252025.png',
            scale: 0.05,
          }),
        })
      );

      vectorSource.addFeature(feature);
    });

    const vectorLayer = new VectorLayer({ source: vectorSource });

    const overlayElement = document.createElement('div');
    overlayElement.style.cssText =
      'background-color: white; border: 1px solid black; padding: 5px; border-radius: 5px; display: none;';
    const overlay = new Overlay({ element: overlayElement });

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      overlays: [overlay],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    map.on('pointermove', (event) => {
      const features = map.getFeaturesAtPixel(event.pixel);
      if (features && features.length > 0) {
        const feature = features[0];
        const geometry = feature.getGeometry();
        if (geometry instanceof Point) {
          const coordinates = geometry.getCoordinates();
          const name = feature.get('name');
          if (coordinates && name) {
            overlayElement.innerHTML = `<button>${name}</button>`;
            overlayElement.style.display = 'block';
            overlay.setPosition(coordinates);
          }
        }
      } else {
        overlayElement.style.display = 'none';
      }
    });

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.setTarget(undefined);
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '400px', border: '1px solid #ccc' }} />;
};

export default MapComponent;

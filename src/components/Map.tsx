import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

interface MapProps {
  center: [number, number];
  zoom: number;
  onClick?: (e: maplibregl.MapMouseEvent) => void;
  onLoad?: () => void;
  onError?: (error: string) => void;
}

const Map: React.FC<MapProps> = ({ center, zoom, onClick, onLoad, onError }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const marker = useRef<maplibregl.Marker | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    try {
      if (!map.current) {
        map.current = new maplibregl.Map({
          container: mapContainer.current,
          style: {
            version: 8,
            sources: {
              'osm': {
                type: 'raster',
                tiles: [
                  'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
                ],
                tileSize: 256,
                attribution: '© OpenStreetMap contributors'
              }
            },
            layers: [
              {
                id: 'osm',
                type: 'raster',
                source: 'osm',
                minzoom: 0,
                maxzoom: 19
              }
            ]
          },
          center: center,
          zoom: zoom
        });

        // Add navigation control (zoom buttons)
        map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

        // Add scale control
        map.current.addControl(new maplibregl.ScaleControl(), 'bottom-left');

        // Add marker
        marker.current = new maplibregl.Marker({
          color: "#FF0000",
          draggable: true
        })
          .setLngLat(center)
          .addTo(map.current);

        // Handle marker drag events
        if (marker.current && onClick) {
          marker.current.on('dragend', () => {
            const lngLat = marker.current!.getLngLat();
            onClick({
              lngLat,
              point: { x: 0, y: 0 }, // These values aren't used in our onClick handler
              type: 'click'
            } as maplibregl.MapMouseEvent);
          });
        }

        // Handle map click events
        if (onClick) {
          map.current.on('click', (e) => {
            if (marker.current) {
              marker.current.setLngLat(e.lngLat);
            }
            onClick(e);
          });
        }

        map.current.on('load', () => {
          console.log('Map loaded successfully');
          if (onLoad) {
            onLoad();
          }
        });

        map.current.on('error', (e) => {
          console.error('Map error:', e);
          if (onError) {
            onError('An error occurred while loading the map');
          }
        });
      } else {
        // Update existing map
        map.current.setCenter(center);
        map.current.setZoom(zoom);
        if (marker.current) {
          marker.current.setLngLat(center);
        }
      }
    } catch (err) {
      console.error('Error with map:', err);
      if (onError) {
        onError('Failed to initialize or update the map');
      }
    }

    // Cleanup function
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
      if (marker.current) {
        marker.current.remove();
        marker.current = null;
      }
    };
  }, []);

  // Handle center and zoom changes
  useEffect(() => {
    if (map.current) {
      map.current.setCenter(center);
      map.current.setZoom(zoom);
      if (marker.current) {
        marker.current.setLngLat(center);
      }
    }
  }, [center, zoom]);

  return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
};

export default Map;

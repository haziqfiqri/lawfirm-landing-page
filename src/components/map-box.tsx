"use client";

import React, { useEffect, useRef } from "react";
import { Map, Marker, NavigationControl } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function MapBox() {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [101.5876434549639, 3.0460865526773375],
      zoom: 16,
      attributionControl: false,
      accessToken: process.env.MAPBOX_TOKEN as string,
    });

    map.addControl(new NavigationControl(), "top-right");
    new Marker().setLngLat([101.5876434549639, 3.0460865526773375]).addTo(map);
    return () => map.remove();
  }, []);
  return (
    <React.Fragment>
      <div className="flex w-full h-96 relative" id="mapbox-container">
        <div ref={mapContainerRef} className="absolute h-full w-full" />
      </div>
    </React.Fragment>
  );
}

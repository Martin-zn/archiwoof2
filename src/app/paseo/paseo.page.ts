import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-paseo',
  templateUrl: './paseo.page.html',
  styleUrls: ['./paseo.page.scss'],
})
export class PaseoPage implements OnInit {
  public map!: mapboxgl.Map;
  public style = 'mapbox://styles/mapbox/streets-v11';
  private duocCoordinates: [number, number] = [-70.598456, -33.511242]; // Longitud y latitud de Duoc UC: Sede Plaza Vespucio

  constructor() {
    (mapboxgl as typeof mapboxgl & { accessToken: string }).accessToken = environment.MAPBOX_KEY;
  }

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    // Inicializar el mapa centrado en las coordenadas de Duoc UC
    this.map = new mapboxgl.Map({
      container: 'map', // ID del contenedor
      style: this.style,
      center: this.duocCoordinates, // Coordenadas de Duoc UC
      zoom: 15, // Zoom ajustado para resaltar el lugar
    });

    // Añadir un marcador en Duoc UC: Sede Plaza Vespucio
    new mapboxgl.Marker({ color: 'red' }) // Color opcional para el marcador
      .setLngLat(this.duocCoordinates)
      .setPopup(new mapboxgl.Popup().setText('Duoc UC: Sede Plaza Vespucio')) // Añadir un popup opcional
      .addTo(this.map);
  }
}


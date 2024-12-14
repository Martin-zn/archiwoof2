import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine'; // Importa el complemento de rutas

@Component({
  selector: 'app-paseo',
  templateUrl: './paseo.page.html',
  styleUrls: ['./paseo.page.scss'],
})
export class PaseoPage implements OnInit {
  map!: L.Map;
  userMarker: L.Marker | undefined;
  routingControl: any;

  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {
    // Inicializar el mapa
    this.map = L.map('mapId').setView([-33.47967687444762, -70.55956402784257], 15);

    // Añadir capa base de OpenStreetMap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(this.map);

    // Obtener ubicación actual del usuario
    this.locateUser();
  }

  locateUser() {
    if (!navigator.geolocation) {
      alert('La geolocalización no es compatible con tu navegador.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Centrar el mapa en la ubicación del usuario
        this.map.setView([latitude, longitude], 15);

        // Añadir marcador del usuario
        if (this.userMarker) {
          this.map.removeLayer(this.userMarker);
        }
        this.userMarker = L.marker([latitude, longitude]).addTo(this.map)
          .bindPopup('¡Estás aquí!')
          .openPopup();
      },
      (error) => {
        console.error('Error obteniendo la ubicación:', error);
        alert('No se pudo obtener tu ubicación.');
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }

  traceRoute(destination: L.LatLngExpression) {
    if (!this.map) {
      console.error('El mapa no está inicializado.');
      return;
    }
  
    // Eliminar una ruta anterior si existe
    if (this.routingControl) {
      this.map.removeControl(this.routingControl);
    }
  
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
  
      // Crear el control de ruta
      this.routingControl = (L as any).Routing.control({
        waypoints: [
          L.latLng(latitude, longitude), // Ubicación actual
          L.latLng(destination), // Destino
        ],
        routeWhileDragging: true,
        createMarker: () => null, // Oculta los marcadores de inicio y fin
        show: false, // Desactiva la interfaz de instrucciones de texto
        addWaypoints: false, // Evita añadir puntos adicionales al arrastrar la ruta
      }).addTo(this.map);
    });
  }
  
}

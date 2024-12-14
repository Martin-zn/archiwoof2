declare module 'leaflet-routing-machine' {
    import * as L from 'leaflet';
    let control: (options?: any) => any;
    let waypoint: (latLng: L.LatLng, name?: string, options?: any) => any;
  
    namespace Routing {
      function control(options?: any): any;
      class Control extends L.Control {
        getWaypoints(): any;
        setWaypoints(waypoints: any[]): void;
      }
    }
  
    export = Routing;
  }
  
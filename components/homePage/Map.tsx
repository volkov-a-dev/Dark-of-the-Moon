import { SetStateAction, useState, Dispatch } from "react";
import styles from "./HomePage.module.css";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import { LatLngExpression, LatLngTuple, LatLngLiteral, Icon } from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
  Popup,
} from "react-leaflet";
import { Paper } from "@mui/material";

interface ChangeViewProps {
  coords: LatLngExpression;
}

interface LocationMarkerProps {
  geoData: LatLngExpression;
  setGeoData: Dispatch<SetStateAction<LatLngLiteral>>;
}

const ChangeView = ({ coords }: ChangeViewProps) => {
  const map = useMap();
  map.setView(coords, 12);
  return null;
};

const LocationMarker = ({ geoData, setGeoData }: LocationMarkerProps) => {
  const map = useMapEvents({
    click(e) {
      setGeoData(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  const markerIconSrc = new Icon({
    iconUrl: markerIcon.src,
  });

  return geoData === null ? null : (
    <Marker icon={markerIconSrc} position={geoData}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

const Map: React.FC = () => {
  const [geoData, setGeoData] = useState<LatLngLiteral>({
    lat: 53.89766,
    lng: 27.55382,
  });

  const center: LatLngTuple = [geoData.lat, geoData.lng];

  return (
    <Paper className={styles.map_paper}>
      <MapContainer className={styles.map} center={center} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker geoData={geoData} setGeoData={setGeoData} />
        <ChangeView coords={center} />
      </MapContainer>
    </Paper>
  );
};

export default Map;

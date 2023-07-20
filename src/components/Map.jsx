import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import style from "../styles/Map.module.scss";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const position = [55.572939, 37.619968];
  const fillBlueOptions = { fillColor: "blue" };
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className={style.map}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <CircleMarker center={position} pathOptions={fillBlueOptions} radius={30}>
        <Popup>
          <a href="https://yandex.ru/maps/-/CPrYf3b" target="blank">
            <b>Just-Tuning</b> <br /> Студия автотюнингаавтосервис,
            автотехцентравтоателье
          </a>
        </Popup>
      </CircleMarker>
    </MapContainer>
  );
};

export default Map;

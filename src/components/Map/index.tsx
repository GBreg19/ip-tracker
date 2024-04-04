import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLocation } from "@/hooks/context/location";
import locationSvg from "@/assets/icons/icon-location.svg";
import { Icon } from "leaflet";

const Map = () => {
  const data = useLocation((state) => state);
  const { lat, lng } = data.location;

  if (typeof lat !== "number" && typeof lng !== "number") return;

  const randomKey = Math.random();

  const customIcon = new Icon({
    iconUrl: locationSvg,
    iconSize: [35, 45],
  });

  return (
    <div className="absolute z-0 w-full h-[65%]">
      <MapContainer
        center={[lat as number, lng as number]}
        zoom={13}
        className=" w-full h-full"
        key={randomKey}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={customIcon} position={[lat as number, lng as number]}>
          <Popup>{data.isp}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

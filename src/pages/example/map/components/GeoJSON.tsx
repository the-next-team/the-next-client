import L, { divIcon } from "leaflet";
import { GeoJSON, MapContainer, TileLayer } from "react-leaflet";

function GeoJSONMap() {
  const position = [37.5004851, -96.2261503];
  const setColor = ({ properties }: any) => {
    return { weight: 1 };
  };

  const customMarkerIcon = (name: any) =>
    divIcon({
      html: name,
      className: "icon",
    });

  const setIcon = ({ properties }: any, latlng: any) => {
    return L.marker(latlng, { icon: customMarkerIcon(properties.Name) });
  };

  return (
    <div className="w-full h-[300px]">
      <MapContainer
        center={[37.5004851, -96.2261503]}
        zoom={4}
        maxZoom={18}
        zoomControl={false}
        minZoom={3}
        zoomAnimation={true}
        fadeAnimation={true}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={require("../components/seg.json")} style={setColor} />
        <GeoJSON
          data={require("../components/ecomp.json")}
          pointToLayer={setIcon}
        />
      </MapContainer>
    </div>
  );
}

export default GeoJSONMap;

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const BasicMap = () => {
  return (
    <div className="w-full h-[300px]">
     <MapContainer
        center={[47.31322, -1.319482]}
        zoom={8}
        maxZoom={18}
        minZoom={3}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[47.31322, -1.319482]}>
          <Popup>
            <div className="">
              A pretty CSS3 popup. <br /> Easily customizable.
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default BasicMap;

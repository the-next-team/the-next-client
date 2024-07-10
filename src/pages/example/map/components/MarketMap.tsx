import {
    Circle,
    MapContainer,
    Marker,
    Polygon,
    TileLayer,
} from "react-leaflet";

const MarkerMap = () => {
  const circleRadius = 4500;

  return (
    <div className="w-full h-[300px]">
      <MapContainer
        center={[47.31322, -1.319482]}
        zoom={10}
        maxZoom={18}
        minZoom={3}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[47.31322, -1.319482]} />
        <Circle center={[47.31322, -1.319482]} radius={circleRadius} />
        <Polygon
          positions={[
            [47.2263299, -1.6222],
            [47.21024000000001, -1.6270065],
            [47.1969447, -1.6136169],
            [47.18527929999999, -1.6143036],
            [47.1794457, -1.6098404],
            [47.1775788, -1.5985107],
            [47.1676598, -1.5753365],
            [47.1593731, -1.5521622],
            [47.1593731, -1.5319061],
            [47.1722111, -1.5143967],
            [47.1960115, -1.4841843],
            [47.2095404, -1.4848709],
            [47.2291277, -1.4683914],
            [47.2533687, -1.5116501],
            [47.2577961, -1.5531921],
            [47.26828069, -1.5621185],
            [47.2657179, -1.589241],
            [47.2589612, -1.6204834],
            [47.237287, -1.6266632],
            [47.2263299, -1.6222],
          ]}
        />
      </MapContainer>
    </div>
  );
};

export default MarkerMap;

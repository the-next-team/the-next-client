import Card from "../../../components/card/Card"
import BasicMap from "./components/BasicMap"
import GeoJSON from "./components/GeoJSON"
import MarkerMap from "./components/MarketMap"
import VMap from "./components/VMap"

function MapPage() {
  return (
    <div className="space-y-5 ">
      <Card title="Basic Map">
        <BasicMap />
      </Card>
      <Card title="Leaflet Marker, Circle & Polygon Map">
        <MarkerMap />
      </Card>
      <Card title="Leaflet GeoJSON Map">
        <GeoJSON />
      </Card>
      <Card title="React Vector Maps">
        <VMap />
      </Card>
    </div>
  )
}

export default MapPage
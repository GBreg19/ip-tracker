import { useEffect } from "react";
import Header from "./components/Layout/Header";
import Map from "./components/Map";
import useFetchLocation from "./hooks/custom/useFetchLocation";

function App() {
  const { fetchData, error } = useFetchLocation();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-screen relative">
      <Header error={error} />
      <Map />
    </div>
  );
}

export default App;

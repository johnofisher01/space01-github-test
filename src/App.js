import "./App.css";
import Header from "./components/Header";
import FeedContainer from "./components/FeedContainer";
import { useState, useMemo } from "react";
import FeedData from "./data/data";
import Search from "./components/Search";

function App() {
  const [shouldLimitTopFive, setShouldLimitTopFive] = useState(false);
  const dataspace = useMemo(() => {
    if (!shouldLimitTopFive) {
      return FeedData;
    }
    return [...FeedData]
      .sort((a, b) => (a.price > b.price ? 1 : -1))
      .slice(0, 5);
  }, [shouldLimitTopFive]);

  return (
    <>
      <Header />
      <div className="container">
        <Search />
        <button
          style={{ padding: "10px", textAlign: "center" }}
          onClick={() => setShouldLimitTopFive((x) => !x)}
        >
          Click for Cheapest 5 Deals
        </button>
        <FeedContainer dataspace={dataspace} />
      </div>
    </>
  );
}

export default App;

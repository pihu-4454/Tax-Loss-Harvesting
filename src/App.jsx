import { useEffect, useState } from "react";
import { fetchHoldings, fetchCapitalGains } from "./api/mockApi";
import CapitalGainsCard from "./components/CapitalGainsCard";
import HoldingsTable from "./components/HoldingsTable";

function App() {
  const [holdings, setHoldings] = useState([]);
  const [gains, setGains] = useState(null);
  const [selectedHoldings, setSelectedHoldings] = useState([]);

  useEffect(() => {
    fetchHoldings().then((data) => setHoldings(data));
    fetchCapitalGains().then((data) => setGains(data.capitalGains));
  }, []);

  if (!gains) return <h2>Loading...</h2>;

  // 🔥 Calculate AFTER harvesting
  const updatedGains = JSON.parse(JSON.stringify(gains));

  selectedHoldings.forEach((coin) => {
    if (coin.stcg.gain > 0) {
      updatedGains.stcg.profits += coin.stcg.gain;
    } else {
      updatedGains.stcg.losses += Math.abs(coin.stcg.gain);
    }

    if (coin.ltcg.gain > 0) {
      updatedGains.ltcg.profits += coin.ltcg.gain;
    } else {
      updatedGains.ltcg.losses += Math.abs(coin.ltcg.gain);
    }
  });

  const calcTotal = (g) =>
    (g.stcg.profits - g.stcg.losses) +
    (g.ltcg.profits - g.ltcg.losses);

  const beforeTotal = calcTotal(gains);
  const afterTotal = calcTotal(updatedGains);

  const savings = beforeTotal > afterTotal ? beforeTotal - afterTotal : 0;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Tax Loss Harvesting</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <CapitalGainsCard title="Pre-Harvesting" gains={gains} />
        <CapitalGainsCard title="After-Harvesting" gains={updatedGains} />
      </div>

      {savings > 0 && (
        <h3 style={{ color: "green" }}>
          You're going to save ₹{savings.toFixed(2)}
        </h3>
      )}

      <hr />

      <h2>Holdings</h2>
      <HoldingsTable
        holdings={holdings}
        onSelectionChange={setSelectedHoldings}
      />
    </div>
  );
}

export default App;

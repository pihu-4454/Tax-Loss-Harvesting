import { useState, useEffect } from "react";

function HoldingsTable({ holdings, onSelectionChange }) {
  const [selected, setSelected] = useState([]);

  const toggleRow = (coin) => {
    let updated;
    if (selected.includes(coin)) {
      updated = selected.filter((c) => c !== coin);
    } else {
      updated = [...selected, coin];
    }
    setSelected(updated);
  };

  const toggleAll = () => {
    let updated;
    if (selected.length === holdings.length) {
      updated = [];
    } else {
      updated = holdings.map((h) => h.coin);
    }
    setSelected(updated);
  };

  useEffect(() => {
    const selectedData = holdings.filter((h) =>
      selected.includes(h.coin)
    );
    onSelectionChange(selectedData);
  }, [selected]);

  return (
    <table style={{
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px"
    }}>
      <thead style={{ background: "#f3f4f6" }}>
        <tr>
          <th><input type="checkbox" onChange={toggleAll} checked={selected.length === holdings.length} /></th>
          <th>Asset</th>
          <th>Holdings</th>
          <th>Price</th>
          <th>STCG</th>
          <th>LTCG</th>
        </tr>
      </thead>

      <tbody>
        {holdings.map((coin, index) => (
          <tr key={index} style={{
            borderBottom: "1px solid #ddd",
            background: selected.includes(coin.coin) ? "#e0f2fe" : "white"
          }}>
            <td>
              <input
                type="checkbox"
                checked={selected.includes(coin.coin)}
                onChange={() => toggleRow(coin.coin)}
              />
            </td>

            <td>{coin.coin}</td>
            <td>{coin.totalHolding}</td>
            <td>₹{coin.currentPrice}</td>
            <td style={{ color: coin.stcg.gain >= 0 ? "green" : "red" }}>
              ₹{coin.stcg.gain.toFixed(2)}
            </td>
            <td style={{ color: coin.ltcg.gain >= 0 ? "green" : "red" }}>
              ₹{coin.ltcg.gain.toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default HoldingsTable;

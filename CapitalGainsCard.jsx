function CapitalGainsCard({ title, gains }) {
  const stcgNet = gains.stcg.profits - gains.stcg.losses;
  const ltcgNet = gains.ltcg.profits - gains.ltcg.losses;
  const total = stcgNet + ltcgNet;

  return (
    <div style={{
      background: title.includes("After") ? "#2563eb" : "#111",
      color: "white",
      padding: "20px",
      borderRadius: "12px",
      width: "320px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
    }}>
      <h3 style={{ marginBottom: "15px" }}>{title}</h3>

      <div style={{ marginBottom: "10px" }}>
        <strong>STCG</strong>
        <p>Profit: ₹{gains.stcg.profits}</p>
        <p>Loss: ₹{gains.stcg.losses}</p>
        <p>Net: ₹{stcgNet.toFixed(2)}</p>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <strong>LTCG</strong>
        <p>Profit: ₹{gains.ltcg.profits}</p>
        <p>Loss: ₹{gains.ltcg.losses}</p>
        <p>Net: ₹{ltcgNet.toFixed(2)}</p>
      </div>

      <hr />

      <h4>Total Gains: ₹{total.toFixed(2)}</h4>
    </div>
  );
}

export default CapitalGainsCard;
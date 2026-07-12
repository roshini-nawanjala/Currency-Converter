import "../styles/ExchangeRate.css";

function ExchangeRateCard({ from, to, rate }) {
  return (
    <div className="live-card">
      <div className="live-top">
        <div className="live-title">💹 Live Exchange Rate</div>

        <div className="live-badge">● LIVE</div>
      </div>

      <div className="live-center">
        <span className="currency-code">{from}</span>

        <span className="live-arrow">→</span>

        <span className="currency-code">{to}</span>
      </div>

      <div className="live-rate">{Number(rate).toFixed(2)} LKR</div>

      <div className="live-bottom">Updated Just Now</div>
    </div>
  );
}

export default ExchangeRateCard;

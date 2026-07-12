import "./../styles/Statistics.css";

function Statistics() {
  return (
    <div className="row mt-4 mb-4">
      <div className="col-md-4">
        <div className="stat-card">
          <h6>Total Conversions</h6>
          <h2>128</h2>
          <p>This Month</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="stat-card">
          <h6>Most Used</h6>
          <h2>USD</h2>
          <p>Currency</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="stat-card">
          <h6>Today's Conversions</h6>
          <h2>24</h2>
          <p>Today</p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;

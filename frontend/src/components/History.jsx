import { FaTrash, FaHistory } from "react-icons/fa";
import "../styles/History.css";

function History({ history, search, setSearch, onDeleteAll, onDelete }) {
  return (
    <div className="history-container mt-5">
      <div className="history-header">
        <h3>
          <FaHistory /> Conversion History
        </h3>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="🔍 Search by Currency..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button className="btn btn-danger" onClick={onDeleteAll}>
          <FaTrash /> Delete All
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th>#</th>
              <th>Amount</th>
              <th>From</th>
              <th>To</th>
              <th>Converted</th>
              <th>Rate</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {history.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center p-5">
                  No Conversion History
                </td>
              </tr>
            ) : (
              history
                .filter(
                  (item) =>
                    item.fromCurrency
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    item.toCurrency
                      .toLowerCase()
                      .includes(search.toLowerCase()),
                )
                .map((item, index) => (
                  <tr key={item.id ?? index}>
                    <td>{index + 1}</td>

                    <td>{item.amount}</td>

                    <td>{item.fromCurrency}</td>

                    <td>{item.toCurrency}</td>

                    <td>{item.convertedAmount}</td>

                    <td>{item.exchangeRate}</td>

                    <td>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => onDelete(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;

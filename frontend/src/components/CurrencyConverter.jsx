import { useEffect, useState } from "react";
import { FaExchangeAlt, FaArrowRight } from "react-icons/fa";

import ExchangeRateCard from "./ExchangeRateCard";
import History from "./History";
import Statistics from "./Statistics";

import {
  convertCurrency,
  getHistory,
  deleteHistory,
  deleteAllHistory,
  getLiveRate,
} from "../services/currencyService";

import "../styles/Currency.css";

import { toast } from "react-toastify";

import Swal from "sweetalert2";

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("LKR");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);

  const [history, setHistory] = useState([]);

  const [search, setSearch] = useState("");

  const [liveRate, setLiveRate] = useState(0);

  const currencies = [
    { code: "USD", name: "US Dollar" },
    { code: "LKR", name: "Sri Lankan Rupee" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "INR", name: "Indian Rupee" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "SGD", name: "Singapore Dollar" },
  ];

  useEffect(() => {
    loadHistory();
    loadLiveRate();
  }, []);

  useEffect(() => {
    loadLiveRate();
  }, [from, to]);

  const loadHistory = async () => {
    try {
      const response = await getHistory();

      setHistory(response);
    } catch (error) {
      console.log(error);
    }
  };

  const loadLiveRate = async () => {
    try {
      const rate = await getLiveRate(from, to);

      setLiveRate(rate);
    } catch (error) {
      console.log(error);
    }
  };

  const handleConvert = async () => {
    if (!amount) {
      alert("Please Enter Amount");
      return;
    }

    try {
      setLoading(true);

      const response = await convertCurrency({
        amount: Number(amount),
        from,
        to,
      });

      setResult(response);
      loadHistory();
      toast.success("Currency Converted Successfully!");
    } catch (error) {
      console.log(error);
      alert("Conversion Failed");
      toast.error("Conversion Failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAll = async () => {
    const result = await Swal.fire({
      title: "Delete All History?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Delete All",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    try {
      await deleteAllHistory();

      setHistory([]);

      toast.success("All History Deleted!");
    } catch (error) {
      console.log(error);

      toast.error("Delete Failed!");
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete History?",
      text: "This record will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    try {
      await deleteHistory(id);

      loadHistory();

      toast.success("History Deleted!");
    } catch (error) {
      console.log(error);

      toast.error("Delete Failed!");
    }
  };
  const swapCurrency = () => {
    const temp = from;

    setFrom(to);

    setTo(temp);
  };

  return (
    <div className="container py-5">
      <ExchangeRateCard from={from} to={to} rate={liveRate} />

      <Statistics history={history} />

      <div className="row justify-content-center mt-4">
        <div className="col-lg-7">
          <div className="currency-card">
            <h1 className="currency-title">💱 Currency Converter</h1>

            <div className="mb-4">
              <label className="currency-label">Amount</label>

              <input
                type="number"
                className="form-control"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="row align-items-end">
              <div className="col-md-5">
                <label className="currency-label">From</label>

                <select
                  className="form-select"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                >
                  {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.code} - {currency.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-2 text-center">
                <button className="swap-btn" onClick={swapCurrency}>
                  <FaExchangeAlt />
                </button>
              </div>

              <div className="col-md-5">
                <label className="currency-label">To</label>

                <select
                  className="form-select"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                >
                  {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.code} - {currency.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              className="convert-btn"
              onClick={handleConvert}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Converting...
                </>
              ) : (
                "Convert Currency"
              )}
            </button>

            {result && (
              <div className="result-card">
                <div className="success-icon">
                  <i className="bi bi-check-circle-fill"></i>
                </div>

                <h5 className="success-title">Conversion Successful</h5>

                <div className="result-main">
                  <div className="result-from">
                    {amount} {from}
                  </div>

                  <div className="arrow">
                    <FaArrowRight className="result-arrow" />
                  </div>

                  <div className="result-to">
                    {Number(result.convertedAmount).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    {to}
                  </div>
                </div>

                <div className="rate-box">
                  <small>📈 Exchange Rate</small>

                  <h6>
                    1 {from} = {result.exchangeRate} {to}
                  </h6>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <History
        history={history}
        search={search}
        setSearch={setSearch}
        onDeleteAll={handleDeleteAll}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default CurrencyConverter;

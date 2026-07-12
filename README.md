# 💱 Currency Converter Pro

A modern Full Stack Currency Converter Web Application built using **Spring Boot**, **React**, **MongoDB**, and the **ExchangeRate API**.

---

## 📌 Project Overview

Currency Converter Pro allows users to convert currencies using real-time exchange rates. The application stores conversion history, displays statistics, and provides a modern responsive user interface.

---

## ✨ Features

- 🌍 Real-time currency exchange rates
- 💱 Convert between multiple currencies
- 📊 Live exchange rate dashboard
- 📝 Conversion history
- 🔍 Search conversion history
- 🗑 Delete individual history records
- 🗑 Delete all conversion history
- 📈 Statistics dashboard
- 🔄 Currency swap button
- 📱 Responsive modern UI

---

## 🛠 Technologies Used

### Frontend
- React.js
- Vite
- Axios
- Bootstrap 5
- React Icons
- CSS3

### Backend
- Spring Boot
- Spring Web
- Spring Data MongoDB
- Maven
- Java 21

### Database
- MongoDB

### External API
- ExchangeRate API

---

## 📂 Project Structure

```
Currency-Converter
│
├── backend
│   ├── src
│   ├── pom.xml
│   └── ...
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── ...
```

---

## ⚙ Installation

### Clone the Repository

```bash
git clone https://github.com/roshini-nawanjala/Currency-Converter.git
```

---

## Backend Setup

```bash
cd backend
mvn spring-boot:run
```

Backend runs on:

```
http://localhost:8082
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## MongoDB

Make sure MongoDB is running locally.

Default connection:

```
mongodb://localhost:27017
```

Database:

```
currencydb
```

---

## REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/currency/convert | Convert Currency |
| GET | /api/currency/history | Get History |
| DELETE | /api/currency/history | Delete All History |
| DELETE | /api/currency/history/{id} | Delete One History |
| GET | /api/currency/rate | Live Exchange Rate |

---

## 📊 Application Features

✔ Live Exchange Rate Card

✔ Currency Conversion

✔ Conversion Result Card

✔ Search History

✔ Delete Individual History

✔ Delete All History

✔ Statistics Dashboard

✔ Responsive Design

---

## 📸 Screenshots

### Home Page

<img width="1355" height="594" alt="image" src="https://github.com/user-attachments/assets/61dafec6-14a0-4813-b856-678af6d2c887" />


### Currency Conversion

<img width="1348" height="602" alt="image" src="https://github.com/user-attachments/assets/2291df85-25d2-4aea-84cd-538df42ecd93" />


### Conversion History

<img width="1280" height="593" alt="image" src="https://github.com/user-attachments/assets/e1cc3ccb-de71-4f3e-b95a-4217800a8bba" />


---

## 🚀 Future Improvements

- User Authentication (JWT)
- Currency Charts
- Pagination
- Export History to PDF
- Dark / Light Theme
- Favorite Currencies
- Deployment using Docker

---

## 👩‍💻 Developer

**Roshini Nawanjala**

GitHub:

https://github.com/roshini-nawanjala

---

## 📄 License

This project is developed for educational purposes.

---

## ⭐ Support

If you like this project, don't forget to give it a ⭐ on GitHub.

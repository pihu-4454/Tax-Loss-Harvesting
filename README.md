# 💰 Tax Loss Harvesting Tool

A responsive React application that simulates a **Tax Loss Harvesting** strategy by allowing users to select crypto holdings and observe how it impacts their capital gains.

---

## 🚀 Features

- 📊 Displays **Pre-Harvesting Capital Gains**
- 🔄 Dynamically calculates **After-Harvesting Gains**
- ✅ Select/Deselect individual holdings
- ☑️ Select All functionality
- 💸 Real-time **tax savings calculation**
- 🎯 Clean and responsive UI

---

## 🧠 How It Works

- The app fetches:
  - Holdings data (mock API)
  - Capital gains data (mock API)

- When a user selects holdings:
  - Positive gains → added to profits
  - Negative gains → added to losses

- Updated gains are calculated:


- Total Capital Gains:


- If gains reduce → tax savings is displayed

---

## 🛠️ Tech Stack

- React (Vite)
- JavaScript
- CSS (inline styling)
- Mock APIs (Promises)

---

## 📁 Folder Structure

src/
├── api/
│ └── mockApi.js
├── components/
│ ├── CapitalGainsCard.jsx
│ └── HoldingsTable.jsx
├── data/
│ └── holdings.json
├── App.jsx
├── main.jsx

## ⚙️ Setup Instructions

```bash
# Clone the repository
git clone <your-repo-link>

# Navigate into project
cd tax-loss-harvesting

# Install dependencies
npm install

# Run the app
npm run dev

Then open in browser:
http://localhost:5173/
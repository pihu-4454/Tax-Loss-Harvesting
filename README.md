# 💰 Tax Loss Harvesting Tool

A responsive React application that simulates a **Tax Loss Harvesting** strategy by allowing users to select crypto holdings and observe how it impacts their capital gains.

---

## 🚀 Features

📊 Displays Pre-Harvesting Capital Gains
🔄 Dynamically calculates After-Harvesting Gains
✅ Select/Deselect individual holdings
☑️ Select All functionality for bulk actions
💸 Real-time tax savings calculation
⚡ Instant UI updates based on user interaction
📱 Responsive and clean UI design

---

## 🧠 How It Works

1. The app uses mock APIs to fetch:
  Holdings data
  Capital gains data
  
2. When a user selects holdings:
  Positive gains are added to profits
  Negative gains are added to losses
  
3. The system recalculates:
  Short-Term Capital Gains (STCG)
  Long-Term Capital Gains (LTCG)
  Total Realised Capital Gains
  
4. If the post-harvesting gains are lower than pre-harvesting:
  💸 A tax savings message is displayed

---

## 🛠️ Tech Stack

- React (Vite)
- JavaScript
- CSS (inline styling)
- Mock APIs (Promises based)

---

## 📁 Folder Structure

tax-loss-harvesting/
├── public/
├── src/
│   ├── api/
│   │   └── mockApi.js
│   ├── components/
│   │   ├── CapitalGainsCard.jsx
│   │   └── HoldingsTable.jsx
│   ├── data/
│   │   └── holdings.json
│   ├── utils/
│   │   └── calculateGains.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md

## ⚙️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/<your-username>/Tax-Loss-Harvesting.git

# Navigate into the project
cd tax-loss-harvesting

# Install dependencies
npm install

# Run the development server
npm run dev
```

Then open in your browser:
👉 http://localhost:5173/

🌐 Live Demo
  Vercel - https://tax-loss-harvesting-alpha.vercel.app/


  ✨ Assumptions
Mock API data is static and simulates real-world responses
Tax calculations are simplified for demonstration purposes
No backend or authentication is implemented


🚀 Future Improvements
  🔐 Backend integration with real APIs
  📊 Advanced analytics & filtering
  🌙 Dark mode support
  📈 Charts for visual insights
  📦 Portfolio persistence per user

🙌 Acknowledgement

This project was built as part of a frontend assignment to demonstrate:
React fundamentals
State management
API handling
Real-world financial logic implementation

📬 Contact

If you have any feedback or suggestions, feel free to reach out!
  Email - swathisahani2105@gmail.com
  GitHub - github.com/pihu-4454/
  LinkedIn - https://www.linkedin.com/in/swathi-sahani-476476282/


⭐ If you found this useful
Give it a star ⭐ on GitHub — it helps!

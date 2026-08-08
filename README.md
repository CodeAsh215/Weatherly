# 🌤️ Weatherly

### A modern, responsive weather dashboard built with React, Vite and Tailwind CSS.

Weatherly is a clean and responsive weather application that provides real-time weather information, hourly forecasts, and a 7-day forecast for any searched city.

Built as a hands-on React project focused on **API integration, component-based architecture, responsive UI design, and modern frontend development**.

<p align="center">
  <a href="YOUR_LIVE_DEMO_URL">🌐 Live Demo</a>
  •
  <a href="https://github.com/CodeAsh215/Weatherly">📂 GitHub</a>
</p>

---

## ✨ Features

* 🔍 Search weather by city
* 🌡️ Real-time current temperature
* 🌤️ Current weather conditions
* 💨 Wind speed and direction
* 💧 Humidity information
* 🌅 Feels-like temperature and weather details
* 🕐 Hourly weather forecast
* 📅 7-day weather forecast
* ⏳ Loading states
* ❌ Error handling
* 📱 Responsive design
* 🎨 Modern gradient-based UI
* 🧩 Component-based React architecture

---

## 📸 Preview

### Desktop

![Weatherly Desktop Screenshot](./screenshots/desktop.png)

### Mobile

![Weatherly Mobile Screenshot](./screenshots/mobile.png)

---

## 🛠️ Tech Stack

| Technology      | Purpose                           |
| --------------- | --------------------------------- |
| ⚛️ React        | Building the user interface       |
| ⚡ Vite          | Development server and build tool |
| 🎨 Tailwind CSS | Styling and responsive design     |
| 🟨 JavaScript   | Application logic                 |
| ✨ Lucide React  | UI icons                          |
| 🌦️ Weather API | Weather data                      |

---

## 🧩 Project Structure

```text
Weatherly/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CurrentWeather.jsx
│   │   ├── HourlyForecast.jsx
│   │   ├── WeeklyForecast.jsx
│   │   └── WeatherDetails.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/CodeAsh215/Weatherly.git
```

### 2. Navigate to the project

```bash
cd Weatherly
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

Make sure your `.env` file is included in `.gitignore` and your API key is never committed to GitHub.

### 5. Start the development server

```bash
npm run dev
```

Open the local development URL shown by Vite in your browser.

---

## 🔄 How Weatherly Works

```text
User searches for a city
          ↓
     React handles input
          ↓
    Weather API request
          ↓
      Weather data
          ↓
      React state
          ↓
 ┌────────┴─────────┐
 ↓        ↓         ↓
Current  Hourly   Weekly
Weather  Forecast Forecast
```

The application separates the interface into reusable React components, making the code easier to maintain and extend.

---

## 🎯 What I Learned

Building Weatherly helped me practice:

* React functional components
* React state management
* Passing data through props
* API integration
* Asynchronous JavaScript
* Loading and error states
* Tailwind CSS
* Responsive layouts
* Component-based architecture
* Environment variables
* Git and GitHub workflow

---

## 🚀 Future Improvements

Planned improvements include:

* 📍 Current-location weather
* 🌙 Dark/light theme
* 🌡️ Celsius/Fahrenheit toggle
* ⭐ Favorite locations
* 🌧️ More detailed precipitation information
* 📊 Weather charts
* ♿ Improved accessibility
* 🧪 Component testing
* ⚡ Performance optimizations

---

## 🌐 Deployment

Weatherly can be deployed using modern frontend hosting platforms such as Vercel or Netlify.

**Live Demo:** [Add deployment link here]

---

## 👨‍💻 Author

**Rudra Agarwal**

Computer Science & Engineering Student

GitHub: [@CodeAsh215](https://github.com/CodeAsh215)

---

## 📄 License

This project is open source and available under the MIT License.

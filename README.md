# 📰 Finance Digest

A responsive finance news application built with **React 19**, **Vite**, **Tailwind CSS**, and **TanStack React Query**.  
This project was developed as part of a web assessment to build a simple, fast, and user-friendly news digest app that fetches financial news from an API and displays it beautifully.

---

## 🚀 Features

- Fetches **real-time financial news** from [Finnhub Market News API](https://finnhub.io/docs/api/market-news)
- Displays **headline**, **source**, **date**, and **thumbnail** for each news post
- Clicking a news item redirects users to the **detailed news post** on the external source
- Fully **responsive UI**, adapting seamlessly across devices
- **Error handling** for failed API requests
- Built with **modern React (v19)**, using **React Query** for efficient data fetching and caching
- **Tailwind CSS** for styling and responsiveness
- Fast dev and build setup powered by **Vite**

---

## 🧰 Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | React 19 |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Data Fetching | TanStack React Query |
| Language | TypeScript |
| Linting | ESLint |
| Package Manager | npm |

---

## 🧪 Installation & Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/<your-username>/finance-digest.git
cd finance-digest
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## 🔑 API Configuration

This app uses the **Finnhub API** to fetch general financial news.

- API Endpoint: [https://finnhub.io/docs/api/market-news](https://finnhub.io/docs/api/market-news)
- News Category: `general`

To add your API key:

1. Create a `.env` file in the project root.
2. Add the following:
   ```bash
   VITE_FINNHUB_API_KEY=your_api_key_here
   ```
3. Restart your dev server.

---

## 💡 Error Handling

If the API fails to respond or returns an error:
- A user-friendly error message is displayed.
- The app remains stable and responsive.

---

## 🧭 Design

The app UI was built to match the provided **Figma design**, ensuring visual accuracy, responsiveness, and accessibility.

---

## 🌐 Live Demo

Check out the live version here: [https://maon-assessment.vercel.app/](https://maon-assessment.vercel.app/)

---

## ✅ Bonus

- Includes loading states and graceful error boundaries
- React Query ensures caching and performance optimization
- Scalable folder structure for future extension
- Modern tooling (Vite + React 19 + Tailwind 4)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Emmanuel Ebube**  
Frontend Developer  
[Portfolio](https://ebube-emmanuel.vercel.app) • [LinkedIn](https://www.linkedin.com/in/emmanuel-egbosimba-0a9569230) • [GitHub](https://github.com/immanuellking)

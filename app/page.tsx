"use client";

import { BrowserRouter } from "react-router-dom";

import MainPage from "./components/MainPage/MainPage";

export default function Home() {
  return (
    <BrowserRouter>
      <div className="page">
        <main className="main">
          <MainPage />
        </main>
      </div>
    </BrowserRouter>
  );
}

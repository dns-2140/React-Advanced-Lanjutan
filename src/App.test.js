// src/App.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "./redux/store"; // adjust if your store is in another folder
import App from "./App";

// Helper to render App with Redux store
const renderWithProvider = (ui) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

test("renders logo, ThemeToggle, and TodoContainer", () => {
  renderWithProvider(<App />);

  // Logo should be there
  expect(screen.getByRole("img")).toBeInTheDocument();

  // Theme toggle button should be there
  expect(
    screen.getByRole("button", { name: /switch to dark mode/i })
  ).toBeInTheDocument();

  // Todo input field should be there
  expect(screen.getByPlaceholderText(/Tambah tugas baru/i)).toBeInTheDocument();
});

test("toggles theme when button is clicked", () => {
  renderWithProvider(<App />);
  const themeButton = screen.getByRole("button", {
    name: /switch to dark mode/i,
  });

  // Click once → switch to dark mode
  fireEvent.click(themeButton);
  expect(document.documentElement).toHaveAttribute("data-theme", "dark");

  // Click again → switch back to light mode
  fireEvent.click(themeButton);
  expect(document.documentElement).toHaveAttribute("data-theme", "light");
});

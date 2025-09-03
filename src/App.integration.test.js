// src/TodoApp.integration.test.js
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import axios from "axios";
import "@testing-library/jest-dom"; // for matchers like toBeInTheDocument

// --- MOCK AXIOS BEFORE IMPORTING STORE ---
jest.mock("axios");

// Mock responses for API calls
axios.get.mockResolvedValue({ data: [] }); // fetchTodos
axios.post.mockResolvedValue({
  data: { id: 1, title: "Learn Jest", completed: false },
}); // addTodo
axios.delete.mockResolvedValue({}); // deleteTodo

import store from "./redux/store"; // import after mocking axios

// Helper to render App with real store
function renderWithStore() {
  return render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}

describe("Todo App Integration", () => {
  test("adds and deletes a todo", async () => {
    renderWithStore();

    // Type a todo
    const input = screen.getByPlaceholderText(/tambah tugas baru/i);
    fireEvent.change(input, { target: { value: "Learn Jest" } });

    // Click "Tambah" button
    const addButton = screen.getByRole("button", { name: /tambah/i });
    fireEvent.click(addButton);

    // Wait for the new todo to appear
    await waitFor(() => {
      expect(screen.getByText("Learn Jest")).toBeInTheDocument();
    });

    // Click "Hapus" button to delete
    const deleteButton = screen.getByRole("button", { name: /hapus/i });
    fireEvent.click(deleteButton);

    // Wait for the todo to be removed
    await waitFor(() => {
      expect(screen.queryByText("Learn Jest")).not.toBeInTheDocument();
    });
  });
});

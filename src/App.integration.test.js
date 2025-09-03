// src/TodoApp.integration.test.js
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"; // <- Add this
import { Provider } from "react-redux";
import App from "./App";
import axios from "axios";
import store from "./redux/store";

jest.mock("axios");

describe("Todo App Integration", () => {
  beforeEach(() => {
    // Mock initial GET request
    axios.get.mockResolvedValue({ data: [] });
  });

  test("adds and deletes a todo", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Type a todo
    const input = screen.getByPlaceholderText(/tambah tugas baru/i);
    fireEvent.change(input, { target: { value: "Learn Jest" } });

    // Mock addTodo API
    axios.post.mockResolvedValueOnce({
      data: { id: 1, title: "Learn Jest", completed: false },
    });

    // Click submit
    const addButton = screen.getByRole("button", { name: /tambah/i });
    fireEvent.click(addButton);

    // Wait for it to appear in the DOM
    await waitFor(() => {
      expect(screen.getByText("Learn Jest")).toBeInTheDocument();
    });

    // Mock deleteTodo API
    axios.delete.mockResolvedValueOnce({});

    const deleteButton = screen.getByRole("button", { name: /hapus/i });
    fireEvent.click(deleteButton);

    // Wait for it to be removed
    await waitFor(() => {
      expect(screen.queryByText("Learn Jest")).not.toBeInTheDocument();
    });
  });
});

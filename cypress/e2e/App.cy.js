describe("Todo App E2E", () => {
  const APP_URL = "http://localhost:5173"; // adjust if needed

  beforeEach(() => {
    cy.visit(APP_URL); // Visit your running app
  });

  it("should add and delete a todo", () => {
    // Type a new todo
    cy.get('input[placeholder="Tambah tugas baru"]').type("Learn Cypress");

    // Click "Tambah" button
    cy.contains("button", "Tambah").click();

    // Verify the todo appears
    cy.contains("Learn Cypress").should("be.visible");

    // Click "Hapus" button to delete
    cy.contains("Learn Cypress")
      .parent()
      .find('button[aria-label="Hapus"]')
      .click();

    // Verify it disappears
    cy.contains("Learn Cypress").should("not.exist");
  });
});

describe("User can search for Github Users", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("contains search functionality", () => {
    cy.get("section[name='title']").should("contain", "GitHub Search engine");
  });
});

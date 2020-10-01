describe("Visitor can see github users", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/data",
      response: "fixture:data.json",
    });
    cy.visit("/");
  });

  it("visitor can see gitHub user list", () => {
    cy.get('[data-cy="header"]').should("contain", "Github List");
  });
    it("shows first user", () => {
      cy.get('[data-cy="data-174460"]').within(() => {
        cy.get('[data-cy="teaser"]').should(
          "contain",
          "Pressmeddelande angående eventuellt mord i Äppelbo"
        );
      });
    });

});

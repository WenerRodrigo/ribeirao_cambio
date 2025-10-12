describe("Header Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("deve exibir o título da empresa", () => {
    cy.get("h1").contains("Ribeirão Câmbio").should("be.visible");
  });

  it("deve exibir todos os links de navegação", () => {
    const links = ["Home", "Sobre", "Serviços", "Contato"];
    links.forEach((link) => {
      cy.get("nav").contains(link).should("be.visible");
    });

    it("deve marcar o primeiro link como ativo", () => {
      cy.get("ul li").first().should("have.class", "font-bold");
    });
  });
});

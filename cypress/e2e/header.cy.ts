describe('Header e Menu Mobile', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173'); // ajuste conforme seu servidor local
  });

  it('deve exibir o header fixo no topo', () => {
    cy.get('header').should('exist').and('be.visible');
  });

  // it('deve abrir e fechar o menu mobile', () => {
  //   cy.viewport('iphone-6');
  //   cy.get('button').first().click(); // abre o menu
  //   cy.get('.fixed.inset-0').should('exist'); // overlay aparece
  //   cy.get('button').contains('X').click(); // fecha o menu
  //   cy.get('.fixed.inset-0').should('not.exist');
  // });

  // it('deve rolar até a seção Sobre ao clicar no botão correspondente', () => {
  //   cy.get('button').contains('Sobre').click();
  //   cy.url().should('include', '#sobre');
  // });
});

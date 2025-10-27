describe('The Internet - Login Tests', () => {
  it('login com credenciais válidas', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()
    
    cy.url().should('include', '/secure')
    cy.get('.flash.success').should('contain.text', 'You logged into a secure area!')
    cy.get('a.button').should('contain.text', 'Logout')
  })

  it('tentativa com senha inválida exibe erro', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('senhaErrada')
    cy.get('button[type="submit"]').click()
    
    cy.get('.flash.error').should('be.visible')
    cy.get('.flash.error').should('contain.text', 'Your password is invalid!')
  })
})

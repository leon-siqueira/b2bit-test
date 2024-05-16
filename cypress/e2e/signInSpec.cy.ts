describe('login', () => {
  it('returns an error if wrong credentials', () => {
    cy.intercept('POST', 'https://api.homologation.cliqdrive.com.br/auth/login/', {
      statusCode: 401,
      body: { message: 'Your credentials are invalid' },
    })

    cy.visit('/')

    cy.get('input#email')
      .type('bad@credential.com')
      .should('have.value', 'bad@credential.com')

    cy.get('input#password')
      .type('badpassword')
      .should('have.value', 'badpassword')

    cy.get('[data-cy="signInButton"]').click()

    cy.url().should('eq', `${Cypress.config().baseUrl}`)
    cy.get('[data-cy="notification"]').should('contain.text', 'Your credentials are invalid')
  })
})

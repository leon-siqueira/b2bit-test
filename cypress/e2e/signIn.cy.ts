import { login } from "./helper/login.cy"

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

  it('redirects to the user page if correct credentials', () => {
    login()

    cy.url().should('eq', `${Cypress.config().baseUrl}`)

    cy.get('[data-cy="notification"]').should('contain.text', 'Logged in')

    cy.visit('/user')

    cy.get('[data-cy="logout"]').should('exist')
  })

  it('logs out the user when you click the button', () => {
    login()

    cy.get('[data-cy="logout"]').click()

    cy.url().should('eq', `${Cypress.config().baseUrl}`)

    cy.get('[data-cy="notification"]').should('contain.text', 'Logged out')
  })
})

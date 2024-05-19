import { login } from "./helper/login.cy";

describe('auth', () => {
  it('does NOT allow access to the user page if you are not logged in', () => {
    cy.visit('/user')

    cy.url().should('eq', `${Cypress.config().baseUrl}`)

    cy.get('[data-cy="notification"]').should('contain.text', 'You\'re not allowed to access this page. Please log in.')

    cy.get('[data-cy="loginForm"]').should('exist')

    login()

    cy.visit('/user')

    cy.get('[data-cy="userCard"]').should('exist')
  })
})

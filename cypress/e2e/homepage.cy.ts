import { login } from "./helper/login.cy"

describe('Home page', () => {
  it('shows the login form if you are not logged in', () => {
    cy.visit('/')

    cy.get('[data-cy="loginForm"]').should('exist')
  })

  it('shows the user card with user\'s data in it', () => {
    login()

    cy.visit('/')

    cy.get('[data-cy="userCard"]').should('exist')
    cy.get('[data-cy="userCard"]').should('contain.text', 'Jon Doe')
    cy.get('[data-cy="userCard"]').should('contain.text', 'some@credential.com')
  })
})

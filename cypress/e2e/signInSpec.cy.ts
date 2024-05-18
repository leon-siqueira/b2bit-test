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

export function login() : void {
  cy.intercept('POST', 'https://api.homologation.cliqdrive.com.br/auth/login/', {
    statusCode: 200,
    body: {
      "user": {
          "id": 4,
          "name": "Jon",
          "email": "some@credential.com",
          "is_active": true,
          "avatar": null,
          "type": "StoreUser",
          "created": "2023-09-20T11:42:54.515946-03:00",
          "modified": "2024-04-26T11:45:26.768591-03:00",
          "role": "OWNER"
      },
      "tokens": {
          "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc0Njg4MTc0NywiaWF0IjoxNzE1MzQ1NzQ3LCJqdGkiOiIyMTRkOTEyNmJhYWY0YzY1ODMwYzcxODU4ZWNkYjdiNSIsInVzZXJfaWQiOjR9.22g5QzHO5SoN92dNYQV67oWVN8uV42Q8-c4qT_3lrHs",
          "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE1NDMyMTQ3LCJpYXQiOjE3MTUzNDU3NDcsImp0aSI6IjAyZTBmZTY2YmQ2MDRkMmY5MjJhNGRiMzIxNmFiYzU2IiwidXNlcl9pZCI6NH0.L4H2FEKlhM5RXeqX0o0xiszBYe5uH7SyEABAnhOSf1A"
      }
    }
  })

  cy.intercept('GET', 'https://api.homologation.cliqdrive.com.br/auth/profile/', {
    statusCode: 200,
    body:{
      "id": "445e138e-99c6-4055-91d1-ebc2fb6165ee",
      "avatar": {
          "id": 8,
          "image_high_url": "https://cognuro-app-assets.s3.amazonaws.com/media/images/IMG_4452_0spsnuL.jpg",
          "image_medium_url": "https://cognuro-app-assets.s3.amazonaws.com/media/images/IMG_4452_medium_VjJtnel.jpg",
          "image_low_url": "https://cognuro-app-assets.s3.amazonaws.com/media/images/IMG_4452_low_5Vh2hYj.jpg"
      },
      "name": "Jon",
      "last_name": "Doe",
      "email": "some@credential.com",
      "role": {
          "value": 0,
          "label": "Staff"
      },
      "last_login": "2022-03-08T14:28:39.781811Z",
      "staff_role": {
          "value": 0,
          "label": "Admin"
      }
    }
  })

  cy.visit('/')

  cy.get('input#email')
    .type('some@credential.com')
    .should('have.value', 'some@credential.com')

  cy.get('input#password')
    .type('goodpassword')
    .should('have.value', 'goodpassword')

  cy.get('[data-cy="signInButton"]').click()
}

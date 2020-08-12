/* eslint-disable no-undef */
describe('Cycle life of Posts', function () {
  it('Resquest', function () {
    cy.server()
    cy.route('GET', 'posts').as('havePosts')
    cy.visit('/')
    cy.wait('@havePosts').its('status').should('eq', 200)
  })

  it('Criar um Post', function () {
    cy.contains('New Post').click()
    cy.get('.post-title').should('contain', 'Post Title').type('lorem')
    cy.get('.post-description').should('contain', 'Resume').type('lorem')
    cy.get('.post-category').click().type('Games{enter}')
    cy.get('.post-image').should('contain', 'Image URL').type('https://image.flaticon.com/icons/svg/1606/1606452.svg')
    cy.get('.q-editor__content').should('have.class', 'q-editor__content').type('"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.')
    cy.server()
    cy.route('POST', 'posts').as('newPost')
    cy.contains('Create').click()
    cy.wait('@newPost').its('status').should('eq', 201)
    cy.route('GET', 'posts').as('listPosts')
    cy.get('[data-dialog="ok"]').should('contain', 'ok').click()
    cy.wait('@listPosts').its('status').should('eq', 200)
    cy.url().should('eq', 'http://localhost:8080/posts')
  })
})

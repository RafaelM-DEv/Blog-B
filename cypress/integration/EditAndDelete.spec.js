/* eslint-disable no-undef */
describe('Edit post and Delete', function () {
  it('Edit Posts', function () {
    cy.visit('/')
    cy.get('a[href="/posts/7/edit"]').click()
    cy.url().should('eq', 'http://localhost:8080/posts/7/edit')
    cy.get('input[name="Post Title"]').clear().type('Vou ser deletado').should('have.value', 'Vou ser deletado')
    cy.get('textarea').clear().type('established fact that a reader will be distracted by the readable content of a page when')
    cy.get('.post-category').click().type('Games{enter}')
    cy.get('.q-editor__content').should('have.class', 'q-editor__content').type('{selectall}{backspace}"t is Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."')
    cy.server()
    cy.route('PUT', '/posts/7').as('updatePost')
    cy.contains('Save').click()
    cy.wait('@updatePost').its('status').should('eq', 200)
    cy.get('[data-dialog="ok"]').should('contain', 'ok').click()
  })
  it('Delete Post', function () {
    cy.get('#7').should('contain', 'Delete').click()
    cy.get('button[name="Delete"]').click()
  })
})

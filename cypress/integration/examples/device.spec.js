describe('Device Test', () => {
    it('720p', () => {
        cy.viewport(1280, 720)
        cy.visit('https://www.gp.se/')
        cy.wait(3000)
    })
})
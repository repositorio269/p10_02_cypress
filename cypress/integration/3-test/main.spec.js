describe('Crear cliente', () => {

    const time = 100;

    it('Navega al componente para crear cliente', () => {
        cy.visit('http://127.0.0.1:3000');
        cy.wait(time);
        cy.get('nav > button').click();
        cy.wait(time);
        cy.get('[href="/ventas"]').click();
        cy.wait(time);
        cy.get('a > button').click();
        cy.wait(time);
        cy.get('[href="/ventas/crear-cliente"] > button').click();
        cy.wait(time);
        cy.get(':nth-child(1) > .col-100 > input').type('Gas Natural');
        cy.wait(time);
        cy.get(':nth-child(2) > .col-100 > input').type('A2576517');
        cy.wait(time);
        cy.get(':nth-child(3) > .col-100 > input').type('Bilbao');
        cy.wait(time);
        cy.get('[type="submit"]').click();
    })
    it('Registra el nuevo cliente', () => {
        cy.get(':nth-child(5) > :nth-child(1)').contains('Gas Natural');
    })

})
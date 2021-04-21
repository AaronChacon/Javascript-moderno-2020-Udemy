/// <reference types="cypress" />

describe('Llena los campos del formulario, agrega una cita y la elimina', () =>{
    it('Campos nueva cita', () => {

        cy.visit('/index.html');

        cy.get('[data-cy="mascota-input"]')
            .type('Coco');
            
        cy.get('[data-cy="propietario-input"]')
            .type('Aaron Chacon');
        
        cy.get('[data-cy="telefono-input"]')
            .type('123456789');
        
        cy.get('[data-cy="fecha-input"]')
            .type('2020-11-04');
        
        cy.get('[data-cy="hora-input"]')
            .type('20:30');
        
        cy.get('[data-cy="sintomas-textarea"]')
            .type('Se siente mal y no come mucho');
        
        cy.get('[data-cy="submit-cita"]')
            .click();

        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas')

        cy.get('[data-cy="alerta"')
            .should('have.class', 'alert-success')
            .invoke('text')
            .should('equal', 'Se agregó correctamente')


            

    });
    
    it('Elimina cita ', () => {
        cy.get('[data-cy="btn-eliminar"]')
            .click();

        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'No hay Citas, comienza creando una')
    })

});
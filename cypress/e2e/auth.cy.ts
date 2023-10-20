describe('auth flow', () => {
    it('Succesfully redirect if no logged in', () => {
        cy.visit('/');
        cy.location('pathname').should('eq', '/auth/login');
    });

    it('Succesfully redirect to home when log in', () => {
        cy.login();
        cy.location('pathname').should('eq', '/');
    });

    it('succesfully route to home if user is present in storage', () => {
        cy.setAuthSession();
        cy.visit('/');
        cy.location('pathname').should('eq', '/');
    });

    it('succesfully log out if logout button is pressed', () => {
        cy.login();
        cy.get('[data-cy="logout-button"]').click();
        cy.location('pathname').should('eq', '/auth/login');
    });
});

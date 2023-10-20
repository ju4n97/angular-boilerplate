describe('home spec', () => {
    it('Succesfully redirect if no logged in', () => {
        cy.login();
        cy.location('pathname').should('eq', '/');
    });

    it('Succesfully switch theme to dark', () => {
        cy.login();
        const darkThemeBtn = cy.get('[data-cy="theme-dark-button"]');
        darkThemeBtn.click();
        cy.get('body').should('have.class', 'dark');
    });

    it('Succesfully switch theme to light', () => {
        cy.login();
        const darkThemeBtn = cy.get('[data-cy="theme-light-button"]');
        darkThemeBtn.click();
        cy.get('body').should('have.class', 'light');
    });
});

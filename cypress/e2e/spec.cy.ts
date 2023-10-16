describe('auth flow', () => {
    it('Succesfully redirect if no logged in', () => {
        cy.visit('/');
        cy.location('pathname').should('eq', '/auth/login');
    });

    it('Succesfully redirect to home at log in', () => {
        cy.visit('/auth/login');
        cy.get('#login-button').click();
        cy.location('pathname').should('eq', '/');
    });

    it('succesfully route to home if user is present in storage', () => {
        window.localStorage.setItem('appSession', '{"user":"some-user-id","token":"abc"}');
        cy.visit('/');
        cy.location('pathname').should('eq', '/');
    });
});

describe('home spec', () => {
    it('Succesfully redirect if no logged in', () => {
        cy.login();
        cy.location('pathname').should('eq', '/');
    });

    it('Succesfully switch theme to dark', () => {
        cy.login();
        const darkThemeBtn = cy.get('#theme-dark-button');
        darkThemeBtn.click();
        cy.get('body').should('have.class', 'dark');
    });

    it('Succesfully switch theme to light', () => {
        cy.login();
        const darkThemeBtn = cy.get('#theme-light-button');
        darkThemeBtn.click();
        cy.get('body').should('have.class', 'light');
    });
});

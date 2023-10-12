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

});


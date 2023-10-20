/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('login', () => {
    cy.visit('/auth/login');
    cy.get('[data-cy="login-button"]').click();
});

Cypress.Commands.add('setAuthSession', () => {
    window.localStorage.setItem('appSession', '{"user":"some-user-id","token":"abc"}');
});

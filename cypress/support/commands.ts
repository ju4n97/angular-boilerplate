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
  window.localStorage.setItem('appSession', '{"user":"some-user-id","token":"abc"}');
  cy.visit('/');
});

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to type a few random words into input elements
       * @param count=3
       * @example cy.get('input').typeRandomWords()
       */
      login(): Chainable<any>
    }
  }
}

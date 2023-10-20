import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:4200',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        experimentalRunAllSpecs: true,
    },
    component: {
        devServer: {
            framework: 'angular',
            bundler: 'webpack',
        },
        specPattern: '**/*.cy.ts',
    },

});

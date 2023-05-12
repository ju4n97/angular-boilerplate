import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
    let service: ThemeService;
    let document: Document;

    beforeEach(() => {
        TestBed.configureTestingModule({ teardown: { destroyAfterEach: false } });
        service = TestBed.inject(ThemeService);
        document = TestBed.inject(DOCUMENT);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should set system theme as current theme', () => {
        service.setTheme('system');
        expect(service.currentTheme).toBe('system');
    });

    it('should set system theme as a document.body class', () => {
        service.setTheme('system');
        const bodyClasses = document.body.classList;
        expect(bodyClasses.contains(service.systemTheme)).toBeTruthy();
    });

    it('should set light theme as current theme', () => {
        service.setTheme('light');
        expect(service.currentTheme).toBe('light');
    });

    it('should set light theme as a document.body class', () => {
        service.setTheme('light');
        const bodyClasses = document.body.classList;
        expect(bodyClasses.contains('light')).toBeTruthy();
    });

    it('should set dark theme as current theme', () => {
        service.setTheme('dark');
        expect(service.currentTheme).toBe('dark');
    });

    it('should set dark theme as a document.body class', () => {
        service.setTheme('dark');
        const bodyClasses = document.body.classList;
        expect(bodyClasses.contains('dark')).toBeTruthy();
    });
});

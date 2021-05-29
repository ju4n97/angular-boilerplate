import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { ThemeList } from './theme.config';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;
  let document: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
    document = TestBed.inject(DOCUMENT);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set system theme on LocalStorage', () => {
    service.setTheme(ThemeList.System);
    expect(service.storedTheme).toBe(ThemeList.System);
  });

  it('should set system theme on document body', () => {
    service.setTheme(ThemeList.System);
    const bodyClasses = document.body.classList;
    expect(bodyClasses.contains(service.systemTheme)).toBeTruthy();
  });

  it('should set light theme on LocalStorage', () => {
    service.setTheme(ThemeList.Light);
    expect(service.storedTheme).toBe(ThemeList.Light);
  });

  it('should set light theme on document body', () => {
    service.setTheme(ThemeList.Light);
    const bodyClasses = document.body.classList;
    expect(bodyClasses.contains(ThemeList.Light)).toBeTruthy();
  });

  it('should set dark theme on LocalStorage', () => {
    service.setTheme(ThemeList.Dark);
    expect(service.storedTheme).toBe(ThemeList.Dark);
  });

  it('should set dark theme on document body', () => {
    service.setTheme(ThemeList.Dark);
    const bodyClasses = document.body.classList;
    expect(bodyClasses.contains(ThemeList.Dark)).toBeTruthy();
  });
});

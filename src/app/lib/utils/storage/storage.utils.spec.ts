import { ThemeList } from '@lib/services/theme';
import { storage } from './storage.utils';

describe('StorageUtils', () => {
  it('should store & retrieve item from local & session storage', () => {
    // LocalStorage
    storage.setItem('App/theme', ThemeList.Dark);
    expect(storage.getItem('App/theme')).toBe(ThemeList.Dark);

    // sessionStorage
    storage.setItem('App/theme', ThemeList.Dark, { api: 'SessionStorage' });
    expect(storage.getItem('App/theme', { api: 'SessionStorage' })).toBe(ThemeList.Dark);
  });

  it('should remove item from local & session storage', () => {
    // LocalStorage
    storage.setItem('App/theme', ThemeList.Dark);
    expect(storage.getItem('App/theme')).toBe(ThemeList.Dark);
    storage.removeItem('App/theme');
    expect(storage.getItem('App/theme')).toBeNull();

    // sessionStorage
    storage.setItem('App/theme', ThemeList.Dark, { api: 'SessionStorage' });
    expect(storage.getItem('App/theme', { api: 'SessionStorage' })).toBe(ThemeList.Dark);
    storage.removeItem('App/theme', { api: 'SessionStorage' });
    expect(storage.getItem('App/theme', { api: 'SessionStorage' })).toBeNull();
  });

  it('should clear all items from local & session storage', () => {
    // LocalStorage
    storage.clear();
    expect(localStorage.length).toBe(0);

    // sessionStorage
    storage.clear({ api: 'SessionStorage' });
    expect(localStorage.length).toBe(0);
  });
});

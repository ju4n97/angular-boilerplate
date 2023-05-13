import { Injectable } from '@angular/core';
import { storage } from '@lib/utils/storage/storage.utils';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    isAuthenticated$ = new BehaviorSubject<boolean>(!!storage.getItem('appSession'));

    get isAuthenticated(): boolean {
        return this.isAuthenticated$.getValue();
    }

    login(): void {
        storage.setItem('appSession', { user: 'some-user-id', token: 'abc' });
        this.isAuthenticated$.next(true);
    }

    logout(): void {
        storage.removeItem('appSession');
        this.isAuthenticated$.next(false);
    }
}

import { Injectable, computed, effect, signal } from '@angular/core';
import { STORAGE } from '@lib/constants';
import { User } from '@lib/interfaces';
import { storage } from '@lib/utils/storage/storage.utils';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    session = signal<{ token: string; user: User } | null>(storage.getItem(STORAGE.session));

    isAuthenticated = computed(() => !!this.session());

    constructor() {
        effect(() => {
            const { token, user } = this.session() || {};

            if (token && user) {
                storage.setItem(STORAGE.session, { token, user });
            } else {
                storage.removeItem(STORAGE.session);
            }
        });
    }

    login(): void {
        this.session.set({
            token: 'abc',
            user: {
                username: 'johnwick2097',
                email: 'johnwick@mail.com',
                role: 'admin',
            },
        });
    }

    logout(): void {
        this.session.set(null);
    }
}

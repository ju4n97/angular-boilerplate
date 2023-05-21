import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { STORAGE } from '@lib/constants';
import { storage } from '@lib/utils';
import { fromEventPattern } from 'rxjs';
import { ThemeFontSize, ThemePrimaryColor, ThemeSchema } from './theme.config';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private readonly _document = inject(DOCUMENT);

    private readonly _mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    private readonly _mediaChanges = toSignal(
        fromEventPattern<MediaQueryListEvent>(
            this._mediaQuery.addListener.bind(this._mediaQuery),
            this._mediaQuery.removeListener.bind(this._mediaQuery),
        ),
    );

    private readonly _systemTheme = computed(() => (this._mediaQuery.matches ? ThemeSchema.Dark : ThemeSchema.Light));

    schema = signal(this._defaultSchema);
    fontSize = signal(this._defaultFontSize);
    primaryColor = signal(this._defaultPrimaryColor);

    get availableSchemas(): ThemeSchema[] {
        return Object.values(ThemeSchema);
    }

    get availableFontSizes(): ThemeFontSize[] {
        return Object.values(ThemeFontSize);
    }

    get availablePrimaryColors(): ThemePrimaryColor[] {
        return Object.values(ThemePrimaryColor);
    }

    private get _defaultSchema(): ThemeSchema {
        return storage.getItem<ThemeSchema>(STORAGE.theme.schema) ?? ThemeSchema.System;
    }

    private get _defaultFontSize(): ThemeFontSize {
        return storage.getItem<ThemeFontSize>(STORAGE.theme.fontSize) ?? ThemeFontSize.Md;
    }

    private get _defaultPrimaryColor(): ThemePrimaryColor {
        return storage.getItem<ThemePrimaryColor>(STORAGE.theme.primaryColor) ?? ThemePrimaryColor.Lime;
    }

    constructor() {
        effect(() => {
            if (this._mediaChanges() && this.schema() === ThemeSchema.System) {
                this.setSchema(ThemeSchema.System);
                storage.setItem(STORAGE.theme.schema, this.schema());
            }

            if (this.schema()) {
                storage.setItem(STORAGE.theme.schema, this.schema());
            }

            if (this.fontSize()) {
                storage.setItem(STORAGE.theme.fontSize, this.fontSize());
            }

            if (this.primaryColor()) {
                storage.setItem(STORAGE.theme.primaryColor, this.primaryColor());
            }
        });
    }

    initialize(): void {
        this.setSchema(this._defaultSchema);
        this.setFontSize(this._defaultFontSize);
        this.setPrimaryColor(this._defaultPrimaryColor);
    }

    reset(): void {
        this.setSchema(ThemeSchema.System);
        this.setFontSize(ThemeFontSize.Md);
        this.setPrimaryColor(ThemePrimaryColor.Lime);
    }

    setSchema(schema: ThemeSchema): void {
        for (const theme of Object.values(ThemeSchema)) {
            this._document.documentElement.classList.remove(theme);
        }

        this.schema.set(schema);

        if (schema === ThemeSchema.System) {
            this._document.documentElement.classList.add(this._systemTheme());
        } else {
            this._document.documentElement.classList.add(schema);
        }
    }

    setFontSize(fontSize: ThemeFontSize): void {
        this.fontSize.set(fontSize);

        this._document.documentElement.setAttribute('data-font-size', fontSize);
    }

    setPrimaryColor(primaryColor: ThemePrimaryColor): void {
        this.primaryColor.set(primaryColor);

        this._document.documentElement.setAttribute('data-primary-color', primaryColor);
    }
}

import { InjectionToken, Provider } from '@angular/core';
import packageJson from '../../../../package.json';

type PackageJson = {
    name: string;
    version: string;
};

export const PACKAGE_JSON = new InjectionToken<PackageJson>('PACKAGE_JSON');

export const providePackageJson = (): Provider => ({
    provide: PACKAGE_JSON,
    useValue: {
        name: packageJson.name,
        version: packageJson.version,
    } as PackageJson,
});

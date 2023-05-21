type StorageOptions = {
    api?: 'LocalStorage' | 'SessionStorage';
};

function getStorageApi(api: StorageOptions['api']): Storage {
    return api === 'SessionStorage' ? sessionStorage : localStorage;
}

function getItem<T>(name: string, options?: StorageOptions): T | null {
    const api = getStorageApi(options?.api || 'LocalStorage');
    const data = api.getItem(name);
    return data ? (JSON.parse(data) as T) : null;
}

function setItem<T>(name: string, data: T, options?: StorageOptions): void {
    if (data === null || data === undefined) {
        return;
    }

    const api = getStorageApi(options?.api || 'LocalStorage');
    api.setItem(name, JSON.stringify(data));
}

function removeItem(name: string, options?: StorageOptions): void {
    const api = getStorageApi(options?.api || 'LocalStorage');
    api.removeItem(name);
}

function clear(options?: StorageOptions): void {
    const api = getStorageApi(options?.api || 'LocalStorage');
    api.clear();
}

export const storage = {
    getItem,
    setItem,
    removeItem,
    clear,
};

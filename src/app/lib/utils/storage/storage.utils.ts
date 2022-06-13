import { StorageObjectData, StorageObjectType } from './storage.types';

type StorageOptions = {
  api?: 'LocalStorage' | 'SessionStorage';
};

function getStorageAPI(api: StorageOptions['api']): Storage {
  return api === 'SessionStorage' ? sessionStorage : localStorage;
}

function getItem<T extends StorageObjectType>(
  item: T,
  options?: StorageOptions,
): StorageObjectData<T>['data'] | null {
  const api = getStorageAPI(options?.api || 'LocalStorage');
  const data = api.getItem(item.toString());
  return data ? JSON.parse(data) : null;
}

function setItem<T extends StorageObjectType>(
  itemName: T,
  data: StorageObjectData<T>['data'],
  options?: StorageOptions,
): void {
  if (data === null || data === undefined) {
    return;
  }

  const api = getStorageAPI(options?.api || 'LocalStorage');
  api.setItem(itemName, JSON.stringify(data));
}

function removeItem<T extends StorageObjectType>(item: T, options?: StorageOptions): void {
  const api = getStorageAPI(options?.api || 'LocalStorage');
  api.removeItem(item);
}

function clear(options?: StorageOptions): void {
  const api = getStorageAPI(options?.api || 'LocalStorage');
  api.clear();
}

export const storage = {
  getItem,
  setItem,
  removeItem,
  clear,
};

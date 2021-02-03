export enum StorageItem {
  Auth = 'auth',
  Theme = 'theme',
}

export const getItem = (itemName: StorageItem): any => {
  return JSON.parse(localStorage.getItem(itemName));
};

export const setItem = (itemName: StorageItem, value: any) => {
  localStorage.setItem(itemName, JSON.stringify(value));
};

export const removeItem = (itemName: StorageItem) => {
  localStorage.removeItem(itemName);
};

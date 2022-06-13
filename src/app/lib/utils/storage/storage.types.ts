import { ThemeList } from '@lib/services/theme';

type StorageObjectMap = {
  'App/session': {
    user: string;
    token: string;
  };
  'App/theme': ThemeList;
};

export type StorageObjectType = 'App/session' | 'App/theme';

export type StorageObjectData<T extends StorageObjectType> = {
  type: T;
  data: StorageObjectMap[T];
};

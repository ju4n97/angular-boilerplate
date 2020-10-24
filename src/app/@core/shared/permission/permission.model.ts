import { PermissionGroup } from '.';

export class Permission {
  id: string;
  name: string;
  path: string;
  icon: string;
  group: PermissionGroup;
  status: PermissionStatus;
  createdAt: Date;
  updatedAt: Date;
}

import { RoleStatus } from '.';
import { Permission } from '../permission';

export class Role {
  id: string;
  name: string;
  status: RoleStatus;
  createdAt: Date;
  updatedAt: Date;
  permissions: Permission[];
}

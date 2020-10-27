import { FileGroup } from '.';

export class File {
  id: string;
  originalName: string;
  mimeType: string;
  destination: string;
  fileName: string;
  path: string;
  size: number;
  group: FileGroup;
  createdAt: Date;
  updatedAt: Date;
}

export interface ModelAdapter<T> {
  adapt(item: any): T;
  encode(item: T): any;
}

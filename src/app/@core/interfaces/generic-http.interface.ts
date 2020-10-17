import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GenericHttp<T> {
  getAll(args?: { httpParams?: HttpParams; extra?: string }): Observable<T[]>;
  getById(id: string): Observable<T>;
  post(viewModel: T, extra?: string): Observable<T>;
  patch(id: string, viewModel: T): Observable<T>;
  put(id: string, viewModel: T): Observable<T>;
  delete(id: string): Observable<T>;
}

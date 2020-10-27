import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdvanceResult } from './advance-result.interface';

export interface GenericHttp<T> {
  getAll(args?: {
    httpParams?: HttpParams;
    extra?: string;
  }): Observable<AdvanceResult<T[]>>;
  getById(id: string): Observable<AdvanceResult<T>>;
  post(viewModel: T, extra?: string): Observable<T>;
  patch(id: string, viewModel: T): Observable<T>;
  put(id: string, viewModel: T): Observable<T>;
  delete(id: string): Observable<T>;
}

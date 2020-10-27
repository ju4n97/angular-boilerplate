import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericHttp } from '../interfaces';
import { AdvanceResult } from '../interfaces/advance-result.interface';

export class GenericHttpService<T> implements GenericHttp<T> {
  protected headers: HttpHeaders;

  constructor(
    protected httpClient: HttpClient,
    @Inject(String) protected baseUrl: string,
    @Inject(String) protected endpoint: string
  ) {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
  }

  getAll(args?: {
    httpParams?: HttpParams;
    extra?: string;
  }): Observable<AdvanceResult<T[]>> {
    const { httpParams, extra } = Object(args);
    const url = `${this.baseUrl}/${this.endpoint}/${extra || ''}`;
    return this.httpClient.get<AdvanceResult<T[]>>(url, { params: httpParams });
  }

  getById(id: string): Observable<AdvanceResult<T>> {
    return this.httpClient.get<AdvanceResult<T>>(
      `${this.baseUrl}/${this.endpoint}/${id}`
    );
  }

  post(viewModel: Partial<T>, extra?: string): Observable<T> {
    return this.httpClient.post<T>(
      `${this.baseUrl}/${this.endpoint}/${extra || ''}`,
      viewModel,
      {
        headers: this.headers,
      }
    );
  }

  patch(id: string, viewModel: Partial<T>): Observable<T> {
    return this.httpClient.patch<T>(
      `${this.baseUrl}/${this.endpoint}/${id}`,
      viewModel,
      {
        headers: this.headers,
      }
    );
  }

  put(id: string, viewModel: Partial<T>): Observable<T> {
    return this.httpClient.put<T>(
      `${this.baseUrl}/${this.endpoint}/${id}`,
      viewModel,
      {
        headers: this.headers,
      }
    );
  }

  delete(id: string): Observable<T> {
    return this.httpClient.delete<T>(`${this.baseUrl}/${this.endpoint}/${id}`);
  }
}

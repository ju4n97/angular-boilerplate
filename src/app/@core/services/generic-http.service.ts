import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GenericHttp } from '../interfaces';

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

  getAll(args?: { httpParams?: HttpParams; extra?: string }): Observable<T[]> {
    const { httpParams, extra } = Object(args);
    const url = `${this.baseUrl}/${this.endpoint}/${extra || ''}`;

    return this.httpClient
      .get<T[]>(url, { params: httpParams })
      .pipe(map((data) => data));
  }

  getById(id: string): Observable<T> {
    return this.httpClient
      .get<T>(`${this.baseUrl}/${this.endpoint}/${id}`)
      .pipe(map((data) => data));
  }

  post(viewModel: T, extra?: string): Observable<T> {
    return this.httpClient
      .post<T>(`${this.baseUrl}/${this.endpoint}/${extra || ''}`, viewModel, {
        headers: this.headers,
      })
      .pipe(map((data) => data));
  }

  patch(id: string, viewModel: T): Observable<T> {
    return this.httpClient
      .patch<T>(`${this.baseUrl}/${this.endpoint}/${id}`, viewModel, {
        headers: this.headers,
      })
      .pipe(map((data) => data));
  }

  put(id: string, viewModel: T): Observable<T> {
    return this.httpClient
      .put<T>(`${this.baseUrl}/${this.endpoint}/${id}`, viewModel, {
        headers: this.headers,
      })
      .pipe(map((data) => data));
  }

  delete(id: string): Observable<T> {
    return this.httpClient
      .delete<T>(`${this.baseUrl}/${this.endpoint}/${id}`)
      .pipe(map((data) => data));
  }
}

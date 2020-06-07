import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GenericHttp, ModelAdapter } from '../interfaces';

export class GenericHttpService<T> implements GenericHttp<T> {
  protected headers: HttpHeaders;

  constructor(
    protected httpClient: HttpClient,
    @Inject(String) protected baseUrl: string,
    @Inject(String) protected endpoint: string,
    @Inject('ModelAdapter') protected modelAdapter: ModelAdapter<T>
  ) {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
  }

  getAll(args?: { httpParams?: HttpParams; extra?: string }): Observable<T[]> {
    const { httpParams, extra } = args;
    const url = `${this.baseUrl}/${this.endpoint}/${extra || ''}`;

    return this.httpClient
      .get<T[]>(url, { params: httpParams })
      .pipe(map((data) => this.convertList(data)));
  }

  getById(id: string): Observable<T> {
    return this.httpClient
      .get<T>(`${this.baseUrl}/${this.endpoint}/${id}`)
      .pipe(map((data) => this.modelAdapter.adapt(data)));
  }

  post(viewModel: T, extra?: string): Observable<T> {
    return this.httpClient
      .post<T>(
        `${this.baseUrl}/${this.endpoint}/${extra || ''}`,
        this.modelAdapter.encode(viewModel),
        { headers: this.headers }
      )
      .pipe(map((data) => this.modelAdapter.adapt(data)));
  }

  patch(id: string, viewModel: T): Observable<T> {
    return this.httpClient
      .patch<T>(
        `${this.baseUrl}/${this.endpoint}/${id}`,
        this.modelAdapter.encode(viewModel),
        { headers: this.headers }
      )
      .pipe(map((data) => this.modelAdapter.adapt(data)));
  }

  put(id: string, viewModel: T): Observable<T> {
    return this.httpClient
      .put<T>(
        `${this.baseUrl}/${this.endpoint}/${id}`,
        this.modelAdapter.encode(viewModel),
        { headers: this.headers }
      )
      .pipe(map((data) => this.modelAdapter.adapt(data)));
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.baseUrl}/${this.endpoint}/${id}`);
  }

  protected convertList(data: any): T[] {
    return data?.map((item) => this.modelAdapter.adapt(item));
  }
}

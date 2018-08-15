import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import { HttpClient } from '@angular/common/http';
import { plainToClass } from 'class-transformer';
import { map } from 'rxjs/internal/operators';
import { Document } from './document';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  private baseParams = { api_key: 123 };

  constructor(private http: HttpClient) { }

  getDocuments(query: string): Observable<Document[] | Document> {
    return this.http.get(this.getUrlFor('documents'), this.getParams({search: query})).pipe(
      map(response => {
        return plainToClass(Document, response);
      }));
  }

  private getUrlFor(path: string): string {
    return 'http://exygy-challenge-backend.herokuapp.com/' + path;
  }

  private getParams(params: Object): Object {
    return { params: Object.assign(this.baseParams, params) };
  }
}

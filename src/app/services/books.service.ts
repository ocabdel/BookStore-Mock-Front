import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IBook } from '../domain/ibook';

@Injectable({
  providedIn: 'root'
})

export class BooksService {



  constructor(private _http: HttpClient) { } // inject httpclient

  public getAllBooks(): Observable<IBook[]> {

    const URL: string = environment.url_base + '/books';

    return this._http.get<IBook[]>(URL);
  }

  public getAllBooksForCategory(idCat: number): Observable<IBook[]> {

    const URL: string = environment.url_base + `/categories/${idCat}/books`;

    return this._http.get<IBook[]>(URL);
  }


}

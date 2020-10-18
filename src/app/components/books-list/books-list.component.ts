import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from 'src/app/domain/ibook';
import { BooksService } from 'src/app/services/books.service';
import { servicesVersion } from 'typescript';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  data : IBook[];

  constructor(private _service: BooksService,
        private _routing : ActivatedRoute) { }

  ngOnInit(): void {
    // Récupérer le id de la Categorie (snapshot)
    //const localId = +this._routing.snapshot.paramMap.get('id');

    this._routing.paramMap.subscribe()
      res => {
              const localId = res.get('id');
              this._service.getAllBooksForCategory(localId).subscribe(
                innerResp => this.data = innerResp
                );
              };

    // Invoquer le REST pour les books de la catégorie
    //  this._service.getAllBooksForCategory(localId).subscribe(
    //    resp => this.data = resp,
    //    err => console.log(`Attention, il y a l'erreur :` + err)
    //  );

    // this._service.getAllBooks().subscribe(
    //   resp => this.data = resp,
    //   err => console.log(`Attention, il eu l'erreru : `+ err)
    // );
  }

}

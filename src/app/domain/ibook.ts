export interface IBook {

  id : number;
  tittle : string;
  authors : string;
  description : string;
  price : number;
  imageURL : string;
  isbn? : string; // Field Optional

}

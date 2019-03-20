import { Injectable } from '@angular/core';
import { Http, Response, RequestMethod, RequestOptions, Headers } from '@angular/http';
@Injectable()
export class CartaoService {

  constructor(private _http: Http) { }
 pegar(){
   return this._http.get('https://angular-owyvq8.stackblitz.io/cartao').pipe();
 }
}
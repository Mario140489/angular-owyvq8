import { Injectable } from '@angular/core';
import { Http, Response, RequestMethod, RequestOptions, Headers } from '@angular/http';
@Injectable()
export class CartaoService {

  constructor(private _http: Http) { }
 pegar(){
   return this._http.get('http://5c929387e7b1a00014078e2a.mockapi.io/api/cartao/get').pipe();
 }
}
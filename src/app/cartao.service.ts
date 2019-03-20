import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
@Injectable()
export class CartaoService {

  constructor(private _http: Http) { }
 pegar(){
   return this._http.get()
 }
}
import { Component, OnInit } from '@angular/core';
import {CartaoService} from 'service/cartao.service';
@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {

  constructor( private service :CartaoService) { }

  ngOnInit() {
  }

}
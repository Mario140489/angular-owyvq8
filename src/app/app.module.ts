import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MatCheckboxModule} from '@angular/material';
import { CartaoService } from './cartao.service';
import { HttpModule} from '@angular/http';
import { CartaoComponent } from './cartao/cartao.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule,MatCheckboxModule,HttpModule],
  declarations: [ AppComponent, HelloComponent, CartaoComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CartaoService]
})
export class AppModule { }

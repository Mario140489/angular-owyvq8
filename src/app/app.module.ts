import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MatCheckboxModule,
MatFormFieldModule,MatInputModule,MatIconModule,
MatCardModule} from '@angular/material';
import { cartaoservice } from './service/cartao.service';
import { HttpModule} from '@angular/http';
import { CurrencyMaskModule } from "ngx-currency-mask";
import {NgxMaskModule} from 'ngx-mask-2'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
@NgModule({
  imports:      [ BrowserModule, FormsModule,MatCheckboxModule,HttpModule,MatCardModule,
  MatFormFieldModule,MatInputModule,MatIconModule,CurrencyMaskModule,BrowserAnimationsModule,
     NgxMaskModule.forRoot()],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [cartaoservice]
})
export class AppModule { }

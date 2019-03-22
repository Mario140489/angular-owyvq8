import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MatCheckboxModule,
MatFormFieldModule,MatInputModule,
MatCardModule} from '@angular/material';
import { cartaoservice } from './service/cartao.service';
import { HttpModule} from '@angular/http';
@NgModule({
  imports:      [ BrowserModule, FormsModule,MatCheckboxModule,HttpModule,MatCardModule,
  MatFormFieldModule,MatInputModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [cartaoservice]
})
export class AppModule { }

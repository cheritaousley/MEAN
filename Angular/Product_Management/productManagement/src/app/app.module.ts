import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AppRoutingModule } from './app-routing.module'; // <--- Routing rules imported

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';

import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductCreationComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // <--- Our routing rules
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

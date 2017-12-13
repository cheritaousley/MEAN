import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';


const routes: Routes = [
    // { path: '', pathMatch: 'full', component: AppComponent },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'products/edit/:id', component: ProductListComponent },
    { path: 'products/new', component: ProductCreationComponent },
    { path: 'gohome', redirectTo: '/home' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
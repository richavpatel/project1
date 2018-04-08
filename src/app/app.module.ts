import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MemberComponent } from './member/member.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule
     RouterModule.forRoot( [
       {
          path: 'Member',
         component: MemberComponent
       }
       ,
       {
        path: 'Product',
        component: ProductComponent
      }
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

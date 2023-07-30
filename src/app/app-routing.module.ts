import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {WhatsappComponent} from "./whatsapp/whatsapp.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {
    path: 'dashboard', component: DashboardComponent , children: [
      {
        path: 'product',
        component: ProductListComponent
      },
      {
        path: 'whatsapp',
        component: WhatsappComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

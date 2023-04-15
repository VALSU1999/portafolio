import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { SearchComponent } from './pages/search/search.component';

//creamos las rutas
const routes: Routes = [
  {path:'home',component: PortafolioComponent},
  {path:'about',component: AboutComponent},
  {path:'item/:id',component: ItemComponent},
  {path:'search/:termino',component: SearchComponent},
  {path:'**',pathMatch: 'full', redirectTo:'home'},
];
//useHash => nos sirve para proteger la ruta cuando no tengamos acceso a un hosting
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

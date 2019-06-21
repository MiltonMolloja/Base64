import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';


const routes: Routes = [
  {path: 'footer', component: FooterComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'punto01', component: ContentComponent},
  {path: '**', component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

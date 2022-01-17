import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {
    path: 'content',
    component: ContentComponent
  },
  {
    path: 'info',
    component: InfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

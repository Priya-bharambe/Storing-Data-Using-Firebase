import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertdataComponent } from './insertdata/insertdata.component';
import { ViewdataComponent } from './viewdata/viewdata.component';

const routes: Routes = [
  {
    path: 'insertdata',
    component: InsertdataComponent
  },
  {
    path: 'viewdata',
    component: ViewdataComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiemComponent } from './mark/diem/diem.component';

const routes: Routes = [
  {path: 'mark/dsdiem', component: DiemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

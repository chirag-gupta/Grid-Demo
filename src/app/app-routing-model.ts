import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';

const appRoutes: Routes = [
  { path: 'grid', component: GridComponent },
  { path: '', redirectTo: 'grid', pathMatch: 'full' },
  { path: '**', redirectTo: 'grid', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

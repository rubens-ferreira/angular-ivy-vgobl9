import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealDetailComponent } from './deal-detail/deal-detail.component';
import { DealListComponent } from './deal-list/deal-list.component';

const routes: Routes = [
  { path: '', component: DealListComponent },
  { path: ':id', component: DealDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DealsRoutingModule {}

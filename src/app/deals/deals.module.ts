import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealDetailComponent } from './deal-detail/deal-detail.component';
import { DealListComponent } from './deal-list/deal-list.component';
import { DealsRoutingModule } from './deals-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, DealsRoutingModule, FormsModule],
  declarations: [DealDetailComponent, DealListComponent],
})
export class DealsModule {}

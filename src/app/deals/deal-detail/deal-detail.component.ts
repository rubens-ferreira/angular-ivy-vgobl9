import { Component, Input, OnInit } from '@angular/core';
import { Deal } from '../models/deal';

@Component({
  selector: 'app-deal-detail',
  templateUrl: './deal-detail.component.html',
  styleUrls: ['./deal-detail.component.css'],
})
export class DealDetailComponent implements OnInit {
  deal: Deal = {
    id: '1',
    dealName: 'deal1',
    purchasePrice: 100,
    address: 'address1',
    NOI: 100,
    capRate: 0.5,
  };

  constructor() {}

  ngOnInit() {}

  onSubmit() {}
}

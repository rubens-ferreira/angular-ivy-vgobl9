import { Component, OnInit } from '@angular/core';
import { Deal } from '../models/deal';

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.css'],
})
export class DealListComponent implements OnInit {
  deals: Deal[] = [
    {
      id: '1',
      dealName: 'deal1',
      purchasePrice: 100,
      address: 'address1',
      NOI: 100,
      capRate: 0.5,
    },
    {
      id: '2',
      dealName: 'deal2',
      purchasePrice: 100,
      address: 'address2',
      NOI: 100,
      capRate: 0.5,
    },
  ];

  constructor() {}

  ngOnInit() {}
}

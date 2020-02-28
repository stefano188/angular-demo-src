import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'stock-status',
  templateUrl: './stock-status.component.html',
  styleUrls: ['./stock-status.component.css']
})
export class StockStatusComponent implements OnChanges {

  @Input('stock') stock: number;
  @Input('productId') productId;
  @Output('stockValueChange') stockValueChange = new EventEmitter();

  updateStockValue: number;
  color: string;

  ngOnChanges() {
    this.color = this.stock > 10 ? 'green' : 'red';
  }

  stockValueChanged() {
    this.stockValueChange.emit({
      id: this.productId,
      updatestockvalue: this.updateStockValue
    })
    this.updateStockValue = null;
  }
}

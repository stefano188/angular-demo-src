import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  products = [];

  ngOnInit() {
    this.products = this.getProducts();
  }

  getProducts() {
    return [
        { 'id': '1', 'title': 'Screw Driver', 'price': 400, 'stock': 11 },
        { 'id': '2', 'title': 'Nut Volt', 'price': 200, 'stock': 5 },
        { 'id': '3', 'title': 'Resistor', 'price': 78, 'stock': 45 },
        { 'id': '4', 'title': 'Tractor', 'price': 20000, 'stock': 1 },
        { 'id': '5', 'title': 'Roller', 'price': 62, 'stock': 15 },
    ];
  }

  changeStockValue(p: {id, updatestockvalue}) {
    let prod = this.products.find(product => product.id === p.id);
    console.log('product to update', prod);
    prod.stock = prod.stock + p.updatestockvalue;
    console.log('product.stock', prod.stock);
  }
}

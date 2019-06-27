import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
	carrito = {
		tienda: "Licorera San Pablo",
		ubicacion: "Heredia, San Francisco",
		tiend_id: "12fa256",
		productos: [
		    {
		      id: 1,
		      nombre: "Cacique 1L",
		      precio: 2500,
		      cantidad: 2
		    },
		    {
		      id: 2,
		      nombre: "Coca Cola 3L",
		      precio: 1900,
		      cantidad: 1
		    },
		    {
		      id: 3,
		      nombre: "Mani Sal.",
		      precio: 700,
		      cantidad: 2
		    },
		    {
		      id: 4,
		      nombre: "Quesitos 500mg",
		      precio: 900,
		      cantidad: 3
		    }
		]
	};

	calcTotal(){
		let total:number = this.carrito.productos
		.map((actual) => actual.precio * actual.cantidad)
		.reduce((sum, current) => sum + current);
		return total
	}

	sumProd(id){
		
		let despues = this.carrito.productos.map(function(item){
			if(item.id == id)
				item.cantidad++

			return item;
		})
		this.carrito.productos =  despues;
	}


	quitarProd(id){
		
		let despues = this.carrito.productos.map(function(item){
			if(item.id == id && item.cantidad > 0)
				item.cantidad--

			return item;
		})
		this.carrito.productos =  despues;
	}

  	constructor() { }

  	ngOnInit() {
  	}

}

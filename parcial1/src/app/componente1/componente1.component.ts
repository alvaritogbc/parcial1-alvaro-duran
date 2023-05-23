import { Component } from '@angular/core';

interface Producto {
  nombre: string;
  precio: number;
  descuento: string;
}

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {
  productos: Producto[] = [
    { nombre: 'Laptop', precio: 1000, descuento: '-20%' },
    { nombre: 'Monitor', precio: 500, descuento: '-10%' },
    { nombre: 'Teclado', precio: 50, descuento: '-5%' },
    { nombre: 'Mouse', precio: 20, descuento: '0%' }
  ];

  filtro: string = '';

  filtrarProductos() {
    const filtroLowerCase = this.filtro.toLowerCase();
    this.productos = this.productos.filter(producto =>
      producto.descuento.toLowerCase().includes(filtroLowerCase)
    );
  }

  refrescarProductos() {
    // Aquí puedes realizar cualquier lógica necesaria para refrescar los productos
    // Por ejemplo, puedes llamar a una API o restablecer los productos a su estado original
    this.productos = [
      { nombre: 'Laptop', precio: 1000, descuento: '-20%' },
      { nombre: 'Monitor', precio: 500, descuento: '-10%' },
      { nombre: 'Teclado', precio: 50, descuento: '-5%' },
      { nombre: 'Mouse', precio: 20, descuento: '0%' }
    ];

    this.filtro = ''; // Restablecer el valor del filtro a una cadena vacía
  }
}
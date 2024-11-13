import { Component } from '@angular/core';


declare var bootstrap: any;

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent {
  productos: any[] = [];
  filtro: string = ''; // Almacena el texto de búsqueda
  productosFiltrados: any[] = []; // Inicialmente muestra todos los productos
  modoEdicion: boolean = false;
  productoSeleccionado: any = {};
  categorias: any[] = [];
  marcas: any[] = [];


     // Método para filtrar productos
     filtrarProductos() {
      const filtroNormalizado = this.filtro.trim().toLowerCase();
      this.productosFiltrados = filtroNormalizado
        ? this.productos.filter((producto) =>
            producto.nombre.toLowerCase().includes(filtroNormalizado)
          )
        : this.productos;

    }

    agregarProducto(): void {
      this.modoEdicion = false;
      const modalElement = document.getElementById('productoModal');
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      } else {
        console.error('Modal element not found');
      }
    }
/*   resetFormulario(): void {
    this.productoSeleccionado = {
      nombre: '',
      descripcion: '',
      codigo: '',
      categoria: '',
      marca: '',
      unidad: '',
      precio: null,
      url: '',
      unidad_medida: ''
    };
    this.imagenSeleccionada = null;
    this.fichaTecnicaSeleccionada = null;
    this.imagenPrevisualizada = null;

    // Limpiar la imagen y la ficha técnica
    this.croppedImageFile = null;
    this.fichaTecnicaSeleccionada = null;
    this.croppedImage = '';
    this.modoEdicion = false;

  }

  // Método para calcular el número total de páginas
  actualizarTotalPages(): void {
    this.totalPages = Math.ceil(this.productosFiltrados.length / this.pageSize);
  } */
}

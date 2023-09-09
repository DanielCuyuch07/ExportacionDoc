import { Component } from '@angular/core';
declare var bootstrap: any; // Declarar Bootstrap para que Angular lo reconozca

@Component({
  selector: 'app-ex-sub-menu',
  templateUrl: './ex-sub-menu.component.html',
  styleUrls: ['./ex-sub-menu.component.css']
})
export class EXSubMenuComponent {

  ngOnInit(): void {
    // Mostrar el offcanvas automáticamente cuando se carga el componente
    const offcanvasElement = document.getElementById('offcanvasExample');
    const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
    offcanvas.show();
  }
}

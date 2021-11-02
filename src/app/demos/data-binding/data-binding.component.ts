import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {
  public contadorClique: number = 2;
  public urlImage: string = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'
  public nome: string = '';
  adicionarClique() {
    this.contadorClique ++;
  }
  zerarContador()
  {
    this.contadorClique =0;
  }
  perdaDeFoco(event: any)
  {
    this.nome =event.target.value;
  }
}

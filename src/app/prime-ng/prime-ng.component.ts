import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime-ng',
  templateUrl: './prime-ng.component.html',
  styleUrls: ['./prime-ng.component.scss'],
})
export class PrimeNGComponent {
  text!: string;
  public textinner!: string;

  public generate() {
    this.textinner = this.text;
    console.log(this.textinner);
  }
}

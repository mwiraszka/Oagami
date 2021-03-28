import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  template: `
    <div fxLayout="column" fxLayoutAlign="center center">
      <span class="mat-display-1">Welcome to Oagami!</span>
      <button mat-raised-button color="accent" routerLink="/manager">
        Login as Manager
      </button>
    </div>
  `,
  styles: [
    `
      div[fxLayout] {
        margin-top: 12px;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// Esto es una interfaz 
export enum TitleColor{
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-blue-500'
}

@Component({
  selector: 'lib-apx-side-menu',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: `./apx-side-menu.html`,
  styles: ``,
})
export class ApxSideMenu {
  isAuthenticated = input(false);

  titleColor = input<TitleColor>(TitleColor.purple)

  onSignOut = output();
  onSignIn = output();
}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageSelector } from '../../components/language-selector/language-selector';

import { TranslatePipe, TranslateDirective } from '@ngx-translate/core'

@Component({
  selector: 'app-products',
  imports: [RouterLink, LanguageSelector,TranslatePipe, TranslateDirective],
  templateUrl: './products.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './products.css',
})
export class Products {
  firstName="Usuario"
}

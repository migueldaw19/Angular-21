import { Component, signal, ChangeDetectionStrategy, inject } from '@angular/core';
import { LanguageService } from '../../service/language.service';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './language-selector.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './language-selector.css',
})
export class LanguageSelector {
  languageService = inject(LanguageService);

  currentLang = this.languageService.currentLang;
  languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ]);

  changeLanguage(event:Event){
    const target = event.target as HTMLSelectElement;

    const lang = target.value;

    this.languageService.changeLang(lang);
  }
}

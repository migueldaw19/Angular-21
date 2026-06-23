import { Component, ChangeDetectionStrategy, Optional, Inject, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageSelector } from '../../components/language-selector/language-selector';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { LanguageService, SERVER_LANG_TOKEN } from '../../service/language.service';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Component({
  selector: 'app-basic-plan',
  imports: [RouterLink, LanguageSelector,TranslatePipe, TranslateDirective],
  templateUrl: './basic-plan.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './basic-plan.css',
})
export class BasicPlan {

   
}

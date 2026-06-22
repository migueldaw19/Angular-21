import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    // Con el setTitle podemos modificar el nombre de la página

    this.title.setTitle('Contact Page');

    // Con updateTag podemos actualizar los meta en función del nombre y contenido

    this.meta.updateTag({
      name: 'description',
      content: 'Este es mi Contact Page',
    });
    this.meta.updateTag({ name: 'og:title', content: 'Contact Page' });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Hola,Mundo,Fernando,Herrera,Curso,Angular,PRO',
    });
  }
}

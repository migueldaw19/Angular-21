import { Routes } from '@angular/router';

export const routes: Routes = [


    // De esta manera no hace falta añadir modulos
    {
        path:'about',
        loadComponent: () => import('./pages/about-page/about-page').then(m => m.AboutPage),
    },
    {
        path:'pricing',
        loadComponent: () => import('./pages/pricing-page/pricing-page').then(m => m.PricingPage),
    },
    {
        path:'contact',
        loadComponent: () => import('./pages/contact/contact').then(m => m.Contact),
    },
    //IMPORTANTE 
    // Si esta activado SSR o SSG y hay una ruta dinamica Angular debe saber que valor debe de poner
    // Para ello hay que acudir a app.routes.server
    // Dato: Esto ocurre en las ultimas versiones de Angular
    {
        path: 'pokemons/page/:page',
        loadComponent: () => import('./pages/pokemons-page/pokemons-page').then(m=>m.PokemonsPage),
    },
    {
        path: 'pokemon/:id',
        loadComponent: ()=>import ('./pages/pokemon-page/pokemon-page').then(m=>m.PokemonPage)
    },
    {
        path:'**',
        redirectTo: 'about'
    }

];

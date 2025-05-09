import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full' //Redirecciona a la ruta home cuando no hay ninguna ruta especificada
    },
    {
        //Siempre debemos immportar el componente que deseamos visualizar
        //path corresponde a la ruta predeterminada y el component es el que se va a renderizar
        path: 'home', component: HomeComponent
    },
    {

        path: 'about', component: AboutComponent
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: ':postId', component: BlogPostComponent
    }
    
];
    
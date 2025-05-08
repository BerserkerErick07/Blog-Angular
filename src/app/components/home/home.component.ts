import { Component, OnInit } from '@angular/core';
import { PostPreviewComponent } from "./components/post-preview/post-preview.component";
import { HeaderService, HeaderData } from '../../services/header.service';
import { Post } from '../../types/post.type';
import { PostPreview } from '../../types/post-preview.type';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import path from 'path';
import { forkJoin } from 'rxjs';
import matter from 'gray-matter-browser';

type HomeData = {
  posts: Array<string>;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostPreviewComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  private iuData : HeaderData = {
    title :'¡Bienvenido!',
    subtitle: 'Bienvenidos a mi blog, en este encontrarás algunso datos sobre mi y mi experiencia en el camino de Developer.',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/base-pbc.firebasestorage.app/o/como-e-trabalhar-com-programacao.png?alt=media&token=891e480c-f73d-44fd-911f-4f5b21fee215'
  }


  posts: Array<PostPreview> = []

  constructor( private headerService: HeaderService, private http: HttpClient) {
    // This is the constructor for the HomeComponent class.
    // It is currently empty, but you can add any initialization logic here if needed.  

  }

  ngOnInit(){
    const pathHomeData = 'assets/home/home-data.json';
    this.headerService.uiData.set(this.iuData);

    this.http.get<HomeData>(pathHomeData).subscribe({
      next: data => {
        const requests = data.posts.map(slug => 
          this.http.get(
            `assets/posts/${slug}/post.md`, {responseType: 'text'}
          ))
        forkJoin(requests).subscribe({
          next: allPostDetails =>{
            this.posts  = allPostDetails.map(markdownFile =>{
              const {
                title = '', 
                subtitle = '', 
                slug = '', 
                thumbnail = '', 
                author = '', 
                publicationDate = ''
              } = matter(markdownFile).data;
              return{
                title, 
                subtitle, 
                slug, 
                thumbnail, 
                author, 
                publicationDate
              }
            })
          },
          error: error => console.error(error)
      })
      },
      error: error => console.error(error)
    })


  }
}

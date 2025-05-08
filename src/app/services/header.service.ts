import { Injectable, signal } from '@angular/core';
import { Post } from '../types/post.type';


// This service is used to manage the header data of the application.
// It uses Angular's signal feature to create a reactive data structure that can be used to update the UI when the data changes.
// The HeaderData type is a subset of the Post type, containing only the title, subtitle, and thumbnail properties.
// The uiData signal is initialized with an object containing empty strings for the title, subtitle, and thumbnail properties.
// This allows the UI to be updated with the correct data when it is available.
export type HeaderData = Pick<Post, 'title' | 'thumbnail' | 'subtitle'>;

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  // The uiData signal is used to store the header data for the application.
  // It is initialized with an object containing empty strings for the title, subtitle, and thumbnail properties.
  uiData = signal<HeaderData>({title: '',subtitle: '', thumbnail: ''});
}

import { Component, Input } from '@angular/core';
import { PostPreview } from '../../../../types/post-preview.type';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-preview',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './post-preview.component.html',
  styleUrl: './post-preview.component.scss'
})
export class PostPreviewComponent {
  @Input() post: PostPreview = {
    title: '',
    subtitle: '',
    slug: '',
    author: '',
    publicationDate: ''
  }
}

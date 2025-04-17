import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.css']
})
export class SkeletonLoaderComponent {
  @Input() type: 'text' | 'avatar' | 'rect' | 'circle' = 'text';
  @Input() width: string = '100%';
  @Input() height: string = '20px';
}

import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GifListComponent } from "src/app/gifs/components/gif-list/gif-list.component";
import { GifService } from './../../../services/gifs.service';
import { Gif } from 'src/app/gifs/interfaces/gif.interface';

@Component({
  selector: 'app-search.component',
  imports: [GifListComponent],
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchPageComponent {

  gifService = inject(GifService);
  gifs = signal<Gif[]>([]);
  onSearch( query: string ) {
   //console.log({ query });
    this.gifService.searchGifs( query ).subscribe( resp => {
      this.gifs.set(resp);
    });

 }

}

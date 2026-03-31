import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GifListComponent } from "src/app/gifs/components/gif-list/gif-list.component";
import { GifService } from './../../../services/gifs.service';

@Component({
  selector: 'app-search.component',
  imports: [GifListComponent],
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchPageComponent {

  gifService = inject(GifService);
 onSearch( query: string ) {
   //console.log({ query });
    this.gifService.searchGifs( query );

 }

}

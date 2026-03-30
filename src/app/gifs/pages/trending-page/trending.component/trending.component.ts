import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifListComponent } from "../../../components/gif-list/gif-list.component";
import { GifListItemComponent } from "../../../components/gif-list/gif-list-item/gif-list-item.component";
@Component({
  standalone: true,
  selector: 'app-trending.component',
  imports: [GifListComponent],
  templateUrl: './trending.component.html',

})
export default class TrendingPageComponent { }

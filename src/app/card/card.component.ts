import { Component } from '@angular/core';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-cards',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardsComponent {
collections = data
}

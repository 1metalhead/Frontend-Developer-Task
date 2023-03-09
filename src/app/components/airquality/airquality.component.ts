import { Component } from '@angular/core';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-airquality',
  templateUrl: './airquality.component.html',
  styleUrls: ['./airquality.component.scss']
})
export class AirqualityComponent {
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

}

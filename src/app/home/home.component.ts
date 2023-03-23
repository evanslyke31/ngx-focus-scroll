import { Component } from '@angular/core';
import { FocusScrollService } from 'src/lib/public-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private focusScroll: FocusScrollService) {}
  
  trigger() {
    this.focusScroll.flush();
  }

}

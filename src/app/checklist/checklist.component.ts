import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ChecklistComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

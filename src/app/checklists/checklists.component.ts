import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-checklists',
  templateUrl: './checklists.component.html',
  styleUrls: ['./checklists.component.scss'],
  standalone: true,
    imports: [IonicModule]
})
export class ChecklistsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

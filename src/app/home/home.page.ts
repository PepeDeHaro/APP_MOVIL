import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UsersComponent } from '../components/users/users.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, UsersComponent, RouterLink],
})
export class HomePage {
  constructor() {}
}

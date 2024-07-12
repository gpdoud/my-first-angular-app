import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Greg';
  favoriteTech = 'C#';
  favColor = "grey";
  names = [ 'LC', 'Emily', 'Karol', 'Angelica', 'Cheryl' ];

  changeData(): void  {
    this.title = "Gregory";
    this.favoriteTech = "Angular";
    this.favColor = "Green";
    this.names.push('Denise');
  }
}

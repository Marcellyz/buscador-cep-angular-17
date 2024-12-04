import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FormComponent } from "../../components/form/form.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

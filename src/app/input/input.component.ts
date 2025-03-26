import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  constructor(private router: Router) {}

  onSubmit(): void {
    this.router.navigate(['output']);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-demo.html',
  styleUrl: './reactive-demo.css'
})
export class ReactiveDemoComponent {
  title = 'Reactive Form Demo';
  loginForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    // Initialize form with validation rules
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
      // Extra tasks fields
      gender: ['', Validators.required],
      status: ['', Validators.required],
      comments: ['']
    });
  }

  // Helper to check if a field is invalid and touched
  isInvalid(controlName: string): boolean {
    const control = this.loginForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.submitted = true;
      console.log('Reactive Form Submitted:', this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}

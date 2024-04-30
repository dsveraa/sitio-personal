import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import SubmitJSON from 'submitjson';
import { ReactiveFormsModule } from '@angular/forms';

const sj = new SubmitJSON({ apiKey: 'sjk_998028c6729f4a15957a61ceaf50f067', endpoint: 'xQxkIIMYo' })

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  contactForm: FormGroup
  successMessage: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    })
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      await sj.submit(this.contactForm.value)
    this.contactForm.reset();
    this.showSuccessMessage();
    }
  }

  showSuccessMessage() {
    this.successMessage = true;
    setTimeout(() => {
      this.successMessage = false;
    }, 3000);
  }
}

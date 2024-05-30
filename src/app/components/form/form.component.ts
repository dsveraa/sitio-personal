import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import SubmitJSON from 'submitjson';
import { ReactiveFormsModule } from '@angular/forms';
// import { environment } from '../../../environments/environment';

const sj = new SubmitJSON({ apiKey: SJ_API_KEY, endpoint: SJ_ENDPOINT })

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

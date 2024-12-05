import { NgIf } from '@angular/common';
import { ViaCepServiceService } from './../../service/via-cep-service.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss', './form.componet.responsive.scss'],
})
export class FormComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  cepInvalido:boolean = false;


  constructor(
    private fb: FormBuilder,
    private ViaCepService: ViaCepServiceService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.fb.group({
      cep: ['', Validators.minLength(8)],
      logradouro: [{ value: '', disabled: true }],
      bairro: [{ value: '', disabled: true }],
      cidade: [{ value: '', disabled: true }],
      estado: [{ value: '', disabled: true }],
    });
  }

  buscarCep() {
    const cep = this.form.get('cep')?.value;
    if (cep?.length == 8) {
      this.ViaCepService.getEnderecoByCep(cep).subscribe({
        next: (res) => {
          this.form.patchValue({
            logradouro: res.logradouro,
            bairro: res.bairro,
            cidade: res.localidade,
            estado: res.uf,
          });
          this.cepInvalido = false;
        },
        error: () => {
          this.cepInvalido = true;
        }
      });
    }else {
      this.cepInvalido = true;
    }
  }
}

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
  showAlert: boolean = false;

  constructor(
    private fb: FormBuilder,
    private ViaCepService: ViaCepServiceService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.observePreenchimentoCep();
    this.buscarCep();
  }

  initializeForm() {
    this.form = this.fb.group({
      cep: ['', Validators.required],
      logradouro: [{ value: '', disabled: true }],
      bairro: [{ value: '', disabled: true }],
      cidade: [{ value: '', disabled: true }],
      estado: [{ value: '', disabled: true }],
    });
  }

  observePreenchimentoCep() {
    this.form.get('cep')?.valueChanges.subscribe((value) => {
      if (value?.length === 8) {
        this.buscarCep();
      }
    });
  }

  buscarCep() {
    const cep = this.form.get('cep')?.value;
    if (!cep || cep.length !== 8) {
      this.showAlert = true;
      return;
    }

    this.ViaCepService.getEnderecoByCep(cep).subscribe({
      next: (res) => {
        this.form.patchValue({
          logradouro: res.logradouro,
          bairro: res.bairro,
          cidade: res.localidade,
          estado: res.uf,
        });

        this.showAlert = false;
      },
      error: () => {
        console.error('Não foi possível verificar o CEP.');
      },
    });
  }

  closeAlert() {
    this.showAlert = false;
  }
}

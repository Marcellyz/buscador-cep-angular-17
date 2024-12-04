import { ViaCepServiceService } from './../../service/via-cep-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent  implements OnInit{


  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private ViaCepService: ViaCepServiceService){}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(){
    this.form = this.fb.group({
      cep:['', Validators.required],
      logradouro:[''],
      bairro:[''],
      cidade:[''],
      estado:[''],
    })
  }

  observePreenchimentoCep(){
    this.form.get('cep')?.valueChanges.subscribe(value => {
      if(value?.length == 8){
          this.buscarCep();
      }
    })
  }

  buscarCep(){
    const cep = this.form.get('cep')?.value;
    this.ViaCepService.getEnderecoByCep(cep).subscribe(
    {
      next: (res)=> {
        this.form.patchValue({
          logradouro: res.logradouro,
          bairro: res.bairro,
          cidade: res.localidade,
          estado: res.uf
        })
      },
      error:()=> {
          console.log("Não foi possivel verificar o CEP");

      }
    })
  }
}

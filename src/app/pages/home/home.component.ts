import { Component, OnInit, HostListener } from "@angular/core";
import { MessageService } from "../../services/message.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import Swal from "sweetalert2";

interface lenguajes {
  nombre: string;
  porcent: number;
}

interface lenguajes1 {
  nombre: string;
  porcent: number;
}
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: [
    "./home.component.css",
    "../../../../node_modules/bootstrap/dist/css/bootstrap.css",
  ],
})
export class HomeComponent implements OnInit {
  emailPattern: any = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  ips: string;
  createFormGroup() {
    this.getIP();
    return new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(this.emailPattern),
      ]),
      nombre: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      mensaje: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  contactForm: FormGroup;
  constructor(private Mservice: MessageService) {
    this.contactForm = this.createFormGroup();
  }
  ngOnInit() {
    this.getIP();
    this.ips;
  }
  ipAddress: string;
  onResetForm() {
    this.contactForm.reset();
  }

  getIP() {
    this.Mservice.getIPAddress().subscribe((res: any) => {
      this.ips = this.ipAddress = res.ip;
    });
  }

  onSaveForm() {
    if (this.contactForm.valid) {
      this.Mservice.guardarMensaje(this.contactForm.value);
      this.onResetForm();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Tu mensaje se ha enviado, Muchas gracias",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error al enviar el Mensaje",
        showConfirmButton: false,
        timer: 2000,
      });
      this.onResetForm();
    }
  }
  listadoLenguajes: Array<lenguajes> = [
    { nombre: "Html", porcent: 100 },
    { nombre: "Css", porcent: 100 },
    { nombre: "JavaScript", porcent: 40 },
  ];

  listadoLenguajes1: Array<lenguajes1> = [
    { nombre: "Java", porcent: 70 },
    { nombre: "Sql", porcent: 80 },
    { nombre: "Angular", porcent: 30 },
  ];
}

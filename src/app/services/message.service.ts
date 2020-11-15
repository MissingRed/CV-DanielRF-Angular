import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { MensajeI } from "../models/mensaje.interface";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  private contactCollection: AngularFirestoreCollection<MensajeI>;
  constructor(private afs: AngularFirestore, private http: HttpClient) {
    this.contactCollection = afs.collection<MensajeI>("contacts");
  }

  guardarMensaje(newContact: MensajeI): void {
    this.contactCollection.add(newContact);
  }

  public getIPAddress() {
    return this.http.get("http://api.ipify.org/?format=json");
  }
}

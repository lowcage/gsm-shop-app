import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Purchase} from "../models/Purchase";
import {ɵElement, ɵValue} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  collectionName = 'Purchases'

  constructor(private afs: AngularFirestore) { }

  create(purchase: { date?: ɵValue<ɵElement<Purchase["date"], null>>; amount?: ɵValue<ɵElement<Purchase["amount"], null>>; id?: ɵValue<ɵElement<Purchase["id"], null>>; username?: ɵValue<ɵElement<Purchase["username"], null>>; phone_id?: ɵValue<ɵElement<Purchase["phone_id"], null>> }) {
    purchase.id = this.afs.createId()
    return this.afs.collection<Purchase>(this.collectionName).doc(purchase.id).set(<Purchase>purchase);
  }

  getAll() {
    return this.afs.collection<Purchase>(this.collectionName).valueChanges();
  }

  update(purchase: Purchase) {
    if (purchase.id !== null) {
      return this.afs.collection<Purchase>(this.collectionName).doc(purchase.id).set(<Purchase>purchase);
    } else {
      return;
    }
  }

  delete(id : string) {
    return this.afs.collection<Purchase>(this.collectionName).doc(id).delete();
  }
}

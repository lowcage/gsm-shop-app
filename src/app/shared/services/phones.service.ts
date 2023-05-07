import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Phone} from "../models/Phone";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class PhonesService {

  collectionName = 'Phones';

  constructor(private http: HttpClient, private afs: AngularFirestore, private storage: AngularFireStorage) { }

  loadImageMeta(metaUrl: string): Observable<Array<Phone>> {
    //return this.http.get(environment.hostUrl + '/assets/' + metaUrl) as Observable<Array<Phone>>;
    return this.afs.collection<Phone>(this.collectionName).valueChanges();
  }

  loadImage(imageUrl: string) {
    //return this.http.get(environment.hostUrl + '/assets/' + imageUrl, {responseType: 'blob'});
    return this.storage.ref(imageUrl).getDownloadURL();
  }
}

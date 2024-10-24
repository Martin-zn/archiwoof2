import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Pet{
  id?:string;
  nombre:string;
  anoNacimiento:number;
  imageUrl:string;
  descripcion:string
  ownerEmail: string; 
}

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  private collectionName="pets";
  constructor(private firestore:AngularFirestore, private afAuth: AngularFireAuth) { }

  async addPet(pet:Pet): Promise<void>{
    const id = this.firestore.createId();
    const user = await this.afAuth.currentUser;

    if (user && user.email) {
      pet.ownerEmail = user.email; // Asignar el uid del dueño a la mascota
      return this.firestore.collection(this.collectionName).doc(id).set({ ...pet, id });
    } else {
      throw new Error('Usuario no autenticado');
    }
  }

  getPet():Observable<Pet[]>{
    return this.firestore.collection<Pet>(this.collectionName).valueChanges();
  }


  // getPetsByOwner(): Observable<Pet[]> {
  //   return this.afAuth.authState.pipe(
  //     switchMap(user => {
  //       if (user && user.email) {
  //         // Filtrar las mascotas que pertenecen al usuario actual (ownerEmail)
  //         return this.firestore.collection<Pet>(this.collectionName, ref => 
  //           ref.where('ownerEmail', '==', user.email)
  //         ).valueChanges();
  //       } else {
  //         return of([]); // Si no está autenticado, devolver un array vacío
  //       }
  //     })
  //   );
  // }
}

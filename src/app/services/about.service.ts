import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private http = inject(HttpClient);

  nombre = signal<string>('');
  edad = signal<number>(0);

  fetchUserData() {
    const url = 'https://firestore.googleapis.com/v1/projects/base-pbc/databases/(default)/documents/MyInformation/nWkqLFbwYhgTFLam61Lk';
    this.http.get<any>(url).subscribe(response => {
      const fields = response.fields;
      this.nombre.set(fields.nombre.stringValue + ' ' + fields.apellido.stringValue);
      this.edad.set(+fields.edad.integerValue);
    });
  }
}

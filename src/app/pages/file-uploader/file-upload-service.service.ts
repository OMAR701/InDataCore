import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  uploadFile(file: File): Observable<number> {
    return of(100).pipe(delay(2000)); 
  }
}

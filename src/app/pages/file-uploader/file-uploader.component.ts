import { Component } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import { FileUploadService } from './file-upload-service.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent {
  progress: number = 0;
  uploading: boolean = false;

  constructor(private fileUploadService: FileUploadService) {}

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.uploadFile(file);
    }
  }

  private uploadFile(file: File): void {
    this.uploading = true;

    this.fileUploadService.uploadFile(file).subscribe(
      (event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round((100 * event.loaded) / event.total);
        } else if (event.type === HttpEventType.Response) {
          console.log('File uploaded:', event.body);
          this.uploading = false;
        }
      },
      (error) => {
        console.error('File upload error:', error);
        this.uploading = false;
      },
      () => {
        this.uploading = false;
      }
    );
  }
}

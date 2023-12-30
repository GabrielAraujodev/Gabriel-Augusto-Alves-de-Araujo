import { Component, Input } from '@angular/core';
import { DownloadService } from '../services/download.service';  // Certifique-se de que o caminho está correto

@Component({
  selector: 'app-download-button',
  templateUrl: `./download-button.component.html`,
  styleUrl: `./download-button.component.css`,
})
export class DownloadButtonComponent {
  @Input() fileUrl: string = '';
  @Input() fileName: string = '';

  constructor(private downloadService: DownloadService) {}

  download(): void {
    if (this.fileUrl && this.fileName) {
      this.downloadService.downloadFile(this.fileUrl, this.fileName);
    } else {
      console.error('As propriedades fileUrl e fileName são obrigatórias para iniciar o download.');
    }
  }
}

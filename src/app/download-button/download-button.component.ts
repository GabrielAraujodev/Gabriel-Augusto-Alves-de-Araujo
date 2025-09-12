import { Component, Input } from '@angular/core';
import { DownloadService } from '../services/download.service';  // Certifique-se de que o caminho está correto

@Component({
  selector: 'app-download-button',
  templateUrl: `./download-button.component.html`,
})
export class DownloadButtonComponent {
  @Input() fileUrl: string = '';
  @Input() fileName: string = '';

  constructor(private downloadService: DownloadService) {}

/*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Faz o download de um arquivo a partir de uma URL e do nome do arquivo.
   * Caso as propriedades fileUrl e fileName não estejam preenchidas, lan a um erro.
/*******  2e154189-40cc-4590-9229-04f802ce5211  *******/
  download(): void {
    if (this.fileUrl && this.fileName) {
      this.downloadService.downloadFile(this.fileUrl, this.fileName);
    } else {
      console.error('As propriedades fileUrl e fileName são obrigatórias para iniciar o download.');
    }
  }
}

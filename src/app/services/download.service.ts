import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  downloadFile(fileUrl: string, fileName: string): void {
    // Cria um elemento de link temporário
    const link = document.createElement('a');

    // Configura o URL do link
    link.href = fileUrl;


    link.download = fileName;


    document.body.appendChild(link);


    link.click();

  
    document.body.removeChild(link);
  }
}

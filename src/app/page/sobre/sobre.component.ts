import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']  // Corrigi o nome da propriedade para 'styleUrls'
})
export class SobreComponent implements OnInit {

  constructor() { }

  ngOnInit() { }


  image = './assets/github.jpg';
  image1 = './assets/gmail.jpg';
  image2 = './assets/linkedin.jpg';
  corriculo = './assets/Currículo.pdf';
  code = './assets/code.jpg'
}

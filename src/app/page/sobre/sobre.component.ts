import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
Html5: any;



  constructor() { }

  ngOnInit() { }


  image = './assets/github.jpg';
  image1 = './assets/gmail.jpg';
  image2 = './assets/linkedin.jpg';
  corriculo = './assets/Currículo.pdf';
  code = './assets/code.jpg';
  java ='./assets/Java.jpg';
  angular = './assets/AngularJS.jpg';
  cloud = './assets/Cloud.jpg';
  ionic ='./assets/Ionic.jpg';
  javascript = './assets/JavaScript.jpg';
  sql =   './assets/SQL.jpg';
  saas = './assets/Sass.jpg';
  html = './assets/Html5.jpg';
  fire = './assets/Firebase.jpg';


}

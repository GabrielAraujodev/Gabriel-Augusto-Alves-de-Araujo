import { Component } from '@angular/core';

interface Project {
  title: string;
  technologies: string[];
  description: string;
  link: string;
}

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrl: './projeto.component.css'
})
export class ProjetoComponent {
  projects: Project[] = [
    {
      title: 'Code Tech',
      technologies: ['CSS', 'HTML', 'JAVASCRIPT'],
      description: 'Desenvolvi a Landing Page "Code Tech", um espaço virtual onde a magia da programação ganha vida. Utilizando as poderosas linguagens de programação como JavaScript, HTML e CSS, criamos uma experiência envolvente para apresentar serviços de programação de forma única.',
      link: 'https://codetech-beta.vercel.app/'
    },
    {
      title: 'God of War Ragnarok',
      technologies: ['SCSS', 'HTML', 'JAVASCRIPT'],
      description: 'Adentre o mundo épico de God of War Ragnarok através do site promocional que desenvolvi. Utilizando a sofisticada linguagem SCSS, esculpi uma experiência visualmente deslumbrante. Este projeto combina a arte da programação com a magia do jogo, proporcionando aos visitantes uma imersão única.',
      link: 'https://god-of-war-ragnarok-drab.vercel.app/'
    },
    {
      title: 'Agencia bancaria',
      technologies: ['JAVA'],
      description: 'Criei uma experiência simulada agência bancária com um aplicativo de console Java. Este projeto é mais do que ; é uma jornada interativa onde a programação se transforma em uma simulação realista de uma agência bancária, proporcionando uma experiência única de aprendizado e interação.Criei uma experiência simulada de agência bancária com um aplicativo de console Java. Este projeto é mais do que código; é uma jornada interativa onde a programação se transforma em uma simulação realista de uma agência bancária, proporcionando uma experiência única de aprendizado e interação.',
      link: 'https://github.com/GabrielAraujodev/Agencia-bancaria.java'
    },
    {
      title: 'Controle financeiro',
      technologies: ['JAVASCRIPT', 'HTML', 'CSS'],
      description: 'Apresento o aplicativo de Controle Financeiro, uma ferramenta poderosa para dominar suas finanças pessoais. Desenvolvido com as habilidades mágicas de JavaScript, HTML e CSS, este aplicativo não é apenas sobre números, mas sobre empowerment financeiro. Transforme a gestão financeira em uma experiência intuitiva e eficaz.',
      link: 'https://gabrielaraujodev.github.io/controle-financeiro/'
    }
  ];
}
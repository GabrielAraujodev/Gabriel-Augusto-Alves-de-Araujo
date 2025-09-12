import { Component } from '@angular/core';

interface Project {
  title: string;
  technologies: string[];
  description: string;
  link: string;
  imageUrl: string;
  githubLink?: string; // Link opcional para o GitHub
}

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrl: './projeto.component.css'
})
export class ProjetoComponent {
  projects: Project[] = [
    {
      title: 'Easy Plani',
      technologies: ['TypeScript', 'CSS', 'Python', 'Angular'],
      description: 'Easy Plani é uma ferramenta online de planejamento que permite aos usuários organizar paradas de viagem, escolher locais a visitar e montar roteiros de forma prática e intuitiva.',
      link: 'https://essyplani.vercel.app/planner',
      imageUrl: 'assets/projects/easy-plani.png'
    },
    {
      title: 'Bem-Estar Digital',
      technologies: ['React', 'Typescript', 'TailwindCSS'],
      description: 'Uma landing page voltada para promover saúde mental e equilíbrio emocional por meio da prática de mindfulness, meditação guiada e hábitos saudáveis no ambiente digital, ajudando usuários a reduzirem o estresse e aumentarem o foco.',
      link: 'https://bem-estar-digital.vercel.app/',
      imageUrl: 'assets/projects/bem-estar-digital.png',
      githubLink: 'https://github.com/GabrielAraujodev/Bem-Estar-Digital'
    },
    {
      title: 'Analise seguro',
      technologies: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
      description: 'Um dashboard interativo desenvolvido com Streamlit para análise visual de dados de vendas de seguros. O projeto visa facilitar a tomada de decisão ao transformar dados brutos em insights claros e visuais.',
      link: 'https://finzi9jqzkt3pl2m8se2w7.streamlit.app/',
      imageUrl: 'assets/projects/analise-seguro.svg',
      githubLink: 'https://github.com/GabrielAraujodev/Analise_seguro'
    },
    {
      title: 'Code Tech',
      technologies: ['CSS', 'HTML', 'JAVASCRIPT'],
      description: 'Desenvolvi a Landing Page "Code Tech", um espaço virtual onde a magia da programação ganha vida. Utilizando as poderosas linguagens de programação como JavaScript, HTML e CSS, criamos uma experiência envolvente para apresentar serviços de programação de forma única.',
      link: 'https://codetech-beta.vercel.app/',
      imageUrl: 'assets/projects/codetech.png'
    },
    {
      title: 'God of War Ragnarok',
      technologies: ['SCSS', 'HTML', 'JAVASCRIPT'],
      description: 'Adentre o mundo épico de God of War Ragnarok através do site promocional que desenvolvi. Utilizando a sofisticada linguagem SCSS, esculpi uma experiência visualmente deslumbrante. Este projeto combina a arte da programação com a magia do jogo, proporcionando aos visitantes uma imersão única.',
      link: 'https://god-of-war-ragnarok-drab.vercel.app/',
      imageUrl: 'assets/projects/god-of-war.png'
    },
    {
      title: 'Agencia bancaria',
      technologies: ['JAVA'],
      description: 'Criei uma experiência simulada agência bancária com um aplicativo de console Java. Este projeto é mais do que ; é uma jornada interativa onde a programação se transforma em uma simulação realista de uma agência bancária, proporcionando uma experiência única de aprendizado e interação.Criei uma experiência simulada de agência bancária com um aplicativo de console Java. Este projeto é mais do que código; é uma jornada interativa onde a programação se transforma em uma simulação realista de uma agência bancária, proporcionando uma experiência única de aprendizado e interação.',
      link: 'https://github.com/GabrielAraujodev/Agencia-bancaria.java',
      imageUrl: 'assets/projects/agencia-bancaria.png'
    },
    {
      title: 'Controle financeiro',
      technologies: ['JAVASCRIPT', 'HTML', 'CSS'],
      description: 'Apresento o aplicativo de Controle Financeiro, uma ferramenta poderosa para dominar suas finanças pessoais. Desenvolvido com as habilidades mágicas de JavaScript, HTML e CSS, este aplicativo não é apenas sobre números, mas sobre empowerment financeiro. Transforme a gestão financeira em uma experiência intuitiva e eficaz.',
      link: 'https://gabrielaraujodev.github.io/controle-financeiro/',
      imageUrl: 'assets/projects/controle-financeiro.png'
    }
  ];
}
import { Component, AfterViewInit, Inject, PLATFORM_ID, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

interface Project {
  title: string;
  technologies: string[];
  description: string;
  link: string;
  imageUrl: string;
  githubLink?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef
  ) {}

  projects: Project[] = [
    {
      title: 'PlanEdu',
      technologies: ['React', 'TypeScript', 'TailwindCSS', 'PostgreSQL'],
      description: 'Plataforma online de planejamento educacional que auxilia professores e estudantes na organização de aulas, tarefas e conteúdos de forma eficiente. Com interface intuitiva, permite criar cronogramas e acompanhar o progresso pedagógico.',
      link: 'https://classe-plano-central.vercel.app/',
      imageUrl: 'assets/projects/planedu.png',
      githubLink: 'https://github.com/GabrielAraujodev/PlanEdu'
    },
    {
      title: 'Easy Plani',
      technologies: ['TypeScript', 'CSS', 'Python', 'Angular'],
      description: 'Ferramenta online de planejamento de itinerários que permite aos usuários organizar paradas de viagem, selecionar pontos turísticos e montar roteiros detalhados de maneira prática.',
      link: 'https://essyplani.vercel.app/planner',
      imageUrl: 'assets/projects/easy-plani.png'
    },
    {
      title: 'Bem-Estar Digital',
      technologies: ['React', 'TypeScript', 'TailwindCSS'],
      description: 'Landing page focada na promoção de saúde mental e equilíbrio no ambiente digital por meio de mindfulness, meditação guiada e hábitos saudáveis, otimizando foco e bem-estar.',
      link: 'https://bem-estar-digital.vercel.app/',
      imageUrl: 'assets/projects/bem-estar-digital.png',
      githubLink: 'https://github.com/GabrielAraujodev/Bem-Estar-Digital'
    },
    {
      title: 'Análise de Seguros',
      technologies: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
      description: 'Dashboard analítico e interativo desenvolvido em Python para exploração visual de dados de vendas de seguros, transformando dados brutos em métricas e insights estratégicos para suporte à tomada de decisão.',
      link: 'https://finzi9jqzkt3pl2m8se2w7.streamlit.app/',
      imageUrl: 'assets/projects/analise-seguro.jpeg',
      githubLink: 'https://github.com/GabrielAraujodev/Analise_seguro'
    },
    {
      title: 'Code Tech',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      description: 'Landing page institucional moderna para apresentação de serviços de desenvolvimento de software, com design responsivo, animações sutis e foco na conversão de novos clientes.',
      link: 'https://codetech-beta.vercel.app/',
      imageUrl: 'assets/projects/codetech.png',
      githubLink: 'https://github.com/GabrielAraujodev/Code-Tech'
    },
    {
      title: 'God of War Ragnarök',
      technologies: ['SCSS', 'HTML5', 'JavaScript'],
      description: 'Site promocional temático inspirado no universo de God of War Ragnarök, combinando design visual imersivo, estilização avançada com SCSS e responsividade completa.',
      link: 'https://god-of-war-ragnarok-drab.vercel.app/',
      imageUrl: 'assets/projects/god-of-war.png',
      githubLink: 'https://github.com/GabrielAraujodev/God-of-War-Ragnarok'
    },
    {
      title: 'Agência Bancária',
      technologies: ['Java', 'OOP', 'Data Structures'],
      description: 'Simulação interativa de operações bancárias desenvolvida em Java (aplicativo de console). Implementa criação de contas, saques, depósitos, transferências e extratos, aplicando rigorosos conceitos de Orientação a Objetos.',
      link: 'https://github.com/GabrielAraujodev/Agencia-bancaria.java',
      imageUrl: 'assets/projects/agencia-bancaria.png',
      githubLink: 'https://github.com/GabrielAraujodev/Agencia-bancaria.java'
    },
    {
      title: 'Controle Financeiro',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      description: 'Aplicação web para controle e organização das finanças pessoais. Permite cadastrar entradas e saídas, cálculo de saldo em tempo real e visualização organizada do fluxo de caixa diário.',
      link: 'https://gabrielaraujodev.github.io/controle-financeiro/',
      imageUrl: 'assets/projects/controle-financeiro.png',
      githubLink: 'https://github.com/GabrielAraujodev/controle-financeiro'
    }
  ];

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const root = this.el.nativeElement;

      gsap.from(root.querySelector('.title h1'), {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out'
      });

      gsap.from(root.querySelectorAll('.example-card'), {
        y: 35,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power2.out',
        delay: 0.15
      });

      gsap.from(root.querySelector('.btn'), {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        delay: 0.6
      });
    }
  }
}

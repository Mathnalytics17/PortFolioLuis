import { Component, signal, computed, effect } from '@angular/core';
import { ProjectsInterface } from '../../interfaces/projects-interface';

@Component({
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {

  projects = signal<ProjectsInterface[]>([
    {
      id: 1,
      category: 'Desarrollo Web',
      title: 'Sitio Web Portafolio',
      description: 'Sitio web profesional para presentar la experiencia, habilidades y proyectos de Luis Molina.',
      description_long: 'Plataforma web moderna y responsiva diseñada para destacar la experiencia profesional, habilidades técnicas y proyectos desarrollados. Incluye animaciones, secciones dinámicas y una estructura preparada para escalar e integrar un CMS en el futuro.',
      img: './portfolio1.png',
      route: '/projects/portfolio-website',
      created_at: '2023-01-15',
      cliente: 'Proyecto personal',
      duracion: '2 semanas',
      equipo: 'Desarrollador único',
      objetivo: 'Crear una presencia digital profesional y centralizar la presentación de proyectos.',
      tecnologias: ['Angular', 'Tailwind CSS', 'TypeScript'],
      resultado: 'Más de 500 visitas y generación de contactos profesionales.'
    },
    {
      id: 2,
      category: 'Desarrollo Web',
      title: 'Smart Evolution',
      description: 'Plataforma web para la administración del negocio de factoring de Smart Evolution.',
      description_long: 'Sistema corporativo desarrollado para Smart Evolution con módulos de gestión de clientes, administración de servicios y panel interno optimizado para la operación del negocio. Incluye mejoras de rendimiento y arquitectura escalable.',
      img: './smartevolution.png',
      route: '/projects/smart-evolution',
      created_at: '2024-10-01',
      cliente: 'Smart Evolution S.A.',
      duracion: '2024 - Actualidad',
      equipo: 'Desarrollador Full Stack y líder de proyecto',
      objetivo: 'Brindar soporte continuo, optimizar procesos y desarrollar nuevas funcionalidades estratégicas.',
      tecnologias: ['Next.js', 'Django', 'Material UI', 'MySQL', 'AWS', 'Docker'],
      resultado: 'Mejora significativa en el rendimiento y desarrollo de herramientas clave para la operación.'
    },
    {
      id: 3,
      category: 'Desarrollo Web',
      title: 'Fundación Aladinas App',
      description: 'Aplicación web para la trazabilidad y gestión de donaciones.',
      description_long: 'Plataforma diseñada para automatizar la recepción de donaciones, registrar voluntarios y gestionar actividades internas de la fundación. Permite llevar control detallado y optimizar los procesos administrativos.',
      img: './aladinasfundacion.png',
      route: '/projects/aladinas-fundacion-app',
      created_at: '2025-05-20',
      cliente: 'Fundación Aladinas',
      duracion: '2 meses',
      equipo: '1 desarrollador + 1 coordinador de proyectos',
      objetivo: 'Digitalizar y optimizar los procesos administrativos de la fundación.',
      tecnologias: ['Next.js', 'Django', 'Material UI', 'Docker', 'Nginx', 'VPS', 'Hostinger'],
      resultado: 'Automatización de procesos y reducción del 60% en tiempos operativos.'
    },
    {
      id: 4,
      category: 'Desarrollo Web',
      title: 'AlpeSeguros',
      description: 'Sistema integral de administración para la gestión operativa de AlpeSeguros.',
      description_long: 'Sistema completo con módulos para la gestión de pólizas, clientes, pagos y reportes avanzados. Centraliza la información operativa y reduce errores manuales.',
      img: './alpeseguros.png',
      route: '/projects/alpe-seguros',
      created_at: '2024-11-11',
      cliente: 'AlpeSeguros',
      duracion: '2 meses',
      equipo: 'Desarrollador Full Stack',
      objetivo: 'Optimizar y centralizar la gestión administrativa de la aseguradora.',
      tecnologias: ['PHP', 'MySQL', 'Plesk', 'HTML', 'CSS', 'Buenas prácticas de desarrollo'],
      resultado: 'Reducción del 45% en errores manuales y aumento significativo en eficiencia administrativa.'
    },
    {
      id: 5,
      category: 'Desarrollo Web',
      title: 'Global Oil',
      description: 'Plataforma web para la gestión y trazabilidad de muestras de aceite.',
      description_long: 'Sistema diseñado para administrar la entrada y salida de muestras de aceite, generar reportes, registrar información técnica y permitir a los clientes realizar seguimiento completo del proceso de análisis. Mejora la transparencia, seguridad y eficiencia operativa.',
      img: './globaloil.png',
      route: '/projects/global-oil',
      created_at: '2023-09-30',
      cliente: 'Global Oil International',
      duracion: 'En desarrollo',
      equipo: 'Desarrollador Full Stack',
      objetivo: 'Optimizar el trabajo de laboratorio y ofrecer información clara y centralizada a los clientes.',
      tecnologias: ['Next.js', 'Django', 'Docker', 'Nginx', 'Tailwind CSS', 'VPS', 'PostgreSQL'],
      resultado: 'Mayor visibilidad en la industria energética y generación de nuevos leads.'
    },
    {
      id: 6,
      category: 'Desarrollo Web',
      title: 'GoAISO',
      description: 'Plataforma SaaS de análisis de posicionamiento en inteligencia artificial (AISO).',
      description_long: 'Aplicación web que analiza cómo los modelos de inteligencia artificial recomiendan productos y marcas dentro de una categoría específica. Permite generar estudios personalizados, visualizar rankings, medir cuota de presencia, identificar modelos destacados y exportar informes estratégicos. Incluye panel administrativo para gestión de leads.',
      img: './Logo-goaiso.webp',
      route: '/projects/goaiso',
      created_at: '2026-02-01',
      cliente: 'GoAISO',
      duracion: '1 mes',
      equipo: 'Desarrollador Full Stack',
      objetivo: 'Analizar y mejorar el posicionamiento de marcas y productos en motores de recomendación basados en IA.',
      tecnologias: ['Next.js', 'Django', 'Docker', 'Tailwind CSS', 'PostgreSQL', 'VPS'],
      resultado: 'Desarrollo exitoso del MVP presentado a inversionistas.'
    },
    {
      id: 7,
      category: 'Ciencia de Datos',
      title: 'Modelo XGBoost para Predicción de Mantenimiento - ISA Intercolombia',
      description: 'Modelo predictivo para anticipar necesidades de mantenimiento en infraestructura crítica.',
      description_long: 'Desarrollo de un modelo de machine learning basado en XGBoost utilizando datos históricos, sensores y registros de fallos. El sistema permite anticipar posibles fallas y optimizar la toma de decisiones en mantenimiento. Articulo Mundo electrico sobre el proyecto https://www.mundoelectrico.com/images/pasaPag/ME153_O2NRDhg.pdf',
      img: './isaintercolombia.png',
      route: '/projects/xgboost-model-isa-intercolombia',
      created_at: '2025-06-22',
      cliente: 'ISA Intercolombia',
      duracion: '3 meses',
      equipo: 'Científico de datos + Ingeniero de datos',
      objetivo: 'Predecir fallos en infraestructura crítica para mejorar la eficiencia operativa.',
      tecnologias: ['Python', 'XGBoost', 'Pandas', 'Scikit-learn'],
      resultado: 'Mejora en el diagnóstico del estado de los CTS mediante análisis predictivo.'
    },
    {
      id: 8,
      category: 'Web Scraping',
      title: 'Extracción de Datos SofaScore',
      description: 'Herramienta automatizada para extracción de datos deportivos.',
      description_long: 'Script avanzado para la extracción automatizada de resultados, estadísticas y métricas deportivas en tiempo real desde SofaScore. Permite construir bases de datos para análisis y modelado deportivo.',
      img: './sofascore.png',
      route: '/projects/sofascore-data-extraction',
      created_at: '2024-03-18',
      cliente: 'Proyecto personal',
      duracion: '1 semana',
      equipo: 'Desarrollador único',
      objetivo: 'Recolectar grandes volúmenes de datos para análisis estadístico deportivo.',
      tecnologias: ['Python', 'BeautifulSoup', 'Selenium'],
      resultado: 'Base de datos automatizada con más de 50.000 registros deportivos.'
    }
  ]);

  // =========================
  // ✅ FILTROS (estado)
  // =========================
  searchTerm = signal<string>('');
  dateFrom = signal<string>(''); // YYYY-MM-DD
  dateTo = signal<string>('');   // YYYY-MM-DD
  selectedCategories = signal<Set<string>>(new Set()); // Nombres de categoría

  // =========================
  // ✅ Helpers
  // =========================
  private parseDate(dateStr: string): number {
    const t = Date.parse(dateStr);
    return Number.isNaN(t) ? 0 : t;
  }

  // Categorías base (para pintar checks)
  uniqueCategories = computed(() => {
    const set = new Set<string>();
    this.projects().forEach(p => set.add(p.category));
    return Array.from(set).sort();
  });

  // Proyectos filtrados
  filteredProjects = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    const from = this.dateFrom() ? this.parseDate(this.dateFrom()) : null;
    const to = this.dateTo() ? this.parseDate(this.dateTo()) : null;
    const selected = this.selectedCategories();

    return this.projects().filter(p => {
      const matchName =
        !term ||
        p.title.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term);

      const created = this.parseDate(p.created_at);
      const matchFrom = from === null || created >= from;
      const matchTo = to === null || created <= to;

      const matchCategory =
        selected.size === 0 || selected.has(p.category);

      return matchName && matchFrom && matchTo && matchCategory;
    });
  });

  // Agrupar filtrados por categoría
  filteredProjectsByCategory = computed(() => {
    const grouped = new Map<string, ProjectsInterface[]>();
    this.filteredProjects().forEach(project => {
      if (!grouped.has(project.category)) grouped.set(project.category, []);
      grouped.get(project.category)!.push(project);
    });
    return grouped;
  });

  // Categorías con resultados (para render del listado)
  filteredCategories = computed(() => {
    return Array.from(this.filteredProjectsByCategory().keys()).sort();
  });

  // =========================
  // ✅ Acciones del filtro
  // =========================
  setSearchTerm(value: string) {
    this.searchTerm.set(value);
  }

  setDateFrom(value: string) {
    this.dateFrom.set(value);
  }

  setDateTo(value: string) {
    this.dateTo.set(value);
  }

  toggleCategory(categoryName: string, checked: boolean) {
    const next = new Set(this.selectedCategories());
    if (checked) next.add(categoryName);
    else next.delete(categoryName);
    this.selectedCategories.set(next);
  }

  clearFilters() {
    this.searchTerm.set('');
    this.dateFrom.set('');
    this.dateTo.set('');
    this.selectedCategories.set(new Set());
  }

  // =========================
  // ✅ MODAL
  // =========================
  selectedProject = signal<ProjectsInterface | null>(null);


  private previousBodyOverflow: string | null = null;

constructor() {
  effect(() => {
    const isOpen = this.selectedProject() !== null;

    if (isOpen) {
      // Guardar estado previo
      if (this.previousBodyOverflow === null) {
        this.previousBodyOverflow = document.body.style.overflow || '';
      }
      // Bloquear scroll fondo
      document.body.style.overflow = 'hidden';
    } else {
      // Restaurar scroll fondo
      if (this.previousBodyOverflow !== null) {
        document.body.style.overflow = this.previousBodyOverflow;
        this.previousBodyOverflow = null;
      } else {
        document.body.style.overflow = '';
      }
    }
  });
}
  openModal(project: ProjectsInterface) {
    this.selectedProject.set(project);
  }

  closeModal() {
    this.selectedProject.set(null);
  }
}
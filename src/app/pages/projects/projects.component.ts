import {Component, signal, computed} from '@angular/core'
import { ProjectsInterface } from '../../interfaces/projects-interface'


@Component({

    templateUrl:'./projects.component.html'
    
})
export class ProjectsComponent{

    projects = signal<ProjectsInterface[]>([
        {
            id:1,
            category:'Web Development',
            title:'Portfolio Website',
            description:'A personal portfolio website to showcase my projects and skills.',
            img:'./portfolio1.png',
            route:'/projects/portfolio-website',
            created_at:'2023-01-15'
        },
        { id:2,
            category:'Web Development',
            title:'Smart Evolution',
            description:'Support website for Smart Evolution company.',
            img:'./smartevolution.png',
            route:'/projects/smart-evolution',
            created_at:'2024-08-01'
        },
        { id:3,
            category:'Web Development',
            title:'Aladinas Fundacion App',
            description:'A web application for managing donations and volunteers for Aladinas Fundacion.',
            img:'./aladinasfundacion.png',
            route:'/projects/aladinas-fundacion-app',
            created_at:'2025-05-20'
        },
        { id:4,
            category:'Web Development',
            title:'AlpeSeguros',
            description:'A comprehensive insurance management system for AlpeSeguros company.',
            img:'./alpeseguros.png',
            route:'/projects/alpe-seguros',
            created_at:'2024-11-11'
        },
        { id:5,
            category:'Web Development',
            title:'Global Oil',
            description:'A corporate website for Global Oil to showcase their services and projects.',
            img:'./globaloil.png',
            route:'/projects/global-oil',
            created_at:'2023-09-30'
        },
        { id:6,
            category:'Data Science',
            title:'Xgboost Model for Maintenance Prediction ISA Intercolombia',
            description:'Developed an Xgboost model to predict maintenance needs for ISA Intercolombia, improving operational efficiency.',
            img:'./isaintercolombia.png',
            route:'/projects/xgboost-model-isa-intercolombia',
            created_at:'2025-06-22'
        },
        { id:7,
            category:'Web Scrapping',
            title:'SofaScore Data Extraction',
            description:'Created a web scraping tool to extract sports data from SofaScore for analysis and reporting.',
            img:'./sofascore.png',
            route:'/projects/sofascore-data-extraction',
            created_at:'2024-03-18'
        }
    ])
// En tu componente TypeScript
getUniqueCategories() {
    const uniqueCategories = new Map();
    
    this.projects().forEach(project => {
        if (!uniqueCategories.has(project.category)) {
            uniqueCategories.set(project.category, {
                id: project.id,
                category: project.category
            });
        }
    });
    
    return Array.from(uniqueCategories.values());
}
 // ✅ NUEVO: Agrupar proyectos por categoría
    projectsByCategory = computed(() => {
        const grouped = new Map<string, ProjectsInterface[]>();
        
        this.projects().forEach(project => {
            if (!grouped.has(project.category)) {
                grouped.set(project.category, []);
            }
            console.log(grouped)
            grouped.get(project.category)!.push(project);
        });
        
        return grouped;
    });

}
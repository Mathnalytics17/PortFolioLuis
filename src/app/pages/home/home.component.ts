import {Component,signal} from '@angular/core'




interface ToolList{
    id: number;
    nombre:string;
    img:string;
}


@Component({

    templateUrl:'./home.component.html',
    imports: []
    
})
export class HomeComponent{



dev_frameworks_list = signal<ToolList[]>([
  { id: 1, nombre: 'Django', img: './Django_logo.svg.png' },
  { id: 2, nombre: 'Spring', img: './Spring_Boot.svg.png' },
  { id: 3, nombre: 'PHP', img: './PHP-logo.svg' },
  { id: 4, nombre: 'NodeJS', img: './images.png' },
  { id: 5, nombre: 'NextJS', img: './next-js-logo-png_seeklogo-394608.png' },
  { id: 6, nombre: 'Angular', img: './angular-logo-png_seeklogo-331629.png' },
  { id: 7, nombre: 'React', img: './React.svg.png' }
]);


tools_list = signal<ToolList[]>([
  { id: 1, nombre: 'Nginx', img: './nginx.png' },
  { id: 2, nombre: 'Gunicorn', img: './gunicorn-logo-png-transparent.png' },
  { id: 3, nombre: 'Docker', img: './docker_mark-logo_brandlogos.net_yetav.png' },
  { id: 4, nombre: 'Uvicorn', img: './uvicorn.png' },
  { id: 5, nombre: 'Redis', img: './550460.png' },
  { id: 6, nombre: 'Celery', img: './Celery_logo.png' }
]);


data_science_list = signal<ToolList[]>([
  { id: 1, nombre: 'Streamlit', img: './streamlit-logo-png_seeklogo-441815.png' },
  { id: 2, nombre: 'PyTorch', img: './pytorch-logo.png' },
  { id: 3, nombre: 'Python', img: './Python-logo-notext.svg.png' },
  { id: 4, nombre: 'TensorFlow', img: './Tensorflow_logo.svg.png' },
  { id: 5, nombre: 'R', img: './R_logo.svg.png' },
  { id: 6, nombre: 'Scikit-learn', img: './Scikit_learn_logo_small.svg.png' }
]);



}
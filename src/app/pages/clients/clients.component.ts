import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './clients.component.html',
  standalone: true,
  imports: []
})
export class ClientsComponent {

  clients = signal([
    {
      id: 1,
      name: 'Alpe Seguros',
      contact: 'Alpe Seguros',
      img: './alpeseguroslogo.png',
      description: 'Alpe Seguros confió en el desarrollo de un sistema digital avanzado para gestionar pólizas, clientes y reportes.',
      testimonial:
        '“El trabajo realizado superó nuestras expectativas. La automatización y el diseño intuitivo mejoraron enormemente nuestra operación.”'
    },
    {
      id: 2,
      name: 'Harto de las Redes',
      contact: 'Andrea Ruiz',
      img: './hartodelasredeslogo.png',
      description: 'Consultoría y soporte tecnológico para optimizar la presencia digital y el flujo de comunicación interna.',
      testimonial:
        '“Excelente atención y resultados. Logramos mayor cohesión digital en tiempo récord.”'
    },
    {
      id: 3,
      name: 'Smart Evolution',
      contact: 'Roderich Alayón Mileno',
      img: './smartevolutionlogo.png',
      description: 'Desarrollo y mantenimiento de su plataforma digital de servicios empresariales y optimización interna.',
      testimonial:
        '“Profesionalismo absoluto. Nuestro sitio ahora refleja la calidad de nuestra empresa.”'
    }
  ]);

}

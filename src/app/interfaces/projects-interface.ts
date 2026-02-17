export interface ProjectsInterface {
  id: number;
  category: string;
  title: string;
  description: string;
  description_long?: string;
  img: string;
  route: string;
  created_at: string;

  cliente?: string;
  duracion?: string;
  equipo?: string;
  objetivo?: string;
  tecnologias?: string[];
  resultado?: string;
}

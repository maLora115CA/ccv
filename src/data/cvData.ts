export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Skills {
  mobile: string[];
  backend: string[];
  frontend: string[];
  database: string[];
  tools: string[];
}

export interface CvData {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: Skills;
}

const cvData: CvData = {
  name: "Aaron Cortes Aguilar",
  role: "Ingeniería en Sistemas Computacionales",
  location: "Morelia, Michoacán, México",
  email: "acortescb.03@gmail.com",
  phone: "+52 443 449 7454",
  linkedin: "linkedin.com/in/aaron-cortes-aguilar-958261185",
  education: [
    {
      institution: "Instituto Tecnológico de Morelia",
      degree: "Ingeniería en Sistemas Computacionales",
      period: "2022 - Presente",
      details:
        "Bases de Datos, Programación Web, Desarrollo Móvil, Redes, SO, Desarrollo de software.",
    },
    {
      institution: "CBTA No. 7",
      degree: "Técnico en Ofimática",
      period: "2018 - 2021",
      details: "Formación técnica en sistemas y ofimática.",
    },
  ],
  experience: [
    {
      company: "Sprouty - Maceta inteligente",
      role: "Desarrollador Full-Stack",
      period: "Sept 2025 - Actual",
      description: [
        "App móvil en Flutter/Dart con sensores IoT (ESP32).",
        "API REST con Django y PostgreSQL.",
        "Visualización de datos ambientales en tiempo real.",
        "Metodología Scrum y Git.",
      ],
    },
    {
      company: "Pony Music - Reproductor Web",
      role: "Desarrollador Web",
      period: "Ene 2025 - Jun 2025",
      description: [
        "Reproductor inspirado en Spotify (HTML, CSS, JS).",
        "Manejo de archivos y usuarios con Django.",
        "Interfaz interactiva y responsiva.",
      ],
    },
    {
      company: "Equipo de Desarrollo Académico",
      role: "Scrum Master",
      period: "Sept 2025 - Actual",
      description: [
        "Liderazgo de sprints y ceremonias ágiles.",
        "Uso de Jira para organización técnica.",
        "Coordinación de entregas de software.",
      ],
    },
  ],
  skills: {
    mobile: ["Flutter", "Dart"],
    backend: ["Python", "Django", "Java", "PHP"],
    frontend: ["React", "JavaScript", "Tailwind CSS"],
    database: ["PostgreSQL", "MariaDB", "MongoDB", "SQL"],
    tools: ["Git/GitHub", "Jira", "Linux", "Packet Tracer"],
  },
};

export default cvData;
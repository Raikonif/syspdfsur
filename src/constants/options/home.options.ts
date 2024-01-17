const homeOptions = {
  menuOptions: [
    {
      id: 1,
      title: "Pacientes",
      icon: "fas fa-ClientBlogs",
      link: "/patients",
    },
    {
      id: 2,
      title: "Reportes Diagnóstico",
      icon: "fas fa-user-injured",
      link: "/diagnoses",
    },
    {
      id: 3,
      title: "Historial de Diagnosticos",
      icon: "fas fa-history",
      link: "/patients_history",
    },
    {
      id: 4,
      title: "Configuración",
      icon: "fas fa-cog",
      link: "/settings",
    },
  ],
  blogOptions: [
    {
      id: 1,
      title: "Articles",
      icon: "fas fa-blog",
      link: "/articles",
    },
    {
      id: 2,
      title: "Blog",
      icon: "fas fa-tags",
      link: "/blog",
    },
    {
      id: 3,
      title: "About",
      icon: "fas fa-user",
      link: "/about",
    },
  ],
};

export default homeOptions;

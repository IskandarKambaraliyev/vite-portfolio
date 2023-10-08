import content from "./content";

const ru = {
  comporuts: {},
  container: {
    navbar: {
      navLinks: [
        {
          text: "Главная",
          link: content.container.navbar.navLinks.home,
        },
        {
          text: "резюме",
          link: content.container.navbar.navLinks.cv,
        },
        {
          text: "контакт",
          link: content.container.navbar.navLinks.contact,
        },
      ],
      projectsLink: {
        text: "проекты",
        linkText: "все проекты",
        link: content.container.navbar.navLinks.projects,
      },
    },
    footer: {
      footerLinks: [
        {
          text: "Главная",
          link: content.container.footer.footerLinks.home,
        },
        {
          text: "резюме",
          link: content.container.footer.footerLinks.cv,
        },
        {
          text: "контакт",
          link: content.container.footer.footerLinks.contact,
        },
        {
          text: "проекты",
          link: content.container.footer.footerLinks.projects,
        },
      ],
    },
  },
  pages: {
    home: {
      banner: {
        title: "Привет",
        mainTitle: "Искандар Камбаралиев",
        text: "летний будущий Менеджер Проектов",
        btn: {
          link: "/cv",
          text: "Мое Резюме",
        },
      },
    },
  },
};

export default ru;

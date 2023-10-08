import content from "./content";

const uz = {
  components: {},
  container: {
    navbar: {
      navLinks: [
        {
          text: "Bosh sahifa",
          link: content.container.navbar.navLinks.home,
        },
        {
          text: "Rezyume",
          link: content.container.navbar.navLinks.cv,
        },
        {
          text: "Kontakt",
          link: content.container.navbar.navLinks.contact,
        },
      ],
      projectsLink: {
        text: "Proyektlar",
        linkText: "Barcha proyektlar",
        link: content.container.navbar.navLinks.projects,
      },
    },
    footer: {
      footerLinks: [
        {
          text: "Bosh sahifa",
          link: content.container.footer.footerLinks.home,
        },
        {
          text: "Rezyume",
          link: content.container.footer.footerLinks.cv,
        },
        {
          text: "Kontakt",
          link: content.container.footer.footerLinks.contact,
        },
        {
          text: "Proyektlar",
          link: content.container.footer.footerLinks.projects,
        },
      ],
    },
  },
  pages: {
    home: {
      banner: {
        title: "Salom",
        mainTitle: "Iskandar Qambaraliyev",
        text: "yosh Proyekt Menejer",
        btn: {
          link: "/cv",
          text: "Rezyume",
        },
      },
    },
  },
};

export default uz;

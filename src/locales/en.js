import content from "./content";

const en = {
  components: {},
  container: {
    navbar: {
      navLinks: [
        {
          text: "Home",
          link: content.container.navbar.navLinks.home,
        },
        {
          text: "Cv",
          link: content.container.navbar.navLinks.cv,
        },
        {
          text: "Contact",
          link: content.container.navbar.navLinks.contact,
        },
      ],
      projectsLink: {
        text: "Projects",
        linkText: "All projects",
        link: content.container.navbar.navLinks.projects,
      },
    },
    footer: {
      footerLinks: [
        {
          text: "Home",
          link: content.container.footer.footerLinks.home,
        },
        {
          text: "Cv",
          link: content.container.footer.footerLinks.cv,
        },
        {
          text: "Contact",
          link: content.container.footer.footerLinks.contact,
        },
        {
          text: "Projects",
          link: content.container.footer.footerLinks.projects,
        },
      ],
    },
  },
  pages: {
    home: {
      banner: {
        title: "Hi there",
        mainTitle: "Iskandar Kambaraliyev",
        text: "years old Project Manager",
        btn: {
          link: "/cv",
          text: "My CV",
        },
      },
    },
  },
};

export default en;

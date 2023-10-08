import { useContext, useEffect, useRef, useState } from "react";

// Importing styles
import styles from "./Navbar.module.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Logo, LanguageSelector } from "../../components";
import { LanguageContext } from "../../context/LanguageProvider";

// Importing icons
import { FaChevronDown as DownICon } from "react-icons/fa";
import { Rotate as Hamburger } from "hamburger-react";

// Demo list for projects
const projects = [
  {
    title: "Project Title 1",
    id: 1,
  },
  {
    title: "Project Title 2",
    id: 2,
  },
  {
    title: "Project Title 3",
    id: 3,
  },
  {
    title: "Project Title 4",
    id: 4,
  },
  {
    title: "Project Title 5",
    id: 5,
  },
  {
    title: "Project Title 6",
    id: 6,
  },
];

const Navbar = () => {
  const { dictionary, userLanguage } = useContext(LanguageContext);
  const navContent = dictionary.container.navbar;

  const { pathname } = useLocation();

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [projectDropOpen, setProjectDropOpen] = useState(false);
  const projectBtnRef = useRef(null);
  const projectDropRef = useRef(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleBtnRef = useRef(null);
  const sidebarRef = useRef(null);

  const [mobProjectOpen, setMobProjectOpen] = useState(false);
  const mobProjectBtnRef = useRef(null);
  const mobProjectRef = useRef(null);

  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.innerWidth > 1024) {
        setIsSidebarOpen(false);
      }
    };

    checkScreenWidth();

    let projectDropHandleClose = (e) => {
      if (
        projectBtnRef.current &&
        projectDropRef.current &&
        !projectBtnRef.current.contains(e.target) &&
        !projectDropRef.current.contains(e.target) &&
        projectDropOpen
      ) {
        setProjectDropOpen(false);
      }
    };

    let sidebarHandleClose = (e) => {
      if (
        toggleBtnRef.current &&
        sidebarRef.current &&
        !toggleBtnRef.current.contains(e.target) &&
        !sidebarRef.current.contains(e.target) &&
        isSidebarOpen
      ) {
        setIsSidebarOpen(false);
      }
    };

    let mobProjectHandleClose = (e) => {
      if (
        mobProjectBtnRef.current &&
        mobProjectRef.current &&
        !mobProjectBtnRef.current.contains(e.target) &&
        !mobProjectRef.current.contains(e.target) &&
        mobProjectOpen
      ) {
        setMobProjectOpen(false);
      }
    };

    let handleEscKeyPress = (e) => {
      if (e.key === "Escape" && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", checkScreenWidth);

    document.addEventListener("click", projectDropHandleClose);
    document.addEventListener("click", sidebarHandleClose);
    document.addEventListener("click", mobProjectHandleClose);

    document.addEventListener("keydown", handleEscKeyPress);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);

      document.removeEventListener("click", projectDropHandleClose);
      document.removeEventListener("click", sidebarHandleClose);
      document.removeEventListener("click", mobProjectHandleClose);

      document.removeEventListener("keydown", handleEscKeyPress);
    };
  });

  useEffect(() => {
    setProjectDropOpen(false);
    setIsSidebarOpen(false);
  }, [pathname, userLanguage]);

  useEffect(() => {
    document.body.style.overflowY = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  return (
    <>
      <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}>
        <div className={`${styles.container}`}>
          <Link to="/" className={styles.logo} aria-label="Home Page">
            <Logo />
          </Link>
          <ul className={`${styles.nav_list}`}>
            {navContent.navLinks.map((item, index) => (
              <li className={styles.nav_item} key={index}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `${styles.nav_link} ${isActive ? styles.active : ""}`
                  }
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
            <button
              className={`${styles.projects_btn} ${
                projectDropOpen ? styles.active : ""
              }`}
              onClick={() => setProjectDropOpen(!projectDropOpen)}
              ref={projectBtnRef}
              aria-expanded={projectDropOpen ? "true" : "false"}
              aria-haspopup="true"
            >
              {navContent.projectsLink.text}
              <DownICon className={styles.icon} />
            </button>

            <ul
              className={`${styles.project_list} ${
                projectDropOpen ? styles.active : ""
              }`}
              ref={projectDropRef}
            >
              <li className={styles.project_item}>
                <Link
                  to={navContent.projectsLink.link}
                  className={`${styles.project_link} ${
                    pathname === navContent.projectsLink.link
                      ? styles.active
                      : ""
                  }`}
                >
                  {navContent.projectsLink.linkText}
                </Link>
              </li>
              {projects.slice(0, 4).map((item, index) => (
                <li className={styles.project_item} key={index}>
                  <NavLink
                    to={`${navContent.projectsLink.link}/${item.id}`}
                    className={({ isActive }) =>
                      `${styles.project_link} ${isActive ? styles.active : ""}`
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </ul>
          <LanguageSelector />
        </div>
      </nav>
      <nav
        className={`${styles.navbar_mobile} ${isSticky ? styles.sticky : ""}`}
      >
        <div className={styles.container}>
          <Link to="/" aria-label="Home Page">
            <Logo />
          </Link>

          <button
            className={`${styles.nav_toggle} ${
              isSidebarOpen ? styles.active : ""
            }`}
            ref={toggleBtnRef}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          >
            <Hamburger
              toggled={isSidebarOpen}
              toggle={setIsSidebarOpen}
              direction="right"
            />
          </button>
        </div>

        <div
          className={`${styles.sidebar_wrapper} ${
            isSidebarOpen ? styles.active : ""
          }`}
        >
          <div className={`${styles.sidebar_overlay}`} />
          <div className={`${styles.sidebar}`} ref={sidebarRef}>
            <div
              className={`${styles.links} ${
                mobProjectOpen ? styles.active : ""
              }`}
            >
              <ul className={styles.nav_list}>
                {navContent.navLinks.map((item, index) => (
                  <li className={styles.nav_item} key={index}>
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        `${styles.nav_link} ${isActive ? styles.active : ""}`
                      }
                    >
                      {item.text}
                    </NavLink>
                  </li>
                ))}
                <li className={styles.nav_item}>
                  <button
                    className={styles.nav_link}
                    onClick={() => setMobProjectOpen(true)}
                    ref={mobProjectBtnRef}
                    aria-expanded="false"
                    aria-haspopup="true"
                    aria-controls="Projects Dropdown"
                  >
                    {navContent.projectsLink.text}
                    <DownICon className={styles.icon} />
                  </button>
                </li>
              </ul>
              <ul className={`${styles.project_list}`} ref={mobProjectRef}>
                <li className={styles.project_item}>
                  <Link
                    to={navContent.projectsLink.link}
                    className={`${styles.project_link} ${
                      pathname === navContent.projectsLink.link
                        ? styles.active
                        : ""
                    }`}
                    aria-label="Projects Page"
                  >
                    {navContent.projectsLink.linkText}
                  </Link>
                </li>
                {projects.slice(0, 4).map((item, index) => (
                  <li className={styles.project_item} key={index}>
                    <NavLink
                      to={`${navContent.projectsLink.link}/${item.id}`}
                      className={({ isActive }) =>
                        `${styles.project_link} ${
                          isActive ? styles.active : ""
                        }`
                      }
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
                <li className={styles.project_item}>
                  <button
                    className={`${styles.project_link} ${styles.back}`}
                    onClick={() => setMobProjectOpen(false)}
                    aria-label="Close Projects Dropdown"
                  >
                    <DownICon className={styles.back_icon} />
                  </button>
                </li>
              </ul>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import { useContext } from "react";

// Importing styles
import styles from "./Footer.module.scss";
import { Logo } from "../../components";
import { Link, NavLink } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageProvider";

const Footer = () => {
  const { dictionary } = useContext(LanguageContext);
  const footerContent = dictionary.container.footer;
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} aria-label="Home Page">
          <Logo isDark />
        </Link>

        <ul className={styles.footer_list}>
          {footerContent.footerLinks.map((item, index) => (
            <li className={styles.footer_item} key={index}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `${styles.footer_link} ${isActive ? styles.active : ""}`
                }
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

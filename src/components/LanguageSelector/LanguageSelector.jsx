import { useContext, useEffect, useRef, useState } from "react";

// Importing styles
import styles from "./LanguageSelector.module.scss";

import { languageOptions } from "../../locales";
import { LanguageContext } from "../../context/LanguageProvider";

// Importing icons
import { FaChevronDown as DownICon } from "react-icons/fa";

const LanguageSelector = () => {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  const langChange = (id) => {
    userLanguageChange(id);
  };

  const [dropOpen, setDropOpen] = useState(false);
  const btnRef = useRef(null);
  const dropRef = useRef(null);

  useEffect(() => {
    let dropHandleClose = (e) => {
      if (
        btnRef.current &&
        dropRef.current &&
        !btnRef.current.contains(e.target) &&
        !dropRef.current.contains(e.target) &&
        dropOpen
      ) {
        setDropOpen(false);
      }
    };

    document.addEventListener("click", dropHandleClose);
    return () => {
      document.removeEventListener("click", dropHandleClose);
    };
  });

  useEffect(() => {
    setDropOpen(false);
  }, [userLanguage]);

  return (
    <div className={`${styles.LanguageSelector}`}>
      <button
        className={`${styles.curr_lang} ${dropOpen ? styles.active : ""}`}
        onClick={() => setDropOpen(!dropOpen)}
        ref={btnRef}
        aria-expanded={dropOpen ? "true" : "false"}
        aria-haspopup="listbox"
        aria-controls="languageDropdown"
      >
        <span className={styles.text}>{languageOptions[userLanguage]}</span>
        <DownICon className={styles.icon} />
      </button>
      <ul
        className={`${styles.lang_drop} ${dropOpen ? styles.active : ""}`}
        ref={dropRef}
      >
        {Object.entries(languageOptions).map(([id, name]) => (
          <li
            className={`${styles.lang_item} ${
              id === userLanguage ? styles.selected : ""
            }`}
            key={id}
          >
            <button
              className={`${styles.lang_btn}`}
              onClick={() => langChange(id)}
              aria-label={`Switch to ${name} language`}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;

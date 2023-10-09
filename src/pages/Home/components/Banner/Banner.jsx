import { useContext, useEffect, useState } from "react";

// importing styles
import styles from "./Banner.module.scss";

import content from "../../../../locales/content";
import { LanguageContext } from "../../../../context/LanguageProvider";
import useAgeCalculator from "../../../../hooks/useAgeCalculator";
import { LinkButton } from "../../../../components";

import pagesHomeBannerImg from "../../../../assets/Images/Pages/Home/banner.jpg";
import pagesHomeBannerBorder from "../../../../assets/Images/Pages/Home/banner-border.svg";

const Banner = () => {
  const { dictionary } = useContext(LanguageContext);
  const age = useAgeCalculator(content.birthDate);

  const [cursorPosition, setCursorPosition] = useState({ x: -68, y: -68 });

  const handleMouseMove = (event) => {
    const { pageX, pageY } = event;
    setCursorPosition({ x: pageX, y: pageY - 92 });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className={styles.banner}>
      <div
        className={styles.follow_cursor}
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      />
      <div className={styles.banner_wrapper}>
        <div className={styles.img_wrapper}>
          <img src={pagesHomeBannerImg} className={styles.img} alt="banner" />
          <img
            src={pagesHomeBannerBorder}
            className={styles.border}
            alt="banner"
          />
        </div>
        <div className={styles.img_wrapper}>
          <img src={pagesHomeBannerImg} className={styles.img} alt="banner" />
          <img
            src={pagesHomeBannerBorder}
            className={styles.border}
            alt="banner"
          />
        </div>
      </div>
      <div className={styles.content_wrapper}>
        <div className={styles.container}>
          <h4 className={styles.title}>{dictionary.pages.home.banner.title}</h4>
          <h1 className={styles.mainTitle}>{dictionary.pages.home.banner.mainTitle}</h1>
          <p className={styles.text}>{age} {dictionary.pages.home.banner.text}</p>
          
          <LinkButton to={dictionary.pages.home.banner.btn.link} text={dictionary.pages.home.banner.btn.text} className={styles.btn_link} />
        </div>
      </div>
    </div>
  );
};

export default Banner;

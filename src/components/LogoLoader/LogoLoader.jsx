import React from "react";

// Importing styles
import styles from "./LogoLoader.module.scss";

const LogoLoader = () => {
  return (
    <div className={`${styles.LogoLoader}`}>
      <svg
        width="240"
        height="150"
        viewBox="0 0 240 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${styles.logo_icon}`}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M145.397 2.67783C141.827 -0.892617 136.038 -0.892608 132.467 2.67784L93.6782 41.4671C91.8987 43.2466 91.0061 45.5772 91.0004 47.9095C90.9773 50.2792 91.8698 52.6561 93.6778 54.4642L132.467 93.2534C136.038 96.8239 141.826 96.8239 145.397 93.2534C148.967 89.683 148.967 83.8941 145.397 80.3237L113.039 47.9658L145.397 15.6076C148.968 12.0371 148.968 6.24829 145.397 2.67783Z"
          fill="#D9D9D9"
          className={styles.path_1}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M93.6778 41.4265C90.1074 44.9969 90.1074 50.7858 93.6778 54.3562L126.036 86.7146L93.6783 119.072C90.1078 122.643 90.1078 128.432 93.6783 132.002C97.2487 135.573 103.038 135.573 106.608 132.002L145.397 93.213C147.206 91.404 148.099 89.0255 148.075 86.6546C148.068 84.3234 147.175 81.9943 145.397 80.2157L106.608 41.4265C103.037 37.856 97.2483 37.856 93.6778 41.4265Z"
          fill="#D9D9D9"
          className={styles.path_2}
        />
      </svg>
    </div>
    
  );
};

export default LogoLoader;

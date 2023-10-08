// Importing styles
import { Link } from "react-router-dom";
import styles from "./LinkButton.module.scss";

import { FiArrowRight as RightArrowIcon } from "react-icons/fi";

const LinkButton = ({ to, style, className, text }) => {
  return (
    <Link to={to} style={style} className={`${className} ${styles.linkButton}`}>
      {text}
      <RightArrowIcon className={styles.icon} strokeWidth={3} />
    </Link>
  );
};

export default LinkButton;

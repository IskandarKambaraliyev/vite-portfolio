import React, { useContext } from 'react';

// Importing styles
// eslint-disable-next-line no-unused-vars
import styles from "./Home.module.scss";
import { LanguageContext } from '../../context/LanguageProvider';
import Banner from './components/Banner/Banner';


const Home = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <div>
      <Banner />
      {dictionary.pages.home.title}
    </div>
  )
}

export default Home
import React from 'react'

import Layout from '../components/layout'

import styles from './styles.module.scss'

import shandra1 from "../assets/images/shandra1.png";
import shandra2 from "../assets/images/shandra2.png";
import shandra3 from "../assets/images/shandra3.png";

import nowmad from "../assets/images/nowmad.png";
import daylight from "../assets/images/daylight.png";
import dmi from "../assets/images/dmi.png";
import tripfuser from "../assets/images/tripfuser.png";
import giz from "../assets/images/giz.png";

const IndexPage = () => (
  <Layout>
    <div className={styles.left}>
      <div className={styles.pictures}>
        <img src={shandra1} alt="Profile" />
        <img src={shandra2} alt="Profile" />
        <img src={shandra3} alt="Profile" />
      </div>
      <div className={styles.description}>
        <h1>
          Shandra Menendez
        </h1>
        <h2>
          Check my <a href="http://behance.net/shandraich" target="_blank" rel="noopener noreferrer">career path</a>, get a feeling of my <a href="https://www.linkedin.com/in/shandramenendez" target="_blank" rel="noopener noreferrer">design skills</a> and learn what I took with me from <a href="https://medium.com/@shandra.aich" target="_blank" rel="noopener noreferrer">my experiences</a>.
        </h2>
      </div>
    </div>
    <div className={styles.right}>
      <div className={styles.exp}>
        <img src={nowmad} alt="Nowmad" />
      </div>
      <div className={styles.exp}>
        <img src={daylight} alt="Daylight" />
      </div>
      <div className={styles.exp}>
        <img src={dmi} alt="Dmi" />
      </div>
      <div className={styles.exp}>
        <img src={tripfuser} alt="Tripfuser" />
      </div>
      <div className={styles.exp}>
        <img src={giz} alt="GIZ" />
      </div>
    </div>
  </Layout>
)

export default IndexPage

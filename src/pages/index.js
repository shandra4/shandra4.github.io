import React from 'react'

import Layout from '../components/layout'

import styles from './styles.module.scss'

import shandra1 from '../assets/images/shandra1.png'
import shandra2 from '../assets/images/shandra2.png'
import shandra3 from '../assets/images/shandra3.png'

import unbabel from '../assets/images/unbabel.png'
import nowmad from '../assets/images/nowmad.png'
import daylight from '../assets/images/daylight.png'
import dmi from '../assets/images/dmi.png'
import tripfuser from '../assets/images/tripfuser.png'
import giz from '../assets/images/giz.png'

const IndexPage = () => (
  <Layout>
    <div className={styles.left}>
      <div className={styles.pictures}>
        <img src={shandra1} alt="Profile" />
        <img src={shandra2} alt="Profile" />
        <img src={shandra3} alt="Profile" />
      </div>
      <div className={styles.description}>
        <h1>Shandra Menendez</h1>
        <h2>
          Check my{' '}
          <a
            href="https://www.linkedin.com/in/shandramenendez"
            target="_blank"
            rel="noopener noreferrer"
          >
            career path
          </a>
          , get a feeling of my{' '}
          <a
            href="http://behance.net/shandraich"
            target="_blank"
            rel="noopener noreferrer"
          >
            design skills
          </a>{' '}
          and learn what I took with me from{' '}
          <a
            href="https://medium.com/@shandra.aich"
            target="_blank"
            rel="noopener noreferrer"
          >
            my experiences
          </a>
          .
        </h2>
      </div>
    </div>
    <div className={styles.right}>
      <a
        className={styles.exp}
        href="https://unbabel.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={unbabel} alt="Unbabel" />
      </a>
      <a
        className={styles.exp}
        href="https://www.nowmad.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={nowmad} alt="Nowmad" />
      </a>
      <a
        className={styles.exp}
        href="https://www.daylightdesign.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={daylight} alt="Daylight" />
      </a>
      <a
        className={styles.exp}
        href="https://dminc.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={dmi} alt="Dmi" />
      </a>
      <a
        className={styles.exp}
        href="https://www.tripfuser.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={tripfuser} alt="Tripfuser" />
      </a>
      <a
        className={styles.exp}
        href="https://www.giz.de/de/weltweit/35382.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={giz} alt="GIZ" />
      </a>
    </div>
  </Layout>
)

export default IndexPage

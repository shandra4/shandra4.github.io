import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './reset.scss'
import './fonts.scss'
import styles from './styles.module.scss'

const Layout = ({ children }) => (
  <>
    <Helmet
      title="Shandra's Portfolio"
      meta={[
        { name: 'description', content: 'Portfolio of Shandra Menendez, UX/UI designer and researcher' },
        { name: 'keywords', content: 'shandra,Menendez,shandra Menendez,portfolio,UX,UI,design,research,product' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <div className={styles.content}>
      {children}
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

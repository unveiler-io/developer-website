import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: <>Safe</>,
    imageUrl: 'img/undraw_security.svg',
    description: (
      <>
        Our novel, cutting edge technology uses raw GPS measurements to verify the location of mobile devices.
      </>
    ),
    link: 'docs/',
  },
  {
    title: <>Easy to Adopt</>,
    imageUrl: 'img/undraw_mobile_development.svg',
    description: (
      <>
        With our open-source React Native client you can integrate with only a few lines of code, such that
        you can focus on creating the best app possible.
      </>
    ),
    link: 'docs/react-native/getting-started',
  },
  {
    title: <>Same Permissions. More Info</>,
    imageUrl: 'img/undraw_my_location.svg',
    description: (
      <>
        We require the same permissions on Android as needed for accessing the user's location. A lot of value
        is left on the table by not using the raw GPS measurements you already requested access to.
      </>
    ),
    link: 'docs/react-native/requirements',
  },
]

function Feature({ imageUrl, title, description, link }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      {link && <Link to={useBaseUrl(link)}>Read More</Link>}
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={``} // Set this to prefix the title
      description="Documentation of ClaimR, providing verified locations of your user by analysing raw GPS measurements data."
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--outline button--secondary button--lg', styles.getStarted)}
              to={useBaseUrl('docs/')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home

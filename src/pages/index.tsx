import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'

import styles from './styles.module.css'
import CodeSnippet from '../components/CodeSnippet'

const features = [
  {
    title: 'Safe',
    imageUrl: 'img/undraw_security.svg',
    description: (
      <>
        Our novel, cutting edge technology uses raw GPS measurements to verify the location of mobile devices.
      </>
    ),
    link: 'docs/',
  },
  {
    title: 'Easy to Adopt',
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
    title: 'Same Permissions. More Info',
    imageUrl: 'img/undraw_my_location.svg',
    description: (
      <>
        We require the same Android permissions as needed for accessing the user's location. A lot of value is
        left on the table by not using the raw GPS measurements you already have access to.
      </>
    ),
    link: 'docs/react-native/requirements',
  },
]

const Feature = ({
  imageUrl,
  title,
  description,
  link,
}: {
  imageUrl: string
  title: string
  description: JSX.Element
  link?: string
}) => {
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

const Home = () => {
  const { siteConfig = {} } = useDocusaurusContext()

  return (
    <Layout
      title={``} // Set this to prefix the title
      description="Documentation of Unveiler, providing verified locations of your user by analysing raw GPS measurements data."
    >
      <header className={'hero'}>
        <div className="container">
          <div className="row">
            <div className="col col--5">
              <h1>{siteConfig.tagline}</h1>
              <p className="hero__subtitle">
                15 lines of code is all it takes to get a reliable location from your user.
              </p>
              <Link
                className={clsx('button button--secondary button--lg', styles.getStarted)}
                to={useBaseUrl('docs/')}
              >
                Learn More
              </Link>
              <Link
                className={clsx('button button--primary button--lg', styles.getStarted)}
                to={useBaseUrl('docs/react-native/getting-started')}
              >
                Get Started
              </Link>
            </div>
            <div className="col col--7">
              <CodeSnippet
                language={'tsx'}
                theme={'dark'}
                code={`
import { UnveilerClient, useLazyVerifiedLocation } from '@unveiler.io/react-native-client'
import { Text, Button } from 'react-native'

const client = new UnveilerClient({ apiKey: 'YOUR_API_KEY' })

const MyApp = () => {
  const { claim, submit } = useLazyVerifiedLocation({ client })

  return (<>
      {submit && <Button onPress={submit} title={'Submit'} />}
      {claim && (
        <Text>
          {claim.location.latitude}, {claim.location.longitude}
        </Text>
      )}
  </>)
}
                `.trim()}
              />
            </div>
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

import React, { useEffect, useState } from 'react'

import styles from './styles.module.css'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useThemeContext from '@theme/hooks/useThemeContext'

import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import defaultTheme from 'prism-react-renderer/themes/palenight'

type Theme = 'dark' | 'light'

const CodeSnippet = ({ language, code, theme }: { language: Language; code: string; theme?: Theme }) => {
  const {
    siteConfig: {
      themeConfig: { prism = {} },
    },
  } = useDocusaurusContext()

  const [mounted, setMounted] = useState(false)
  // The Prism theme on SSR is always the default theme but the site theme
  // can be in a different mode. React hydration doesn't update DOM styles
  // that come from SSR. Hence force a re-render after mounting to apply the
  // current relevant styles. There will be a flash seen of the original
  // styles seen using this current approach but that's probably ok. Fixing
  // the flash will require changing the theming approach and is not worth it
  // at this point.
  useEffect(() => {
    setMounted(true)
  }, [])

  // Decide whether to render the light or dark theme
  const themeContext = useThemeContext()
  const isDarkTheme = theme === 'dark' || (theme === undefined && themeContext.isDarkTheme)

  // Define the themes to be used in light and dark mode
  const lightModeTheme = prism.theme || defaultTheme
  const darkModeTheme = prism.darkTheme || lightModeTheme

  // Pick the theme based on whether to render in dark or light mode
  const prismTheme = isDarkTheme ? darkModeTheme : lightModeTheme

  return (
    <div key={mounted.toString()}>
      <Highlight {...defaultProps} theme={prismTheme} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <>
            <pre className={`${className} ${styles.codeSnippet}`} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          </>
        )}
      </Highlight>
    </div>
  )
}

export default CodeSnippet

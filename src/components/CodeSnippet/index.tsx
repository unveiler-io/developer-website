import React, { useEffect, useState } from 'react'

import styles from './styles.module.css'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useThemeContext from '@theme/hooks/useThemeContext'

import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import defaultTheme from 'prism-react-renderer/themes/palenight'

const CodeSnippet = ({ language, code }: { language: Language; code: string }) => {
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

  const { isDarkTheme } = useThemeContext()
  const lightModeTheme = prism.theme || defaultTheme
  const darkModeTheme = prism.darkTheme || lightModeTheme
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

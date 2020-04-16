import { ZEITUIProvider, CSSBaseline } from '@zeit-ui/react'
import ThemeContext from '../lib/context/theme'

export default function MyApp({ Component, pageProps }) {
  const [themeType, setThemeType] = React.useState('light')
  const switchThemes = () => {
    setThemeType((lastThemeType) =>
      lastThemeType === 'dark' ? 'light' : 'dark'
    )
  }

  return (
    <>
      <ThemeContext.Provider
        value={{
          themeType: themeType,
          switchThemes: switchThemes,
        }}
      >
        <ZEITUIProvider theme={{ type: themeType }}>
          <CSSBaseline>
            <Component {...pageProps} />
          </CSSBaseline>
        </ZEITUIProvider>
      </ThemeContext.Provider>
    </>
  )
}

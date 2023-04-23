import '@/styles/globals.css'
import { gsap } from 'gsap';

import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/main.scss'


// Import initial FontAwesome Styles: https://github.com/FortAwesome/react-fontawesome/issues/134#issuecomment-476276516
import '@fortawesome/fontawesome-svg-core/styles.css'

// Import FontAwesome Icons
import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faStar,
  faArrowUp,
  faArrowRight,
  faArrowDown,
  faArrowLeft,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(
  faStar,
  faArrowUp,
  faArrowRight,
  faArrowDown,
  faArrowLeft,
  faTrophy,
  faGithub
)
config.autoAddCss = false
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

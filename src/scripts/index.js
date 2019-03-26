/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import '../styles/main.scss'
import {
  jarallax
} from './lib/jarallax'
// eslint-disable-next-line prettier/prettier
import {
  greet
} from './greet'

// NOTE:: Can't name bundle from what I can see so attach to window. Not ideal but works 👍
window.myPackage = {
  greet,
  // eslint-disable-next-line prettier/prettier
}
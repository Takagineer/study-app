import * as React from 'react'
import Link from 'next/link'
import {auth} from '../firebase'

const Header = ({ pathname }) => (
  <header>
    <Link href="/">
      <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
    </Link>{' '}

    {auth.currentUser===null? '': 
      <Link href="/about">
        <a className={pathname === '/about' ? 'is-active' : ''}>About</a>
      </Link>
    }
  </header>
)

export default Header

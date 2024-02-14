import { Outlet, Link } from 'react-router-dom'
import './navigation.styles.scss'
import CrnLogo from '../../assets/crown.svg?react' //import svg with vite

const Navigation = () => {
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation

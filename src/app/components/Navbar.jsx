'use client'
import { NavbarState } from '@/states/NavbarState'
import { AppState } from '@/states/AppState'

export default function Navbar () {
  const appState = AppState()
  const navbarState = NavbarState()

  const handleToggleMenu = () => {
    navbarState.toggleMenu()
  }

  return (
    <nav className='flex flex-row navbar bg-blue-ribbon-800 text-white p-4 items-center justify-between select-none'>
      <div className='flex flex-row items-center'>
        <button
          className='p-2 mx-2 border-white border-2 rounded-xl hover:ease-in-out hover:duration-100 user-select-none md:hover:bg-blue-ribbon-900'
          onClick={handleToggleMenu}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='/assets/icons/navbar/menu-burger-white.png'
            className='w-4'
            alt='menu'
          />
        </button>
        <h1 className='mx-2 font-bold text-2xl'>{appState.appName}</h1>
      </div>
      <div className='mx-2 p-2 font-bold bg-white text-blue-ribbon-600 text-xs rounded-xl'>
        <p>v{appState.version}</p>
      </div>
    </nav>
  )
}

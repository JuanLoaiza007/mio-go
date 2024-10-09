'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { NavbarState } from '@/states/NavbarState'
import { capitalizeFirstLetter } from '@/utils/capitalization'

export default function MainMenu () {
  const pages = [
    ['saldo', '/saldo'],
    ['Sobre la app', '/sobre']
  ]
  const navbarState = NavbarState()
  const pathname = usePathname()

  const isActive = 'font-bold bg-white text-blue-ribbon-800 cursor-default'
  const isUnactive = 'bg-red text-white md:hover:bg-blue-ribbon-600'

  return (
    <div
      className={`bg-blue-ribbon-800 text-white p-4 flex flex-col md:h-full items-center ${
        navbarState.isMenuOpen ? '' : 'hidden'
      }`}
    >
      {pages.map(([name, href]) => (
        <Link
          key={name}
          href={href}
          className={`p-4 w-full rounded-xl hover:ease-in-out hover:duration-100 ${
            pathname === href ? isActive : isUnactive
          }`}
        >
          {capitalizeFirstLetter(name)}
        </Link>
      ))}
    </div>
  )
}

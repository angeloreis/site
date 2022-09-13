import { HTMLProps } from 'react'
import S from './Menu.module.css'

interface MenuItemProps extends HTMLProps<HTMLAnchorElement> {
    label: string
}

function MenuItem({label,...rest}: MenuItemProps) {
    return (
        <li>
            <a className={S.menuListLink} {...rest}>{label}</a>
        </li>
    )
}

export function Menu() {
    return (
    <nav className={S.menuNav}>
        <ul className={S.menuList}>
          <MenuItem href='/' label='Home'/>
          <MenuItem href="#QuemSou" label='Quem Sou' />
          <MenuItem href="#Portifolio" label='PortFólio' />
          <MenuItem href="#Contato" label='Contato' />
          <MenuItem href="https://github.com/angeloreis" target="_blank" rel="noreferrer" label='Github' />
          <MenuItem href="https://linkedin.com/in/angelodosreis/" target="_blank" rel="noreferrer" label='Linkedin' />
        </ul>
    </nav>
    )
}
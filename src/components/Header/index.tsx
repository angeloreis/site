import Image from 'next/image'
import { Menu } from "../Menu"
import S from '../../styles/Header.module.css'
import Link from 'next/link'

export function Header() {
    return (
        <header className={S.layoutHeader}>
            <div>
                <Link href="/">
                    <a>
                        <Image className={S.logoAvatar}
                            src="https://github.com/angeloreis.png"
                            width="64px"
                            height="64px"
                            alt="Foto de perfil do Angelo Reis via Github" />
                    </a>
                </Link>
            </div>
            <Menu />
        </header>
    )
}
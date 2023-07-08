"use client"

import { redes } from '@/app/objects/redes'
import styles from '../../styles/home_styles/HomeFooter.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function HomeFooter() {
    const styleLink = {
        textDecoration: "none",
        color: "white",
    }

    const router = useRouter()

    const redirectRedes = (linkUser) => {
        router.push(linkUser)
    }

    return (
        <div className={ styles.DivFatherHomeFooter }>
            {
                redes.map(({
                    img,
                    linkCreator,
                    name,
                    linkUser
                }) => (
                    <div onClick={ () => redirectRedes(linkUser) } className={ styles.DivRedesHomeFooter }>
                        <img src={ img } alt={ name } />
                        <p>{ name }</p>
                        <Link style={ styleLink } href={ linkCreator }>Link do criador</Link>
                    </div>
                ))
            }
        </div>
    )
}
import Link from 'next/link'
import styles from '../../styles/home_styles/HomeHeader.module.css'

export default function HomeHeader() {
    const styleLink = {
        textDecoration: "none",
        color: "white",
        fontWeight: "bold"
    }

    return (
        <div className={ styles.DivFatherHomeHeader }>
            <div className={ styles.DivTitleHomeHeader }>
                <h1><Link style={ styleLink } href="">Amiibo</Link></h1>
            </div>
            <nav className={ styles.DivMenuHomeHeader }>
                <ul>
                    <li><Link style={ styleLink } href="/">Favoritos</Link></li>
                </ul>
            </nav>
        </div>
    )
}
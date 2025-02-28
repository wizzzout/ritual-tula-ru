import Link from 'next/link'
import CSS from './Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={CSS.navbarWrap}>
			<Link href='/' className={CSS.navbarItem}>
				Главная
			</Link>
			<Link href='/products' className={CSS.navbarItem}>
				Каталог
			</Link>
		</nav>
	)
}

export default Navbar

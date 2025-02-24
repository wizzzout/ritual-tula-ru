import Link from 'next/link'

const Navbar = () => {
	return (
		<nav className='brand-bg p-4'>
			<div className='container mx-auto flex justify-between items-center'>
				<Link href='/' className='text-black text-xl font-bold'>
					Мой сайт
				</Link>
				<div className='flex gap-4'>
					<Link href='/' className='text-black hover:text-gray-200'>
						Главная
					</Link>
					<Link href='/products' className='text-black hover:text-gray-200'>
						Продукты
					</Link>
					<Link href='/about' className='text-black hover:text-gray-200'>
						О нас
					</Link>
					<Link href='/mari' className='text-black hover:text-gray-200'>
						Mari
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar

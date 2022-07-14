import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/notfound.module.css';

function NotFound() {

	// useEffect for changing title
	useEffect(() => {
		document.title = 'Page not found!';
	});

	return (
		<main className = { styles.main }>
			<p className={ styles.notfound }> 404 </p>
			<h1 className={ styles.title } > Ups, terjadi kesalahan! </h1>
			<p className={ styles.paragraph } >
				<Link className={styles.link} to="/" >
					Halaman Utama
				</Link>
			</p>
		</main>
	)
}

export default NotFound;
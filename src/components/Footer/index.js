import React from 'react';
import styles from './index.module.css';

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<p className={styles.paragraph}>
					2022 Simplus Notes 📔 | 
					<a href="#" className={styles.link} target="_blank" rel="noopener noreferrer"> Arief Kurniawan </a>
				</p>
			</div>
		</footer>
	)
}

export default Footer;
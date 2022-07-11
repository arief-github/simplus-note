import React from 'react';
import { PlusIcon } from '@heroicons/react/solid';

import styles from './index.module.css';

function Header() {
	return (
		<nav className = {styles.header} >
			<div className = {styles.wrapper} >
				<h1 className={styles.title}> Simplus Note 📔</h1>
				<button className={styles.addNoteButton} aria-label="add note" title="Add new note">
					<PlusIcon className={styles.plusIcon} />
					<span className={styles.btnLabel}>Add New Note</span>
				</button>
			</div>
		</nav>
	);
}

export default Header;
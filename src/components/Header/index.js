import React, { useContext }  from 'react';
import { PlusIcon } from '@heroicons/react/solid';

import { ModalContext } from '../../context/ModalContext';

import styles from './index.module.css';

function Header() {
	const { openModal } = useContext(ModalContext);

	return (
		<nav className = {styles.header} >
			<div className = {styles.wrapper} >
				<h1 className={styles.title}> Simplus Note 📔</h1>
				<button onClick={openModal} className={styles.addNoteButton} aria-label="add note" title="Add new note">
					<PlusIcon className={styles.plusIcon} />
					<span className={styles.btnLabel}>Add New Note</span>
				</button>
			</div>
		</nav>
	);
}

export default Header;
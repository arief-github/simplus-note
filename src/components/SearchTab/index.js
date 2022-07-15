import { useContext } from 'react';
import { SearchIcon } from '@heroicons/react/solid';

import { NotesContext } from '../../context/NotesContext';

import styles from './index.module.css';

function SeacrhTab() {
	return (
		<form role="" className={styles.form}>
			<div className={styles.inputGroup}>
				<SearchIcon className={styles.icon}/>
				<input name="cari-catatan" type="search" placeholder="Cari catatan ... " aria-label="Cari catatan" className={styles.textbox}/>
			</div>
		</form>
	)
}

export default SeacrhTab;
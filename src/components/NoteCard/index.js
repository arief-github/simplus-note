import React, { useContext } from 'react';
import { ClockIcon, TrashIcon } from '@heroicons/react/solid';

import { NotesContext } from '../../context/NotesContext';

import styles from './index.module.css';

function NoteCard({ note }) {
	const { moveNote, deleteNote } = useContext(NotesContext);

	return (
		<article id={note.id} className={styles.articleCard}>
			<h2 className={styles.title}> {note.title} </h2>
			<p className={styles.dateInfo}>
				{note.createdAt}
			</p>
			<hr className={styles.lineBreak} />
			<p className={styles.bodyText}>
				{note.body}
			</p>
			<hr className={styles.lineBreak}/>
			<div className={styles.action}>
				<button className={styles.btnMove} onClick={() => moveNote(note.id)}> 
					{note.archived ? '<- Aktifkan' : 'Arsipkan ->'} 
				</button>
				<button className={styles.btnDelete} onClick={() => deleteNote(note.id)}> 
					<TrashIcon className={styles.iconBtn}/> Hapus
				</button>
			</div>
		</article>
	)
}

export default NoteCard;

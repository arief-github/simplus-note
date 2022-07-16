import React, { useContext } from 'react';
import { ClockIcon, TrashIcon } from '@heroicons/react/solid';

import { NotesContext } from '../../context/NotesContext';
import MarkText from '../MarkText';

import styles from './index.module.css';

function NoteCard({ note }) {
	const { moveNote, deleteNote } = useContext(NotesContext);
	const { keyword } = useContext(NotesContext);

	const regExpKeyword = new RegExp(keyword, 'gi');
	
	return (
		<article id={note.id} className={styles.articleCard}>
			<h2 className={styles.title}> 
				 <MarkText
		          keyword={keyword}
		          regExpKeyword={regExpKeyword}
		          text={note.title}
		        />
			</h2>
			<p className={styles.dateInfo}>
				{note.createdAt}
			</p>
			<hr className={styles.lineBreak} />
			<p className={styles.bodyText}>
				 <MarkText
		          keyword={keyword}
		          regExpKeyword={regExpKeyword}
		          text={note.body}
		        />
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

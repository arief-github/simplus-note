import React from 'react';
import { ClockIcon, TrashIcon } from '@heroicons/react/solid';

import styles from './index.module.css';

function NoteCard() {
	return (
		<article className={styles.articleCard}>
			<h2 className={styles.title}></h2>
			<p className={styles.dateInfo}></p>
			<hr className={styles.lineBreak} />
			<p className={styles.bodyText}></p>
			<hr className={styles.lineBreak}/>
			<div className={styles.action}>
				<button className={styles.btnMove}> Archive </button>
				<button className={styles.btnDelete}> Delete </button>
			</div>
		</article>
	)
}

export default NoteCard;

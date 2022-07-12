import React from 'react';
import Masonry from 'react-masonry-css';

import NoteCard from '../NoteCard';
import styles from './index.module.css';

// set breakpoint column
const breakpointColumnsObj = {
	default: 3,
	1024: 2,
	640: 1,
} 

function BoxNoteCard() {
	return (
		<Masonry
		  breakpointCols={ breakpointColumnsObj }
		  className={ styles.masonryGrid }
		  columnClassName={ styles.masonryGridColumn }
		>
			
		</Masonry>
	)
}

export default React.memo(BoxNoteCard);
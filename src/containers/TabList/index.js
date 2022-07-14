import { ArchiveIcon, CollectionIcon } from '@heroicons/react/solid';
import { useContext, useRef, useState } from 'react';

import { NotesContext } from '../../context/NotesContext';
import { PanelContext } from '../../context/PanelContext';

import styles from './index.module.css';

function TabList() {
	const  { activeNotes }  = useContext(NotesContext);
	const { panel, setPanel } = useContext(PanelContext);

	const [tabFocus, setTabFocus] = useState(0);

	// useRef Document
	const activeMenuTab = useRef(null);
	const archiveMenuTab = useRef(null);
	const tabs = [activeMenuTab, archiveMenuTab];

	const amountOfNotesData = {
		active: activeNotes.length,
	}

	// Tablist
	const handleKeyboardEvent = (event) => {
		let tabNum = tabFocus;

		// Keycode for Left and Right Arrow
		if(event.keycode === 39 || event.keycode === 37) {
			tabs[tabNum].current.tabIndex = '-1';

			// right arrow
			if(event.keyCode === 39) {
				tabNum++;
				if(tabFocus >= tabs.length - 1) {
					tabNum = 0;
				}
			}

			// left arrow
			if(event.keyCode === 37) {
				tabNum--;
				if(tabFocus <= 0) {
					tabNum = tabs.length - 1;
				}
			}

			setTabFocus(tabNum);

			tabs[tabNum].current.tabIndex = '0';
			tabs[tabNum].current.focus();
		}
	};

	return (
		<div role="tablist" aria-label="Tab Menu Catatan" onKeyDown={handleKeyboardEvent} className={styles.tablist}>
			<button 
				role="tab"
				aria-selected={panel === 'active'}
				aria-controls="panel-aktif"
				aria-label="Daftar catatan aktif"
				id="tab-catatan-aktif"
				tabIndex="0"
				ref={activeMenuTab}
				onClick={() => setPanel('active')}
				className={styles.buttonTab}
			>
				<CollectionIcon className={styles.iconBtn}/> Aktif({amountOfNotesData.active})
			</button>
				<button 
				role="tab"
				aria-selected={panel === 'archive'}
				aria-controls="panel-arsip"
				aria-label="Daftar catatan arsip"
				id="tab-catatan-arsip"
				tabIndex="-1"
				ref={archiveMenuTab}
				onClick={() => setPanel('archive')}
				className={styles.buttonTab}
			>
				<ArchiveIcon className={styles.iconBtn}/> Arsip
			</button>
		</div>
	)
}

export default TabList;
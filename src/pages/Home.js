import React, { useContext, useEffect }  from 'react';
import { NotesContext } from '../context/NotesContext';

import Header from '../components/Header';
import Footer from '../components/Footer';
import TabPanel from '../components/TabPanel';

import TabList from '../containers/TabList';

import styles from '../styles/home.module.css';

function Home() {
	const { activeNotes } = useContext(NotesContext);

	useEffect(() => {
		document.title = 'Halaman Utama';
	})

	return (
		<>
			<Header/>
			
			<main className={styles.main} >
				<div className={styles.main__heading}>
					<div className={styles.main__headingWrapper}>
						<TabList/>
					</div>
				</div>

				<section className={styles.main__notelist} id="daftar-catatan" aria-label="Daftar Catatan">
					<div className={styles.main__notelistWrapper}>
						<TabPanel panelId={`panel-aktif`} panelName={`active`} panelLabel={`tab-catatan-aktif`} notes={activeNotes} />
						
					</div>
				</section>
			</main>

			<Footer/>
		</>
	)
}

export default Home;
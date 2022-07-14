import { useContext } from 'react';

import styles from './index.module.css';

import EmptyInboxDesktop from '../../assets/images/Empty_Inbox_Outline_Desktop.png';
import EmptyInboxMobile from '../../assets/images/Empty_Inbox_Outline_Mobile.png';

function Empty() {
	return (
		<div className={styles.boxEmpty}>
			<picture>
				<source media="(min-width: 768px)" srcSet={EmptyInboxDesktop}/>
				<img src={EmptyInboxMobile} alt=""/>
			</picture>
			<p className={styles.text}>
				Catatan singkat tidak ditemukan
			</p>
		</div>
	)
}

export default Empty;
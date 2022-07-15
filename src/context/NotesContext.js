import React, { createContext, useEffect, useState } from 'react';

import { getInitialData } from '../data';

export const NotesContext = createContext();
export const MaxTitle = 30;

const initialState = () => {
	return getInitialData();
};

const NotesContextProvider = ( props ) => {
	const [notes, setNotes] = useState(initialState());

	const activeNotes = notes.filter((note) => note.archived === false);
	const archiveNotes = notes.filter((note) => note.archived === true);

	const addNote = (newTitle, newBodyText) => {
		const date = new Date();

		setNotes([
			{
				id: date.getTime(),
				title: newTitle.trim(),
				body: newBodyText.trim(),
				createdAt: date.toJSON(),
				archived: false,
			},
			...notes,
		]);
	}


	const deleteNote = ( id ) => {
		if (window.confirm('Delete Note ? ')) {
			const deleteNotes = notes.filter((note) => note.id !== id);
			setNotes(deleteNotes)
		}
	}

	const moveNote = ( id ) => {
		const filteredNotes = notes.map((note) => {
				if(note.id === id) {
					return {
						...note,
						archived: !note.archived,
					}
				}

				return note;
			});
			setNotes(filteredNotes);
	}

	return (
		<NotesContext.Provider value={{ activeNotes, archiveNotes, addNote, deleteNote, moveNote }}> {props.children} </NotesContext.Provider>
	)
};

export default NotesContextProvider;
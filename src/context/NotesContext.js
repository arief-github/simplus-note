import React, { createContext, useEffect, useState } from 'react';

import { getInitialData } from '../data';

export const NotesContext = createContext();
export const MaxTitle = 30;

const initialState = () => {
    return getInitialData();
};

const NotesContextProvider = (props) => {
    const [notes, setNotes] = useState(initialState());
    const [keyword, setKeyword] = useState('');

    const filteredNotes =
        keyword !== '' ?
        notes.filter(
            (note) =>
            note.title.toLowerCase().includes(keyword.toLowerCase()) ||
            note.body.toLowerCase().includes(keyword.toLowerCase()),
        ) :
        notes;

    const activeNotes = filteredNotes.filter((note) => note.archived === false);
    const archiveNotes = filteredNotes.filter((note) => note.archived === true);

    const totalNotes = notes.length;
    const availableNotes = totalNotes < MaxTitle;

    const addNote = (newTitle, newBodyText) => {
        if (availableNotes) {
            const date = new Date();

            setNotes([{
                    id: date.getTime(),
                    title: newTitle.trim(),
                    body: newBodyText.trim(),
                    createdAt: date.toJSON(),
                    archived: false,
                },
                ...notes,
            ]);
        }
    }


    const deleteNote = (id) => {
        if (window.confirm('Delete Note ? ')) {
            const deleteNotes = notes.filter((note) => note.id !== id);
            setNotes(deleteNotes)
        }
    }

    const moveNote = (id) => {
        const filteredNotes = notes.map((note) => {
            if (note.id === id) {
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
        <NotesContext.Provider
      value={{
        keyword,
        setKeyword,
        activeNotes,
        archiveNotes,
        availableNotes,
        addNote,
        moveNote,
        deleteNote,
      }}
        >
          {props.children}
        </NotesContext.Provider>
    );
};

export default NotesContextProvider;
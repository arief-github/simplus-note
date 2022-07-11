import Header from './components/Header';
import NoteLists from './components/NoteLists';
import NoteInput from './components/NoteInput';
import { Provider } from './hooks/useGlobalState';
import './App.css';

function App() {
  return (
    <Provider>
      <Header/>>
        <main className="note-app__body">
          <NoteInput/>
          <NoteLists title="Catatan Aktif"></NoteLists>
          <NoteLists title="Arsip"></NoteLists>
        </main>
    </Provider>
  );
}

export default App;

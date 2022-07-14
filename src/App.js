import { Routes, Route } from 'react-router-dom';

import NotesContextProvider from './context/NotesContext';
import PanelContextProvider from './context/PanelContext';

import Home from './pages/Home';
import Empty from './pages/NotFound';

function App() {
  return (
    <NotesContextProvider>
      <PanelContextProvider>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="*" element={ <Empty/> }/>
        </Routes>
      </PanelContextProvider>
    </NotesContextProvider>
  );
}

export default App;

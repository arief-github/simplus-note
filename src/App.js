import { Routes, Route } from 'react-router-dom';

import NotesContextProvider from './context/NotesContext';
import PanelContextProvider from './context/PanelContext';
import ModalContextProvider from './context/ModalContext';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <NotesContextProvider>
      <ModalContextProvider>
         <PanelContextProvider>
            <Routes>
              <Route path="/" element={ <Home/> } />
              <Route path="*" element={ <NotFound/> }/>
            </Routes>
        </PanelContextProvider>
      </ModalContextProvider>   
    </NotesContextProvider>
  );
}

export default App;

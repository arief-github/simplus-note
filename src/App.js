import NotesContextProvider from './context/NotesContext';
import PanelContextProvider from './context/PanelContext';

import Home from './pages/Home';

function App() {
  return (
    <NotesContextProvider>
      <PanelContextProvider>
        <Home/>
      </PanelContextProvider>
    </NotesContextProvider>
  );
}

export default App;

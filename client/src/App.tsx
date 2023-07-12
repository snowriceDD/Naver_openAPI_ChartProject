import './App.css'
import { PagesShoppingInsight } from './pages/PagesShoppingInsight'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './lib/store/store';

function App() {

  return (
    <>
      <p>TECHLABS</p>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PagesShoppingInsight/>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App

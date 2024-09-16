import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Main, Basket } from './pages';
import { Layout } from './components'
import { store } from './redux'

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/basket" element={<Basket />} />
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
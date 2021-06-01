import React from 'react'
import 'semantic-ui-css/semantic.min.css'

import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes'

import { Navbar } from './components/Navbar'
import { HeaderPage} from './components/HeaderPage'

function App() {
  const routes = useRoutes()
  return (

    <Router>
          <div className="container">
            <HeaderPage />
            <Navbar />
            {routes}
          </div>
    </Router>

  );
}

export default App;

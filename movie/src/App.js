import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomeScreen from './Pages/HomeScreen'

const App = () => {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/' element={<HomeScreen/>} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import Quiz from './pages/Quiz/Quiz'
// import Home from './pages/Home/Home'
// import Error from './pages/Error/Error'
import Data from './API/api'
import './styles/main.scss'

export default function App() {

  return ( <Data />
    // <Router>
    //   <div className='app-container'>
    //     <header> 
    //       <h1><Link to="/">Quiz Culture</Link></h1>
    //     </header>
    //     <main>
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path='/quiz/:numberOfQuestions' element={<Quiz />} />
    //         <Route path='*' element={<Error />} />
    //       </Routes>
    //     </main>
    //     <footer>
    //         <div className='footer-container'>
    //             <p>© 2026 Quiz Culture. All rights reserved.</p>
    //         </div>
    //     </footer>
    //   </div>
    // </Router>
  )
};



  



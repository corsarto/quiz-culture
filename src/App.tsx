import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Quiz from './pages/Quiz/Quiz'
import Home from './pages/Home/Home'
import Error from './pages/Error/Error'
import './styles/main.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function App() {
  const queryClient = new QueryClient();

  return ( 
  <QueryClientProvider client={queryClient}>
  
     <Router>
       <div className='app-container'>
         <header> 
           <h1><Link to="/">GQuiz</Link></h1>
         </header>
         <main>
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path='/quiz/:selectedQuestions' element={<Quiz />} />
             <Route path='*' element={<Error />} />
           </Routes>
         </main>
         <footer>
             <div className='footer-container'>
                 <p>© 2026 GQuiz. All rights reserved.</p>
             </div>
         </footer>
       </div>
     </Router>
    </QueryClientProvider>
  )
};



  



import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import Details from './Pages/Details/Details';
import {QueryClientProvider, QueryClient} from  '@tanstack/react-query'
import { Routes, Route} from 'react-router-dom'

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='details/:artId' element={<Details/>} />
          </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;

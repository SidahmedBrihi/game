
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Header,Container,Footer} from "./components/index";
import {Profile,Home} from "../src/pages/index"
import './App.css'

function App () {
     
        return(
          <Router >
             <div className="container">
             <Header/>
             <Container>
               <Routes>
                 <Route path="/" element={<Home/>} />
                 <Route path="prof" element={<Profile/>} />
               </Routes>
             </Container>
             <Footer/>
             </div>
          </Router>
        )
    
}

export default App ;
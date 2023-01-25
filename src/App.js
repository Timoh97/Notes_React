
import './App.css';
import React from "react"
import Header from "./components/Header"
// import Body from "./components/Body"
import NotesListPage from "./pages/NotesListPage"
import NotePage from "./pages/NotePage"
import NotesLIstPage from './pages/NotesListPage';


function App() {
  return (

 
    <div className="App">
  <Header />
  <NotesListPage/>
 <NotePage/>
</div>
  );
}

export default App;


import './App.css';
import Header from "./components/Header"
import Body from "./components/Body"
import NotesListPage from "./pages/NotesLIstPage"
function App() {
  return (
    <div className="App">

  <Header></Header>
  <NotesListPage></NotesListPage>
  <Body></Body>
    </div>
  );
}

export default App;

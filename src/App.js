import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';

function App() {
  return (
    <div className="App">
    <style>{'body { background-color: #F7F7F7; }'}</style>
        <NavBar ></NavBar>
        <ItemListContainer />
      <ItemDetailContainer />
       <ItemListContainer />
    </div>
  );
}

export default App;
    


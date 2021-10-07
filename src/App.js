import "./App.css";
import Routes from "./routes";
import {useHistory} from "react-router-dom";

function App() {
    const history = useHistory()

    const goToCart = (path) => {
      history.push(path)
    }

  return (
    <main className="App">
        <button onClick={()=> goToCart('/')}>HOME</button>
        <button onClick={()=> goToCart('/confra')}>CONFRATERNIZAÇÃO</button>
        <button onClick={()=> goToCart('/formatura')}>FORMATURA</button>
        <button onClick={()=> goToCart('/wedding')}>WEDDING</button>
      <Routes />
    </main>
  );
}

export default App;

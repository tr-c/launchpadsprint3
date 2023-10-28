import './App.css';
// import 'image';

import Pokemon from "./components/Pokemon"

import OshawattImg from "./image/oshw.png"

function App(){
  const pokedex = [{
    "image": OshawattImg,
    "name": "Pikachu",
    "cuteness": "8"
  },
    {
      "name": "Oshawott",
      "cuteness": "9"
    }]
  return (
    <div className="App">
      {}
      {/* header */}
      <div className="header"> 
        <h1>Pokemon</h1>

      </div>
      {/* body */}
      <div className="body">
        {pokedex.map(poke => 
          <Pokemon name={poke.name} cuteness={poke.cuteness} />
        )
        // <h4>Pokemon</h4>
        }

      </div>


    </div>
  );
}

export default App;
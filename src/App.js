import './App.css';
// import 'image';

import Pokemon from "./components/Pokemon"

import OshawattImg from "./image/better oshawott.png"
import PikachuImg from "./image/better pikachu.png"

function App(){
  const pokedex = [{
    "name": "Pikachu",
    "cuteness": "8",
    "image": PikachuImg
  },
    {
      "name": "Oshawott",
      "cuteness": "9",
      "image": OshawattImg
    },]
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
          <Pokemon name={poke.name} cuteness={poke.cuteness} image={poke.image} />
        )
        // <h4>Pokemon</h4>
        }

      </div>


    </div>
  );
}

export default App;
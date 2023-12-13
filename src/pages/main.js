import { useState } from "react";
import Header from "@items/header";
import Contents from "@items/main/contents";
import pokeData from "@json/pokemon.json";

const Main = () => {

    const [pokemon, setPokemon] = useState(pokeData);

    return (
        <div>
            <Header />
            
            {
                pokemon.length > 0 && <Contents pokemon={pokemon} setPokemon={setPokemon} />
            }
        </div>
    );
}

export default Main;
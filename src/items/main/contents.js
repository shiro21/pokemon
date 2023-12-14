import Pokemon from "@items/card/pokemon.js";
import styles from "@styles/contents.module.scss";
import UpDown from "@styles/icons/icon_dropdown.png";
import Down from "@styles/icons/down.svg";
import { useState } from "react";

const Contents = ({ pokemon, setPokemon }) => {

    // 검색 오픈
    const [searchOpen, setSearchOpen] = useState(false);
    // 도감번호 순서
    const [select, setSelect] = useState("도감번호 순서");
    // console.log(pokemon)

    const searchSelect = (list) => {
        setSearchOpen(false);
        setSelect(list);

        if (list === "도감번호 순서") {
            setPokemon(pokemon.sort((a, b) => a.id - b.id));
        } else if (list === "도감번호 반대순서") {
            setPokemon(pokemon.sort((a, b) => b.id - a.id));
        } else if (list === "무거운 순서") {
            let num = 0;
            for (const item of pokemon) {
                // pokemon[num].weight = item.weight.replace(regex, "")
                pokemon[num].weight = item.weight.slice(0, item.weight.length - 3);
                num++
            }
            setPokemon(pokemon.sort((a, b) => b.weight - a.weight));
        } else if (list === "가벼운 순서") {
            let num = 0;
            for (const item of pokemon) {
                // pokemon[num].weight = item.weight.replace(regex, "")
                pokemon[num].weight = item.weight.slice(0, item.weight.length - 3);
                num++
            }
            setPokemon(pokemon.sort((a, b) => a.weight - b.weight));
        } else if (list === "키 큰 순서") {
            let num = 0;
            for (const item of pokemon) {
                pokemon[num].height = item.height.slice(0, item.height.length - 2);
                num++
            }
            setPokemon(pokemon.sort((a, b) => b.height - a.height));
        } else if (list === "키 작은 순서") {
            let num = 0;
            for (const item of pokemon) {
                pokemon[num].height = item.height.slice(0, item.height.length - 2);
                num++
            }
            setPokemon(pokemon.sort((a, b) => a.height - b.height));
        }
        
    }
    // console.log(pokemon)
    
    return (
        <section id={styles.pokemon_wrap}>
            <div className={styles.pokemon_sequence_list_wrap}>
                <div className={styles.sequence_list_select}>
                    <div className={styles.select_image}>
                        <img src={UpDown} alt="Up & Down" />
                    </div>
                    <div className={styles.select_title} onClick={() => setSearchOpen(prev => !prev)}>
                        {select}
                        <span>
                            <img src={Down} alt="Up & Down" />
                        </span>
                    </div>
                    {
                        searchOpen && <ul>
                            <li onClick={() => searchSelect("도감번호 순서")}>도감번호 순서</li>
                            <li onClick={() => searchSelect("도감번호 반대순서")}>도감번호 반대순서</li>
                            <li onClick={() => searchSelect("무거운 순서")}>무거운 순서</li>
                            <li onClick={() => searchSelect("가벼운 순서")}>가벼운 순서</li>
                            <li onClick={() => searchSelect("키 큰 순서")}>키 큰 순서</li>
                            <li onClick={() => searchSelect("키 작은 순서")}>키 작은 순서</li>
                        </ul>
                    }
                </div>
                <ul className={styles.pokemon_list_wrap}>
                    {
                        pokemon.length > 0 && pokemon.map((item, index) => (
                            <li key={item.id}>
                                <Pokemon pokemon={item} />
                            </li>
                        ))
                    }
                </ul>
            </div>
            
        </section>
    );
}

export default Contents;
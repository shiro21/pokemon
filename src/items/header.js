import styles from "@styles/header.module.scss";
import Boll from "@styles/icons/ball.png";
import Search from "@styles/icons/search.png";
import Down from "@styles/icons/icon_down.png";
import { useState } from "react";
import pokeData from "@json/data.json";
import pokemon from "@json/pokemon.json";

const Header = ({ setPokemon }) => {

    // 검색 오픈
    const [searchOpen, setSearchOpen] = useState(false);
    // 특성 | 지방
    const [charNum, setCharNum] = useState(0);
    // 포켓몬 검색
    const [pokeSearch, setPokeSearch] = useState("");
    // 검색 조건
    const [pokeCondition, setPokeCondition] = useState("이름");
    const condition = [
        "이름",
        "약점"
    ]
    // 포켓몬 넘버
    const [pokeNumber, setPokeNumber] = useState([1, 151]);
    // 타입
    const [pokeType, setPokeType] = useState("");

    const charData = (num) => {
        switch (num) {
            case 1 :
                if (charNum === 0) setCharNum(1); else setCharNum(0);
            break;

            case 2 :
                if (charNum === 0) setCharNum(2); else setCharNum(0);
            break;

            default :
            break;
        }
    }

    const pokeSearchBtn = async () => {

        let search1;

        if (pokeNumber[0] < 1 || pokeNumber[1] > 151 || pokeNumber[0] > pokeNumber[1]) {
            return alert("도감번호를 확인해주세요.")
        } else if (pokeType === "") {
            return alert("타입을 선택해주세요.");
        }

        if (pokeSearch === "") {
            search1 = pokemon;
        } else {
            search1 = await pokemon.filter(poke => poke.name.includes(pokeSearch));
        }
        
        const search2 = await search1.filter(poke => poke.id >= pokeNumber[0] && poke.id <= pokeNumber[1]);
        
        const search3 = await search2.filter(poke => poke.type.includes(pokeType));

        setPokemon(search3);
        setSearchOpen(false);

    }

    const conditionSearch = async () => {

        let search1;

        if (pokeCondition === "이름") {
            search1 = await pokemon
        } else if (pokeCondition === "약점") {
            search1 = await pokemon.filter(poke => poke.weaknesses.includes(pokeType));
        }
        const search2 = await search1.filter(poke => poke.id >= pokeNumber[0] && poke.id <= pokeNumber[1]);
        
        setPokemon(search2);
        setSearchOpen(false);
    }

    const conditionInitial = () => {
        setPokeCondition("이름");
        setPokeSearch("");
        setCharNum(0);
        setPokeNumber([1, 151]);
        setPokeType("");
    }

    return (
        <header>
            <div id={styles.header}>
                <div className="row_col">
                    <h2 className={`row ${styles.main_title}`}>
                        <img src={Boll} alt="로고" />
                        <em>포켓몬 도감</em>
                    </h2>
                    <div className={styles.main_input}>
                        <input type="text" value={pokeSearch} onChange={(e) => setPokeSearch(e.target.value)} placeholder="포켓몬 이름 또는 설명, 특성 키워드를 입력해주세요." />
                        <button onClick={pokeSearchBtn}>
                            <img src={Search} alt="검색" />
                            <i className="ir_pm">검색</i>
                        </button>
                    </div>
                </div>
            </div>

            {
                searchOpen && (
                    <div className={styles.main_scroll_wrap}>
                        {/* 조건 */}
                        <div className={`${styles.main_characteristic} mb_1`}>
                            <div className={styles.main_characteristic_title}>조건</div>
                            <div className={styles.main_list_title} onClick={() => charData(1)}>
                                <div className={styles.main_list_name}>
                                    {pokeCondition}
                                </div>
                                <img src={Down} alt="down" />
                            </div>
                            {
                                charNum === 1 && <ul className={styles.charList}>
                                    {/* <div className={styles.char_search}>
                                        <input type="text" placeholder="검색어를 입력해주세요." />
                                    </div> */}
                                    {
                                        condition.map((item, index) => (
                                            <li key={index} onClick={() => setPokeCondition(item)}>{item}</li>
                                        ))
                                    }
                                </ul>
                            }
                        </div>


                        {/* 지방 */}
                        <div className={`${styles.main_characteristic} mb_1`}>
                            <div className={styles.main_characteristic_title}>지방</div>
                            <div className={styles.main_list_title} onClick={() => charData(2)}>
                                <div className={styles.main_list_name}>
                                    전체
                                </div>
                                <img src={Down} alt="down" />
                            </div>
                            {
                                charNum === 2 && <ul className={styles.charList}>
                                    <li>전체</li>
                                    <li>전체</li>
                                    <li>전체</li>
                                    <li>전체</li>
                                    <li>전체</li>
                                    <li>전체</li>
                                </ul>
                            }
                        </div>


                        {/* 도감번호 */}
                        <div className={`${styles.main_characteristic} mb_1`}>
                            <div className={styles.main_characteristic_title}>도감번호</div>
                            <div className={styles.main_list_title}>
                                <input type="number" value={pokeNumber[0]} onChange={(e) => setPokeNumber([e.target.value, pokeNumber[1]])} placeholder="1" />
                                -
                                <input type="number" value={pokeNumber[1]} onChange={(e) => setPokeNumber([pokeNumber[0], e.target.value])} placeholder="151" />
                            </div>
                        </div>


                        {/* 타입 */}
                        <div className={`${styles.main_characteristic} mb_3`}>
                            <div className={styles.main_characteristic_title}>타입</div>
                            <ul className={styles.main_list_type}>
                                {
                                    pokeData.length > 0 && pokeData.map(item => (
                                        <li key={item.id} onClick={() => setPokeType(item.type)}>
                                            <div className={`${styles.list_detail} ${pokeType === item.type ? styles.borderLine : ""}`}>
                                                <img src={`${process.env.PUBLIC_URL}/imgs/${item.img}`} alt={item.type} />
                                                {item.type}
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>


                        {/* 버튼 */}
                        <div className={styles.main_characteristic}>
                            <div className={styles.main_button_wrap}>
                                <button onClick={conditionSearch}>검색</button>
                                <button onClick={conditionInitial}>초기화</button>
                            </div>
                        </div>
                    </div>
                )
            }

            <div className={styles.main_detail} onClick={() => setSearchOpen(prev => !prev)}>
                <p>상세검색</p>
            </div>
        </header>
    );
}

export default Header;
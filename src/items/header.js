import styles from "@styles/header.module.scss";
import Boll from "@styles/icons/ball.png";
import Search from "@styles/icons/search.png";
import Down from "@styles/icons/icon_down.png";
import { useState } from "react";
import pokeData from "@json/data.json";

const Header = () => {

    // 검색 오픈
    const [searchOpen, setSearchOpen] = useState(false);
    // 특성 | 지방
    const [charNum, setCharNum] = useState(0);

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
    return (
        <header>
            <div id={styles.header}>
                <div className="row_col">
                    <h2 className={`row ${styles.main_title}`}>
                        <img src={Boll} alt="로고" />
                        <em>포켓몬 도감</em>
                    </h2>
                    <div className={styles.main_input}>
                        <input type="text" placeholder="포켓몬 이름 또는 설명, 특성 키워드를 입력해주세요." />
                        <button>
                            <img src={Search} alt="검색" />
                            <i className="ir_pm">검색</i>
                        </button>
                    </div>
                </div>
            </div>

            {
                searchOpen && (
                    <div className={styles.main_scroll_wrap}>
                        {/* 특성 */}
                        <div className={`${styles.main_characteristic} mb_1`}>
                            <div className={styles.main_characteristic_title}>특성</div>
                            <div className={styles.main_list_title} onClick={() => charData(1)}>
                                <div className={styles.main_list_name}>
                                    전체
                                </div>
                                <img src={Down} alt="down" />
                            </div>
                            {
                                charNum === 1 && <ul className={styles.charList}>
                                    <div className={styles.char_search}>
                                        <input type="text" placeholder="검색어를 입력해주세요." />
                                    </div>
                                    <li>전체</li>
                                    <li>전체</li>
                                    <li>전체</li>
                                    <li>전체</li>
                                    <li>전체</li>
                                    <li>전체</li>
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
                                <input type="number" placeholder="1" />
                                -
                                <input type="number" placeholder="1010" />
                            </div>
                        </div>


                        {/* 타입 */}
                        <div className={`${styles.main_characteristic} mb_3`}>
                            <div className={styles.main_characteristic_title}>타입</div>
                            <ul className={styles.main_list_type}>
                                {
                                    pokeData.length > 0 && pokeData.map(item => (
                                        <li key={item.id}>
                                            <div className={styles.list_detail}>
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
                                <button>검색</button>
                                <button>초기화</button>
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
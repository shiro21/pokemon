import stylesHeader from "@styles/header.module.scss";
import styles from "@styles/view.module.scss";
import LeftRight from "@styles/icons/icon_prev_book.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Regular from "@styles/icons/regular.png";
import data from "@json/pokemon.json";

const Header = ({ view }) => {

    const navigation = useNavigate();

    return (
        <header id={stylesHeader.view_header}>
            <div className={stylesHeader.view_prev_wrap} onClick={() => navigation(`/view/${String(Number(view.num) - 1).padStart(3, "0") === "000" ? "151" : String(Number(view.num) - 1).padStart(3, "0")}`)}>
                <img src={LeftRight} alt="왼쪽" />
                <div className={stylesHeader.view_prev_name}>
                    No.{
                        String(Number(view.num) - 1).padStart(3, "0") === "000" ? "151" : String(Number(view.num) - 1).padStart(3, "0")
                    }
                </div>
            </div>
            <div className={stylesHeader.view_next_wrap} onClick={() => navigation(`/view/${String(Number(view.num) + 1).padStart(3, "0") === "152" ? "001" : String(Number(view.num) + 1).padStart(3, "0")}`)}>
                <div className={stylesHeader.view_prev_name}>
                    No.{
                        String(Number(view.num) + 1).padStart(3, "0") === "152" ? "001" : String(Number(view.num) + 1).padStart(3, "0")
                    }
                </div>
                <img style={{transform: "rotate(180deg)"}} src={LeftRight} alt="왼쪽" />
            </div>
        </header>
    );
}

const View = () => {

    const location = useLocation();
    const params = useParams();
    const [view, setView] = useState(null);

    useEffect(() => {
        if (location.state) {
            setView(location.state);
        } else {
            setView(data[Number(params.id) - 1])
        }
    }, [location])

    return (
        <>
            {
                view && <div className={styles.view_wrap}>
                    <Header view={view} />

                    <section className={styles.view_contents_wrap}>
                        <div className={styles.view_contents}>
                            <img src={Regular} alt="모서리" />
                            <div className={styles.view_image_wrap}>
                                <img src={view.img} />
                            </div>
                            <div className={styles.view_information_wrap}>
                                <h6>No.{view.num}</h6>
                                <h5>{view.name}</h5>
                            </div>

                            <div className={styles.view_qualification_wrap}>
                                <div className={styles.view_qualification_type}>
                                    <h6>번호</h6>
                                    <p>No.{view.num}</p>
                                </div>
                                <div className={styles.view_qualification_type}>
                                    <h6>타입</h6>
                                    <p>{view.type}</p>
                                </div>
                                <div className={styles.view_qualification_type}>
                                    <h6>키</h6>
                                    <p>{view.height}</p>
                                </div>
                                <div className={styles.view_qualification_type}>
                                    <h6>캔디</h6>
                                    <p>{view.candy}</p>
                                </div>
                                <div className={styles.view_qualification_type}>
                                    <h6>약점</h6>
                                    <p>{
                                        view.weaknesses.length > 0 && view.weaknesses.map((item, index) => (
                                            <span key={index}>{item}</span>
                                        ))
                                    }</p>
                                </div>
                                <div className={styles.view_qualification_type}>
                                    <h6>무게</h6>
                                    <p>{view.weight}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            }
        </>
    );
}

export default View;
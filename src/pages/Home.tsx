import {Header} from "../components/Header.tsx"
import styles from "./Home.module.css"
export function Home() {
    return (
        <div>
            <Header />
            <br/>
            <div className={styles.buttons}>
                <a href="./responsiveness">Responsividade</a>
                <a href="./components">Componentes</a>
                <a href="./page3">page3</a>
            </div> 
        </div>
    )
}
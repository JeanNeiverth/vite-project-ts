import {Header} from "../components/Header.tsx"
import {Column} from "../components/Column.tsx"
// import {Postit} from "../components/Postit"
import styles from "./Components.module.css"

export interface IPostit {
    title:string,
    text:string,
}

// interface PostitArray:Postit[]
// interface Postit2Array:PostitArray[]
type PostitArray = IPostit[][]
// const [columns, setColumns] = useState([
const columns:PostitArray = [
    [
        {title:"title1", text:"contentdfsddc"},
        {title:"title2", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iure praesentium mollitia ab aperiam maxime cum dicta tempore rem quis, commodi ratione unde doloribus veritatis? Modi laboriosam adipisci maiores eaque."},
        {title:"title3", text:"contvft11"}
    ],
    [
        {title:"title4",text:"contgb"},
        {title:"title5",text:"content11"},
        {title:"title6",text:"content11"}
    ],
    [
        {title:"title7",text:"content11"},
        {title:"title8",text:"coa"},
        {title:"title9",text:"contensdv"},
        {title:"title10",text:"content11"}
    ]
]

export function Components() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                {columns.map(content_ => {
                    return (
                        <Column
                            content = {content_} 
                        />
                    )
                })}
            </div>
        </div>
    )
}
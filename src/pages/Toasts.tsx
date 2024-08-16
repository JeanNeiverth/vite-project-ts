import { Header } from "../components/Header";
import styles from "./Toasts.module.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Toasts() {

    function callToast1() {
        toast("Toast 1!", {
            position:"top-left",
            autoClose:2000,
            theme:"light",
            pauseOnHover:true,
        })
    }

    function callToast2() {
        toast("Toast 2!", {
            position:"top-right",
            autoClose:3000,
            theme:"dark",
            pauseOnHover:false,
            hideProgressBar:true,
        })
    }

    function callToast3() {
        toast("Toast 3! Warning!", {
            position:"top-center",
            autoClose:3000,
            type:"warning",
            theme:"colored",
            pauseOnHover:true,
            hideProgressBar:true,
        })
    }

    function callToast4() {
        toast("Toast 4!")
    }

    return (
        <div>
            <Header/>
            <div className={styles.mainDiv}>
                <button onClick={callToast1}>Toast1</button>
                <button onClick={callToast2}>Toast2</button>
                <button onClick={callToast3}>Toast3</button>
                <button onClick={callToast4}>Toast4</button>
            </div>
        <ToastContainer />
        </div>
    )
}
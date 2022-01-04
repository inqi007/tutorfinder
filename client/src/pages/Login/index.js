import React from "react"
import styles from "./index.module.css"
import Navbar from "../../components/Navbar/navbar"


const Login = () => {
    return (
        <>
            < Navbar />
            <div className={styles.login}></div>
        </>
    )
}

export default Login
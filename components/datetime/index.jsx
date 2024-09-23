"use client"

import styles from "./datetime.module.scss";
import { useEffect, useState } from "react";

export default function DateTime({ }) {

    const [isClient, setIsClient] = useState(false);
    const currentTime = new Date().getHours().toString() + ":" + new Date().getMinutes().toString() + ":" + new Date().getSeconds().toString()
    const [horaAtual, setHoraAtual] = useState(currentTime);
    const currentDate = new Date();
    const currentDateFormat = new Intl.DateTimeFormat('pt-BR', { day: "numeric", month: "short", year: "numeric" }).format(currentDate)

    function getCurrentTime() {
        const now = new Date();
        const timeFormatter = new Intl.DateTimeFormat('pt-BR', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false,
        });
        return timeFormatter.format(now);
    }

    const horas = setInterval(() => {
        setHoraAtual(getCurrentTime())
       
    }, 1000)
   

    useEffect(() => {
        setIsClient(true)
    }, [])

    // console.log(isClient)

    return (
        <div className={styles.containerData}>
            <p className={styles.horas}>
                <span className="icone-relogio"></span>
                <span className={`${styles.horas_text} digital-numbers`}>{ !isClient?'': horaAtual.toString()}</span>
            </p>
            <p className={styles.data}>
                <span className="icone-calendar"></span>
                <span className={`${styles.data_text} digital-numbers`}>{ !isClient?'': currentDateFormat.replace(" de ", "-").replace(". de ", "-")}</span>
            </p>
        </div>
    )
}
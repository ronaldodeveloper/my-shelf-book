

import styles from "./buttom.module.scss";

export default function Button({ variante = 'orange', tamanho= 'normal', outline = false, children, ...buttonProps}) {

    return (
        <button className={`${styles.button} ${outline && styles.outline} ${styles[variante]} ${tamanho !== 'normal' ? styles[tamanho] : ''} ${buttonProps.className ? buttonProps.className : ''}`}>{children}</button>
    )
}
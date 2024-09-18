
"use client"

import Card from "@/components/card";
import Button from "@/components/button";
import styles from "./examples.module.scss";
import { useState, useRef } from "react";
import Input from './../../components/input/index';

export default function Examples() {

    const [isCopyed, setIscopyed] = useState(false); 

    const icones = [
        "icone-arrow-left",
        "icone-search-menu",
        "icone-contribute", 
        "icone-book",
        "icone-user",
        "icone-heart-vazio",
        "icone-closed",
        "icone-headphones",
        "icone-star",
        "icone-map",
        "icone-checked",
        "icone-share",
        "icone-notes",
        "icone-review",
        "icone-edit",
        "icone-heart",
        "icone-calendar",
        "icone-relogio",
        "icone-translate",
        "icone-search",
        "icone-bookshelf",
        "icone-home",
        "icone-olho-fechado"  
    ];

    
    const copyTextSelected = (text, id) => {

      navigator.clipboard.writeText(text)
        .then(() => {
          setCopied(id); 
          setTimeout(() => {
            setCopied(null)
          }, 2000); 
        })
        .catch((err) => {
          console.error('Falha ao copiar!', err);
        });
    };

    
    return (
        <main className={styles.main}>
            <div className={styles.main_content}>
                <h2 className={styles.title}>Icones</h2>
                <ul className={styles.lista}>
                    {
                        icones.map((icone, ind) => (
                            <li key={`item-${ind}`} className={styles.lista_item} onClick={() => copyTextSelected(icone, ind)}>
                                <span className={styles.lista_item_title}>{icone}</span>
                                <span className={icone}></span>
                            </li>
                        ))
                    }
                </ul>
                <h2 className={styles.title}>Componente Card</h2>
                <div className={styles.container}>
                   <Card title={"Titulo"}  author={"Author"} year={" 2024"}  ratings={"4.6"} image={"image-book-1.jpg"}/>
                </div>
                <h2 className={styles.title}>Componente Button</h2>
                <div className={styles.container}>
                 <Button tamanho="full">Login</Button>
                 <Button tamanho="normal" variante={"green"}>Login</Button>
                 <Button tamanho="normal" outline={true}>Read</Button>
                 <Button tamanho="normal" variante="gray">Borrowed</Button>
                 <Button tamanho="normal" variante="darkgray">Borrowed</Button>
                </div>
                <h2 className={styles.title}>Componente Input</h2>
                <div className={styles.container}>
                    <Input typeText={"text"} labelText={"Nome Completo"} placeholderText={"Nome Completo"} nameText={"nome"}/>
                    <Input typeText={"password"} labelText={"Password"} placeholderText={"Password"} nameText={"password"}/>
                </div>
            </div>
        </main>
    );
}
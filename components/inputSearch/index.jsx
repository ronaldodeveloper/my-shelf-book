"use client"

import styles from "./search.module.scss";
import { useState, useEffect} from "react";

export default function Search({books, getBookSelected}) {


    const [selectOption, setSelectOption] = useState("all");
    const [searchText, setSearchText] = useState('');

    const filterBooks = books.filter((book) => {
        if (selectOption == "all" || selectOption == '' || selectOption == undefined) {

            return (
                String(book.title).toLocaleLowerCase().includes(String(searchText).toLocaleLowerCase()) ||
                String(book.author).toLocaleLowerCase().includes(String(searchText).toLocaleLowerCase()) ||
                String(book.text).toLocaleLowerCase().includes(String(searchText).toLocaleLowerCase()) ||
                String(book.category).toLocaleLowerCase().includes(String(searchText).toLocaleLowerCase())
            )

        } else {
            return String(book[selectOption]).toLocaleLowerCase().includes(String(searchText).toLocaleLowerCase())
        }
    });
    

    useEffect(()=>{
       getBookSelected(filterBooks, searchText)
    },[searchText])

    // console.log(filterBooks)

    
    return (
        <div className={`${styles.SearchContainer}`}>
            <select name="" className={`${styles.selectElement}`} onChange={(option) => { setSelectOption(option.target.value); setSearchText('') }}>
                {
                    ["All", "Title", "Author", "Text", "Category"].map((option, index) => <option key={index} value={option.toLowerCase()}>{option}</option>)
                }
            </select>
            <input type={"search"} placeholder={"Search"} value={searchText} className={`${styles.inputElement} ${String(searchText).length > 0 && styles.clesedIcon} `} onChange={(text) => setSearchText(text.target.value)} />
        </div>
    )
}
import Image from "next/image";
import styles from "./page.module.scss";
import { books } from "../data/books.js"
import Card from "@/components/card";
// import "../assets/icomoon.css";

export default function Home() {

  return ( 
    <h2>Home page</h2>
    
    // <ul>
    //  {
    //   books && books.map((book) => (
    //     <Card key={book.id * book.title.length} title={book.title}  author={book.author} year={book.publishDate.year}  ratings={book.ratings} image={book.urlImage}/>
    //   ))
    //  }
    // </ul>
  );
}

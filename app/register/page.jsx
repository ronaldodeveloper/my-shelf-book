"use client"

import styles from "./register.module.scss";
import  Image from 'next/image';
import Input from '../../components/input';
import Link from "next/link";
import Button from "@/components/button";

export default function Register() {

    
    return (
        <section className={styles.main}>
            <div className={styles.main_content}>
                <Image src="/image/logo.svg" alt="image login" width={150} height={92} priority className={styles.logo}/>
                <h1 className={styles.title}>Registration</h1>
                <p className={styles.subtitle}>For Both Staff & Students</p>
                <form className={styles.form}>
                    <Input labelText="Your Name" typeText="text" placeholderText="Your Name" nameText="name"/>
                    <Input labelText="Email" typeText="email" placeholderText="Enter your Email" nameText="email"/>
                    <Input labelText="Password" typeText="password" placeholderText="Password" nameText="password"/>
                    <Input labelText="Confirm Password" typeText="password" placeholderText="Confirm Password" nameText="password-confirm"/>
                    <div className={styles.rememberContainer}>
                        <label htmlFor="remember" className={styles.inputCheckboxContent}>
                            <input type="checkbox" name="remember" className={styles.inputCheckbox} id="remember"/>
                            Remember me
                        </label>
                        <Link href="/forgot-password" className={styles.link}>Forgot password?</Link>
                    </div>
                    <Button tamanho="full" variante="orange">Register</Button>
                </form>
                
                <p className={styles.registerContainer}>
                    <span>Already a User? <Link href="/login" className={styles.link}>Login now </Link></span>
                    <span>Use as Guest </span>
                </p>
                
                    
            </div>
        </section>
    );
}
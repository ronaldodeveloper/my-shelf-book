"use client"

import styles from "./login.module.scss";
import  Image from 'next/image';
import Input from '../../components/input';
import Link from "next/link";
import Button from "@/components/button";

export default function Login() {

    
    return (
        <section className={styles.main}>
            <div className={styles.main_content}>
                <Image src="/image/logo.svg" alt="image login" width={150} height={92} priority className={styles.logo}/>

                <h1 className={styles.title}>Welcome Back !</h1>
                <p className={styles.subtitle}>Sign in to continue to yourDigital Library</p>

                <form className={styles.form}>
                    <Input labelText="Email" typeText="email" placeholderText="Enter your email" nameText="email"/>
                    <Input labelText="Password" typeText="password" placeholderText="Password" nameText="password"/>
                    <div className={styles.rememberContainer}>
                        <label htmlFor="remember" className={styles.inputCheckboxContent}>
                            <input type="checkbox" name="remember" className={styles.inputCheckbox} id="remember"/>
                            Remember me
                        </label>
                        <Link href="/register" className={styles.link}>Forgot password?</Link>
                    </div>
                    <Button tamanho="full" variante="orange">Login</Button>
                </form>
                
                <p className={styles.registerContainer}>
                    <span>New User? <Link href="/register" className={styles.link}>Register Here</Link></span>
                    <span>Use as Guest </span>
                </p>
                
                    
            </div>
        </section>
    );
}
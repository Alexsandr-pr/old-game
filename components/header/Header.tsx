"use client"



import { navLinks } from "@/constans";
import Icon from "../ui/Icon";
import "./header.scss";
import Link from "next/link";
import { useEffect, useState } from "react";


const Header = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const switchToLight = () => setTheme('light');
    const switchToDark = () => setTheme('dark');

    return (
        <header className="header">
            <div className="header__container container">
                <Link className="header__logo" href="/">
                    <img src="/images/header/logo.svg" alt="Logo" />
                </Link>
                <nav className="header__nav">
                    <ul className="header__menu">
                        {
                            navLinks.map(link => (
                                <li key={link.route} className="header__item">
                                    <Link className="header__link" href={link.route}>
                                        <Icon id={link.imgURL} color="--nav-icon" size={22}/>
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                
                <div className="header__switch">
                    <div className="switch-theme">
                        <button className="switch-theme__block" onClick={switchToLight}>
                            <img src="/images/header/light.svg" alt="Light Theme" />
                        </button>
                        <button className="switch-theme__block" onClick={switchToDark}>
                            <img src="/images/header/dark.svg" alt="Dark Theme" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
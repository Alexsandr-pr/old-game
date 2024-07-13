import Link from 'next/link';
import React from 'react';

import "./footer.scss";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container _container">
                <div className="footer__body">
                    <p className='link'>© 2023-2024</p>
                </div>
                <ul className="footer__content footer-content">
                    <li className="footer-content__item">
                        <Link href={"/"} className="footer-content__link link">
                            О нас
                        </Link>
                    </li>
                    <li className="footer-content__item">
                        <Link href={"/"} className="footer-content__link link">
                            Связаться с нами
                        </Link>
                    </li>
                    <li className="footer-content__item">
                        <Link href={"/"} className="footer-content__link  link">
                            Политика конфиденциальности
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
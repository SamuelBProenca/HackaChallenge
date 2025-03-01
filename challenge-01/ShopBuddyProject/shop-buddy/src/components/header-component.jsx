'use client';
import '@/styles/header-style.css';
import { LogoSVG } from '@/public/logo-svg';

export function HeaderComponent() {
    return (
        <div className="header-container">
            <div className="header">
                <div className="header__logo">
                    <LogoSVG />
                </div>
                <div className="header__title">
                    <h1>Shop Buddy</h1>
                </div>
            </div>
        </div>
    );
}

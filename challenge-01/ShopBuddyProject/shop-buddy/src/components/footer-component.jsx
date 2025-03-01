'use client';
import '@/styles/footer-style.css';

export function FooterComponent() {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="footer__links">
                    <a href="/sobre">Sobre</a>
                    <a href="/contato">Contato</a>
                    <a href="/privacidade">Política de Privacidade</a>
                </div>
                <div className="footer__copyright">
                    &copy; {new Date().getFullYear()} Shop Buddy. Todos os direitos reservados.
                </div>
            </div>
        </div>
    );
}

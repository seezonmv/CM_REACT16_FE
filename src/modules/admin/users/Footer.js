import React from 'react'

const Footer = () => {
    const date = (new Date());
    return (
    <div className="hero-foot">
        <footer className="footer">
            <div className="content has-text-centered">
                <p className="has-text-centered">
                    <strong>Admin</strong> desarrollado en React JS &copy; {date.getFullYear()}
                </p>
            </div>
        </footer>
    </div>
    );
}
export default Footer;
import React from "react";

const Footer = ( ) => {
    const year = new Date().getFullYear();
return (
    <>
    <footer className="fixed-bottom w-100 bg-light text-center">
    <p>© {year} Your Website. All Rights Reserved | Terms and Condition </p>
    </footer>
    </>
    );
};
export default Footer;
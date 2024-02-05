import React from "react";

const Footer = ( ) => {
    const year = new Date().getFullYear();
return (
    <>
    <div className="content-container" style={{ marginBottom: "100px" }}>
    <footer className="fixed-bottom w-100 bg-light text-center">
    <p>© {year} Your Website. All Rights Reserved | Terms and Condition </p>
    </footer></div>
    </>
    );
};
export default Footer;
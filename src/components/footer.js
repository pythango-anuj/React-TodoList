import React from 'react'

export default function Footer() {
    let footerStyle ={
        position:"relative",
        bottom:"0",
        top:"42vh",
        width: "100%",
        marginTop: "auto"
    }
    return (
        <footer className="bg-dark text-light py-2" style={footerStyle}>
            <p className="text-center">
                Coptright @copy; Mytodolist.com
            </p>
        </footer>
    )
}

import React from 'react'

export default function Footer() {
    let FooterStyle = {
        padding: "10px"
    }
    return (
        <footer className="bg-dark text-light my-3" style={FooterStyle}>
            <p className="text-center my-3">Copyrights &copy; MyTodoList.com</p>
        </footer>
    )
}

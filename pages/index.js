import React from 'react'
import Link from '../src/components/Link'

function GlobalStyle() {
    return (
        <style global jsx>
            {`            
            body {
                font-family: sans-serif;
            }
            `}
        </style>
    )
}

function Title({ children, as }) {
    const Tag = as;
    return ( 
        <React.Fragment>
        <h2>
            {children}
        </h2>
        <style jsx>{`
            ${Tag} {
                color: red;
                font-family: sans-serif;
            }
            `}
        </style>
        </React.Fragment>
    )
}

export default function HomePage() {
    return (
        <div>
            <GlobalStyle />
            <Title as="h2">Alura Cases - Home</Title>
            <Link href="/faq">
            Ir para FAQ
            </Link>
        </div>
    )
}
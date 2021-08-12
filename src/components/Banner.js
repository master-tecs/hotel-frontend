import React from 'react'

function Banner({title, subtile, children}) {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div></div>
            <p>{subtile}</p>
            {children}
        </div>
    )
}

export default Banner

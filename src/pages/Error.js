import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Hero from '../components/Hero'

function Error() {
    return <Hero>
        <Banner title="404" subtile="page not found">
            <Link to='/' className="btn-primary">
                Return Home
            </Link>
        </Banner>
    </Hero>
}

export default Error

import React from 'react'
import { FaBeer, FaCocktail, FaHiking, FaShuttleVan } from 'react-icons/fa'
import Title from './Title'

function Services() {
    const services = [
        {
            icon: <FaCocktail />,
            title: "Free Coctail",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, delectus?",
        },
        {
            icon: <FaHiking />,
            title: "Endless Hiking",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, delectus?",
        },
        {
            icon: <FaShuttleVan />,
            title: "Free Shuttlen",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, delectus?",
        },
        {
            icon: <FaBeer />,
            title: "Strongest Beer",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, delectus?",
        },
    ]
    return (
        <section className="services">
            <Title title="services" />
            <div className="services-center">
                {
                    services.map((service, index) => {
                        return <article key={index} className="service">
                            <span>{service.icon}</span>
                            <h6>{service.title}</h6>
                            <p>{service.info}</p>
                        </article>
                    })
                }
            </div>
        </section>
    )
}

export default Services

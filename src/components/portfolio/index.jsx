import "./style.scss"
import multiShoop from "../../assets/images/multiShoop.png"
import kardone from "../../assets/images/kardoneShoop.png"
import memoryGame from "../../assets/images/memoryGame.png"
import school from "../../assets/images/school.png"
import lessons from "../../assets/images/lessons.png"


const Portfolio = () => {

    const data = [

        {
            id: 1,
            img: multiShoop,
            title: 'Multi Shopp',
            github: "https://github.com/SerjAyvazyan-2000/Multi-Shoop",
            demo: 'https://serjayvazyan-2000.github.io/Multi-Shoop'
        },
        {
            id: 2,
            img: memoryGame,
            title: 'Memory Game',
            github: "https://github.com/SerjAyvazyan-2000/Memory-Game",
            demo: 'https://serjayvazyan-2000.github.io/Memory-Game'
        },
        {
            id: 3,
            img: school,
            title: "School",
            github: "https://github.com/SerjAyvazyan-2000/Admin-School",
            demo: 'https://serjayvazyan-2000.github.io/Admin-School'
        },

        {
            id: 4,
            img: kardone,
            title: 'Kardone Shopp',
            github: "https://github.com/SerjAyvazyan-2000/Kardone-Shoop",
            demo: 'https://serjayvazyan-2000.github.io/Kardone-Shoop',
            process: "Is In Process"
        }
    ]

    return <section id=" portfolio">
        <div className="G-container">
            <div className="portfolio-box">
                <h5>My Resent Work</h5>
                <h2>Porfolio</h2>

                <div className=" portfolio-contaner">
                    {data.map((item, index) => {
                        return <article key={item.id} className="portfolio-item">
                            <div className="portfolio-item-image">
                                <img src={item.img} alt="multiShoop"/>
                            </div>
                            <h3>{item.title}</h3>
                            {item.process ? <p>{item.process}</p> : null}
                            <div className="portfolio-item-cta">
                                <a href={item.github} className="btn">GitHub</a>
                                <a href={item.demo} className="btn btn-primaly" target="_blank">Live Demo</a>
                            </div>
                        </article>
                    })}


                </div>
            </div>

        </div>

    </section>
}

export default Portfolio
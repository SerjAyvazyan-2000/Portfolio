import "./style.scss"
import multiShoop from "../../assets/images/multiShoop.png"
import kardone from "../../assets/images/kardoneShoop.png"
import memoryGame from "../../assets/images/memoryGame.png"
import school from "../../assets/images/school.png"
import AppleDoctor from "../../assets/images/Снимок экрана 2023-06-03 000508.png"
import creativeTim from "../../assets/images/creativeTim.png"



const Portfolio = () => {
    const data = [

        {
            id: 1,
            img: kardone,
            title: 'Kardone Shopp',
            github: "https://github.com/SerjAyvazyan-2000/Kardone-Shoop",
            demo: 'https://serjayvazyan-2000.github.io/Kardone-Shoop',
            starsList:[1,2,3,4,5,6]
        },
        {
            id: 2,
            img: memoryGame,
            title: 'Memory Game',
            github: "https://github.com/SerjAyvazyan-2000/Memory-Game",
            demo: 'https://serjayvazyan-2000.github.io/Memory-Game',
            starsList:[1,2,3,4]
        },

        {
            id: 4,
            img: multiShoop,
            title: 'Multi Shopp',
            github: "https://github.com/SerjAyvazyan-2000/Multi-Shoop",
            demo: 'https://serjayvazyan-2000.github.io/Multi-Shoop',
            starsList:[1,2,3,4]

        },

        {
            id: 5,
            img: AppleDoctor,
            title: 'AppleDoctor',
            github: "https://github.com/SerjAyvazyan-2000/AppleDoctor",
            demo: 'https://serjayvazyan-2000.github.io/AppleDoctor/',
            process: "Is In Process",

        },
        {
            id: 6,
            img: creativeTim,
            title: 'Creative Tim',
            github: "https://github.com/SerjAyvazyan-2000/Creative-Tim",
            demo: 'https://serjayvazyan-2000.github.io/Creative-Tim/',
            starsList:[],
            process: "Is In Process",

        },
        {
            id: 3,
            img: school,
            title: "School",
            github: "https://github.com/SerjAyvazyan-2000/Admin-School",
            demo: 'https://serjayvazyan-2000.github.io/Admin-School',
            starsList:[1,2,3]

        },
    ]



    return <section id="portfolio">
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
                            {item.starsList ?
                                <>
                                {item.starsList.map((item,index)=>{
                                     return<span>&#11088;</span>
                                })}

                                </>
                                : null}
                            {item.process ? <p style={{color:'gold'}}>{item.process}</p> : null}
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
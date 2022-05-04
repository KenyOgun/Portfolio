import { FaLinkedin, FaGithub } from "react-icons/fa"

const Homepage = () => {
    return (
        <>
            <section className="homepage">
                <div className="overlay">
                    <h1>Kehinde</h1>
                    <p>Front-end Web Developer</p>

                    <ul>
                        <li><a href="https://www.linkedin.com/in/kehinde-ogunnigbo-75491a45/"
                            target="_blank" rel="noopenner noreferrer"><FaLinkedin /></a></li>
                        <li><a href="https://github.com/KenyOgun"
                            target="_blank" rel="noopenner noreferrer"><FaGithub /></a></li>
                    </ul>
                </div>
            </section>

        </>
    )
}

export default Homepage
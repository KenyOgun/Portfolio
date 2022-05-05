import { FaPhone, FaEnvelope } from "react-icons/fa"

const Contacts = () => {
    return (
        <>
            <section className="contacts">
                <h1>Contact Me</h1>
                <ul>
                    <li>
                        <a href="tel:16472315812">
                            <FaPhone /> +1 647 231 5812
                        </a>
                    </li>
                    <li>
                        <a href="mailto:ogunnigbokehinde@yahoo.com">
                            <FaEnvelope /> ogunnigbokehinde@yahoo.com
                        </a>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Contacts
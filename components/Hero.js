import Image from 'next/image';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container-hero">

                <div className="content-hero">

                    <div className="left-side">
                        <h1>Task management and lists Tool</h1>
                        <p>We believe that designing products and services in close
                            partnership with our clients is the only way to have a real
                            impact on their business.</p>
                        <form>
                            <div className="form-group">
                                <input type="email" placeholder="Name@company.com" />
                                <button type="submit" >Try it free</button>
                            </div>
                        </form>
                    </div>


                    <div className="right-side">
                        <Image src="/hero.svg" layout="fill" />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Hero;
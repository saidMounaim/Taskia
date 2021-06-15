import CardService from './CardService';

const Services = () => {
    return (
        <section className="services" >
            <div className="header-services">
                <h2>Featured Service that We Provide</h2>
            </div>
            <div className="container-services">
                <div className="grid-services">
                    <CardService
                        icon="/services/service1.svg"
                        title="Keep tasks in one place"
                        description="Save time, avoid losing work and information, delegate, and track tasks to stay on schedule"
                    />
                    <CardService
                        icon="/services/service2.svg"
                        title="Keep tasks in one place"
                        description="Save time, avoid losing work and information, delegate, and track tasks to stay on schedule"
                    />
                    <CardService
                        icon="/services/service3.svg"
                        title="Keep tasks in one place"
                        description="Save time, avoid losing work and information, delegate, and track tasks to stay on schedule"
                    />
                </div>
            </div>
        </section>
    )
}

export default Services;
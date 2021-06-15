import Image from 'next/image';
import data from '../data/managementSection.json';

const Management = () => {
    return (
        <section className="management">
            <div className="container-management">
                <div className="content-management">
                    {data.blocks.map(managment =>
                        <div className="item" key={managment.id}>
                            <div className="left-side">
                                <Image src={managment.image} alt="Mockup" width={550} height={350} />
                            </div>
                            <div className="right-side">
                                <h3>{managment.title}</h3>
                                <p>{managment.description}</p>
                                <button>Learn more</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Management;
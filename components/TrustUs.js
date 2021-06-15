import Image from 'next/image';
import data from '../data/trustUsSection.json';

const TrustUs = () => {
    return (
        <section className="trustus">
            <div className="header-trustus">
                <h2>{data.title}</h2>
            </div>

            <div className="container-trustus">
                <div className="content-trustus">

                    <Image src={data.imageLeft} alt="Trust Us" width={320} height={400} />
                    <h3>{data.number}</h3>
                    <Image src={data.imageRight} alt="Trust Us" width={320} height={400} />

                </div>
            </div>

        </section>
    )
};

export default TrustUs;
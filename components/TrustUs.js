import Image from 'next/image';

const TrustUs = () => {
    return (
        <section className="trustus">
            <div className="header-trustus">
                <h2>Trust us and feel free to try our service</h2>
            </div>

            <div className="container-trustus">
                <div className="content-trustus">

                    <Image src="/trustus1.png" alt="Trust Us" width={320} height={400} />
                    <h3>100 000</h3>
                    <Image src="/trustus2.png" alt="Trust Us" width={320} height={400} />

                </div>
            </div>

        </section>
    )
};

export default TrustUs;
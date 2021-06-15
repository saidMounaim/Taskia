import Image from 'next/image';

const CardService = ({ icon, title, description }) => {
    return (
        <div className="card">
            <Image src={icon} alt="Service-icon" width={200} height={200} />
            <div className="info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default CardService;
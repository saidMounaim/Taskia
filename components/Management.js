import Image from 'next/image';

const Management = () => {
    return (
        <section className="management">
            <div className="container-management">
                <div className="content-management">
                    <div className="item">
                        <div className="left-side">
                            <Image src="/management/mockup.png" alt="Mockup" width={550} height={350} />
                        </div>
                        <div className="right-side">
                            <h3>Why do you need task management software?</h3>
                            <p>Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines.</p>
                            <button>Learn more</button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="left-side">
                            <Image src="/management/app.png" alt="Mockup" width={550} height={350} />
                        </div>
                        <div className="right-side">
                            <h3>Seamless Team Workflow & Efficient Task Management</h3>
                            <p>Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines.</p>
                            <button>Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Management;
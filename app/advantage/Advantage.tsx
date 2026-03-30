import "./advantage.css";

import Image from "next/image";

export default function Advantage() {
    return (
        <section className="section-advantage">
            <div className="advante-container">
                <Image className="legs" src="/images/Legs.png" width={602} height={622} alt="Legs" />
                <div className="info">
                    <h2>WHY FITUP WORKS</h2>
                    <p>
                        we go beyond fitness by empowering you with insights and guidance to
                        boost your blood cell production, enhance circulation, and improve heart
                        health
                    </p>
                    
                    <div className="container-galeria">
                        <div className="container-image">
                            <Image className="image" src="/images/Liver.png" alt="Liver" width={208} height={141} />
                            <button> <span>healthy liver</span> <Image src="/images/Near.png" alt="Near" width={28} height={28} /></button>
                        </div>
                        <div className="container-image">
                            <Image className="image" src="/images/Heart.png" alt="Heart" width={93} height={146} />
                            <button> <span>healthy heart</span> <Image src="/images/Near.png" alt="Near" width={28} height={28} /></button>
                        </div>
                        <div className="container-image">
                            <Image className="image" src="/images/Cells.png" alt="Cells" width={179} height={92} />
                            <button> <span>healthy cells</span> <Image src="/images/Near.png" alt="Near" width={28} height={28} /></button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="dieta">
                <div className="container-left">
                    <h1>Fit your body with
                        balanced <span>meals</span>
                    </h1>
                    <p className="paragraph-info">
                        With options for every dietary preference - including vegan,
                        non - vegan, and allergy - friendly choices - our recipes are
                        designed to help you enjoy delicious, nutritious meals while
                        staying on track with your goals
                    </p>
                    <div className="card-container">
                        <div className="card-left">
                            <div>
                                <div className="icon-image">
                                    <Image className="ham" src="/images/Ham.png" alt="Ham" width={24} height={24} />
                                </div>
                                <p>Non Vegan</p>
                            </div>
                            <button>Start Journey <Image src="/images/Right-Arrow.png" alt="Right Arrow" width={24} height={22} /></button>
                        </div>
                        <div className="card-right">
                            <div>
                                <div className="icon-image">
                                    <Image src="/images/Vegan.png" alt="Vegan" width={48} height={48} />
                                </div>
                                <p>Vegan</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-right">
                    <div className="container-calories">
                        <div className="title-calories">
                            <h4>Calories</h4>
                            <p>2091/<span>kcal</span></p>
                        </div>

                        <div className="progress-calories">
                            <div className="progress-bar" />
                        </div>

                        <p className="sub-title">Stay on track with meal guidance</p>
                    </div>

                    <Image className="img-calories" src="/images/Food.png" width={333} height={499} alt="Food" />
                </div>
                
            </div>


        </section>
    )
}
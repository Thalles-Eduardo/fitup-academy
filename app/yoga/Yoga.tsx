import YogaModel from "@/components/ui/YogaModel/YogaModel"
import "./yoga.css";


export default function Yoga() {
    return (
        <section className="yoga-section">

            <div className="title">
                <h2>Find Your Perfect Yoga <span>style</span></h2>
                <p>
                    Explore different yoga styles tailored to your
                    needs, from flexibility and balance to relaxation
                    and strength
                </p>
            </div>
            <div className="container-yoga">
                <YogaModel image="/images/Yoga-1.png" textButton="Muscle Stretch"/>
                <YogaModel image="/images/Yoga-2.png" textButton="Relaxation Stretch"/>
                <YogaModel image="/images/Yoga-3.png" textButton="Balance Booster"/>
                <YogaModel image="/images/Yoga-4.png" textButton="Flexibility Enhancer"/>
                <YogaModel image="/images/Yoga-5.png" textButton="Full-Body Stretch"/>
                <YogaModel image="/images/Yoga-6.png" textButton="Strength Flow"/>
            </div>

            <button>Check All</button>
            
        </section>
    )
}
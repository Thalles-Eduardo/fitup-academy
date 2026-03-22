import "./yogaModel.css"

import Image from "next/image"

export default function YogaModel({ image, textButton  }: { image: string, textButton: string }) {
    return (
        <div className="yoga-model">
            <h1>YOGA</h1>
            <Image className="position" src={image} width={510} height={499} alt="Position Yoga"/>
            <button>{textButton} <Image src="/images/Right-Arrow.png" width={24} height={22} alt="Right-Arrow"/></button>
        </div>
    )
}
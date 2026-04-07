import "./yogaModel.css"
import Image from "next/image"

type Props = {
    image: string
    textButton: string
    width: number
    height: number
    bottom?: string
    left?: string
    scale?: number
    scaleMobile?: number
    bottomMobile?: string
}

export default function YogaModel({
    image,
    textButton,
    width,
    height,
    bottom = "2rem",
    left = "50%",
    scale = 0.5,
    scaleMobile,
    bottomMobile,
}: Props) {
    return (
        <div className="yoga-model" style={
            {
                "--mobile-scale": scaleMobile,
                "--mobile-bottom": bottomMobile,
            } as React.CSSProperties
        }>
            <h1>YOGA</h1>

            <Image
                className="position"
                src={image}
                width={width}
                height={height}
                alt="Position Yoga"
                style={{
                    bottom: bottom,
                    left: left,
                    transform: `translateX(-50%) scale(${scale})`,
                }}
            />

            <button className="btn-yoga-bubbles">
                <span className="text">{textButton}</span>

                <Image
                    src="/images/Right-Arrow.png"
                    width={24}
                    height={22}
                    alt="Right-Arrow"
                />
            </button>
        </div>
    )
}
import Image from "next/image";
import "./infiniteScroll.css"

export default function InfiniteScroll() {
  return (
    <div className="carousel-container">
        <div className="carousel-track">
            <h2 className="item">exhibition</h2>
            <Image className="item" src="/images/Star-Footer.png" width={152} height={141} alt="Star" />
            <h2 className="item">exhibition</h2>
            <Image className="item" src="/images/Star-Footer.png" width={152} height={141} alt="Star" />
            <h2 className="item">exhibition</h2>
            <Image className="item" src="/images/Star-Footer.png" width={152} height={141} alt="Star" />
            <h2 className="item">exhibition</h2>
            <Image className="item" src="/images/Star-Footer.png" width={152} height={141} alt="Star" />
            <h2 className="item">exhibition</h2>
            <Image className="item" src="/images/Star-Footer.png" width={152} height={141} alt="Star" />
            <h2 className="item">exhibition</h2>
            <Image className="item" src="/images/Star-Footer.png" width={152} height={141} alt="Star" />
            <h2 className="item">exhibition</h2>
            <Image className="item" src="/images/Star-Footer.png" width={152} height={141} alt="Star" />
            <h2 className="item">exhibition</h2>
            <Image className="item" src="/images/Star-Footer.png" width={152} height={141} alt="Star" />
        </div>
    </div>
  );
}

import "./footer.css"

import InfiniteScroll from "@/components/ui/InfiniteScroll/InfiniteScroll"
import Date from "@/components/ui/Date/Date"

import Image from "next/image"

export default function Footer() {
    return (
        <section>
            <InfiniteScroll />
            <div className="container-date">
                <Date number="01" title="fitup wellness expo" time="full-day event 01.05.2026 (hamida stadium)" />
                <Date number="02" title="mind balance retreat" time="full-day event 01.05.2026 (hamida stadium)" />
                <Date number="03" title="training workshop" time="full-day event 01.05.2026 (hamida stadium)" />
                <Date number="04" title="meal planning seminar" time="full-day event 01.05.2026 (hamida stadium)" />
            </div>
            <footer>
                <Image
                    src="/images/Logo-End.png"
                    alt="FitUp Academy Logo"
                    width={632}
                    height={482}
                />
                <h1>FitUp</h1>
            </footer>
        </section>
    )
}
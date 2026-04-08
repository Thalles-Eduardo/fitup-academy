import "./date.css"

export default function Date({number, title, time} : {number: string, title: string, time: string}) {
    return (
        <div className="date">
            <div className="title-date">
                <p>{number}</p>
                <h2>{title}</h2>
            </div>
            <p className="time">{time}</p>
            <button className="started-btn btn-footer">Reserve Your Spot</button>
        </div>
    )
}
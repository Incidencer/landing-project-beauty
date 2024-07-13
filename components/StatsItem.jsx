import CountUp from "react-countup"

const StatsItem = ({ countNum, countText, text }) => {
    return (
        <div className="text-center font-primary flex flex-col gap-3">
            <div className="text-[40px] text-accent">
                <CountUp end={countNum} delay={2.4} duration={6} />
                <span>{countText}</span>
            </div>
            <p className="text-lg font-semibold">{text}</p>
        </div>
    )
}

export default StatsItem
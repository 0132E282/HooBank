import styles from "../style";
import { stats } from "../constants";
const Stats = () => {
    return (
        <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
            {stats.map((stats) => (
                <div className={`flex flex-1 items-center justify-start flex-row m-3`} key={stats.id}>
                    <h4 className="text-white font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]">{stats.value}</h4>
                    <p className="font-normal mt-2 xs:text-[20px] text-[30px] xs:leading-[21=6px] leading-[21px] ml-3 uppercase  text-gradient">{stats.title}</p>
                </div>
            ))}
        </section>
    )
}

export default Stats
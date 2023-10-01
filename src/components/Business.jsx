import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
const FeatureCard = ({ icon, title, content, index }) => {
    return (
        <div className={`flex flex-row rounded-[20px] p-6 ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                <img src={icon} alt={title} className="w-[50%] h-[50%] rounded-[20px] object-contain" />
            </div>
            <div className="flex-1  flex flex-col ml-3 ">
                <h4 className="font-poppins font-semibold text-white leading-[23px] mb-1 text-[18px]">{title}</h4>
                <p className="font-poppins font-normal text-dimWhite leading-[24px] mb-1 text-[16px]">{content}</p>
            </div>
        </div>
    )
};
const Business = () => {
    return (
        <section id="features" className={`${layout.section}`}>
            <div className={`${layout.sectionInfo}`}>
                <h2 className={`${styles.heading2}`}>
                    You do the business,<br className="sm:block hidden" /> we’ll handle the money.
                </h2>
                <p className={`  ${styles.paragraph} max-w-[470px] mt-5 `}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                <Button styles="mt-10 rounded-md">Get Started</Button>
            </div>
            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature) => (
                    <FeatureCard key={feature.id} icon={feature.icon} content={feature.content} title={feature.title} />
                ))}
            </div>
        </section>
    )
}

export default Business
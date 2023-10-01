import styles, { layout } from "../style"
import { apple, bill, google } from "../assets"
const billing = () => {
    return (
        <section id="product" className={`${layout.sectionReverse}`}>
            <div className={`${layout.sectionImg}`}>
                <img src={bill} alt="billing" className="w-[100%] h-full relative z-[5]" />
                <div className="absolute h-1/2 w-1/2 left-1/2 top-0 rounded-full withe__gradient" />
                <div className="absolute h-1/2 w-1/2 left-1/2 top-0 rounded-full pink__gradient" />
            </div>
            <div className={`${layout.sectionInfo}`}>
                <h2 className={`${styles.heading2}`}>Easily control your billing & invoicing.</h2>
                <br className={`sm:block hidden`} />
                <p className={`${styles.paragraph} max-w-[470px]`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                <div className={`flex flex-row flex-wrap sm:mt-10 mt-6`}>
                    <img src={apple} alt="google_play" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
                    <img src={google} alt="google_play" className="w-[128px] h-[42px] object-contain  cursor-pointer" />
                </div>
            </div>
        </section>
    )
}

export default billing
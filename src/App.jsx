
import './App.css'
import style from './style';
import { Hero, Navbar, Stats, Business, Billing, Testimonials, Clients, CTA, Footer } from './components';
import CardDeal from './components/CardDeal';
function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      {/* header */}
      <div className={`${style.paddingX} ${style.flexStart} `}>
        <div className={`${style.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      {/* hero */}
      <div className={`bg-primary ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Hero />
        </div>
      </div>
      {/* start */}
      <div className={`bg-primary ${[style.paddingX]} ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App

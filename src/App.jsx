import { useState } from 'react'
import Waves from './components/Waves'
import BlurText from './components/BlurText'
import Header from './components/Header'
import ShinyText from './components/ShinyText'
import SpotCard from './components/SpotCard'
import StarBorder from './components/StarBorder'
import Button from "@mui/material/Button"

import Modal from "./components/Modal"

import Footer from './components/Footer';

import GuiImg from './assets/img/professional.png';
import ScreenShit from './assets/img/methodiki.jpg';

function App() {

  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)

  const openDownloadModal = () => setIsDownloadModalOpen(true)
  const closeDownloadModal = () => setIsDownloadModalOpen(false)

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <>
    <Header openDownloadModal={openDownloadModal} />
    <div className='custom-anim-1 w-full h-full'>
      <div className='relative flex flex-col justify-center items-center w-full sm:h-[700px] h-[300px] border-b-[1px] border-white/20'>
        <div className='absolute top-0 left-0 w-full h-full'>
          <Waves
            lineColor="#474747"
            backgroundColor="#030303"
            friction={0.9}
            tension={0.005}
          />
        </div>
        <div className='flex flex-col justify-center items-center relative z-[4] drop-shadow-[0_0_100px_#FFFFFF] text-center'>
          <BlurText
            text="AuraMind"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="relative text-center z-[4] font-unbounded sm:text-[80px] text-[30px] font-[600] drop-shadow-[0_0_20px_#FFFFFF]"
          />
          <p className='font-neue sm:text-[35px] text-[20px] font-[400] custom-list-2 anim-delay-550ms drop-shadow-[0_0_20px_#FFFFFF]'>Ваш личный нейро-психолог</p>
        </div>
        
      </div>

      <div id='prems' className='flex flex-col justify-center items-center mt-10 gap-[40px]'>
        <ShinyText text="Наши преимущества" disabled={false} speed={2} className='sm:text-[30px] text-[20px] font-unbounded' />
        
        <SpotCard className="flex flex-col sm:flex-row justify-between items-center p-7 rounded-[20px] gap-5 sm:w-[1200px] w-[350px] hover:scale-[102%] smooth" spotlightColor="#FFFFFF20">
          <div className='flex flex-col sm:justify-center sm:items-start justify-center items-center text-center sm:text-start sm:w-[45%]'>
            <h1 className='font-neue text-[30px]'>Профессиональный подход</h1>
            <p className='font-[200]'>Индивидуальные консультации от нейросети с учетом ваших особенностей и потребностей</p>
          </div>
          <img src={GuiImg} className='w-[450px] sm:w-[45%] z-20 drop-shadow-[0_0_40px_#FFFFFF30] rounded-[20px] border border-neutral-700' />
        </SpotCard>

        <SpotCard className="flex flex-col sm:flex-row justify-between items-center p-7 rounded-[20px] gap-5 sm:w-[1200px] w-[350px] hover:scale-[102%] smooth" spotlightColor="#FFFFFF20">
          <div className='flex flex-col sm:justify-center sm:items-start justify-center items-center text-center sm:text-start sm:w-[45%]'>
            <h1 className='font-neue text-[30px]'>Современные методики</h1>
            <p className='font-[200]'>Используем передовые нейропсихологические техники и научно обоснованные подходы к диагностике и коррекции</p>
          </div>
          <img 
            src={ScreenShit} 
            className="w-[450px] sm:w-[45%] rounded-[20px] mt-6 sm:mt-0 border border-neutral-700 h-auto drop-shadow-[0_0_40px_#00000070]" 
          />
        </SpotCard>
      </div>

    

      <div id='download' className='flex flex-col justify-center items-center mt-10 mb-10 gap-y-[40px]'>
        <ShinyText text="Начать использование" disabled={false} speed={2} className='sm:text-[30px] text-[20px] font-unbounded' />
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <a href="https://t.me/auramind_bot">
            <StarBorder
              as="div"
              className="group flex flex-col justify-center items-center rounded-[20px] mx-auto hover:scale-[102%] smooth"
              color="#17a1d8"
              speed="5s"
            >
                <h1 className='sm:text-[40px] text-[30px] font-neue text-white/20 group-hover:text-[#17a1d8] group-hover:scale-[105%] group-hover:drop-shadow-[0_0_30px_#17a1d8] smooth'>Telegram Бот</h1>
            </StarBorder>
          </a>

          
        </div>
      </div>
    </div>
    <Footer />
    <Modal isOpen={isDownloadModalOpen} onClose={closeDownloadModal}>
      <h2 className="text-2xl font-bold mb-4">Скачать AuraMind</h2>
      <p className="mb-4 font-[200]">
        Выберите версию, которая больше подходит вам по душе.
      </p>

      <div className='flex justify-start items-center gap-x-3'>
        <a href='./files/AweProject.exe'>
          <button
            class="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#4f4f4f] backdrop-blur-lg px-6 py-2 text-base font-light text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20"
          >
            <span class="font-neue">Лоадер</span>
            <div
              class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
            >
              <div class="relative h-full w-10 bg-white/20"></div>
            </div>
          </button>
        </a>

        <a href='./files/aweproject.zip'>
          <button
            class="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#4f4f4f] backdrop-blur-lg px-6 py-2 text-base font-light text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20"
          >
            <span class="font-neue">Версией</span>
            <div
              class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
            >
              <div class="relative h-full w-10 bg-white/20"></div>
            </div>
          </button>
        </a>

      </div>
    </Modal>
    </>
  )
}

export default App

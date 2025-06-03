// src/components/Header.jsx
import LOGO from "../assets/img/logo.png"
import Button from "@mui/material/Button"

function Header({ openDownloadModal }) {

  function LogoClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function BtnClck() {
    document.querySelector("#download").scrollIntoView({
      behavior: 'smooth'
    });
  }

  function ToVideo() {
    document.querySelector("#video").scrollIntoView({
      behavior: 'smooth'
    });
  }

  function ToPrems() {
    document.querySelector("#prems").scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <div className="bg-[#000000]/10 text-white py-3 px-[40px] sm:px-[40px] md:px-[100px] lg:px-[200px] flex justify-between items-center border-b-[1px] border-[#202020] backdrop-blur-[20px] sticky top-0 z-[100]">
      <div className="flex justify-center items-center gap-x-2 hover:scale-[103%] smooth hover:cursor-pointer" onClick={LogoClick}>
        <img src={LOGO || "/placeholder.svg"} alt="" className="w-[45px] custom-anim-5 hidden sm:block" />
        <h1 className="text-[20px] sm:text-[18px] md:text-[20px] lg:text-[25px] text-center smooth custom-anim-5 font-neue">
          AuraMind
        </h1>
      </div>

      <div className="sm:flex hidden gap-3">
        <button className="hover:bg-white/20 bg-white/5 border border-white/5 smooth py-2 px-4 rounded-full hover:scale-[97%]" onClick={ToPrems}>
          Наши преимущества
        </button>
      </div>

      <button
        class="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-black backdrop-blur-lg px-6 py-2 text-base font-light text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20"
        onClick={BtnClck}
      >
        <span class="font-neue">Начать использование</span>
        <div
          class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
        >
          <div class="relative h-full w-10 bg-white/20"></div>
        </div>
      </button>

      {/* <Button variant="contained" color="secondary" onClick={openDownloadModal}>
        <p className=""></p>
      </Button> */}
    </div>
  )
}

export default Header


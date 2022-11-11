import { useEffect, useRef, useState } from 'react';
import Navbar from './Component/Navbar'

import { ReactComponent as FacebookLogo } from './images/icon-facebook.svg'
import { ReactComponent as Logo } from './images/logo.svg'
import { ReactComponent as IsntagramLogo } from './images/icon-instagram.svg'
import { ReactComponent as PintrestLogo } from './images/icon-pinterest.svg'
import { ReactComponent as TwitterLogo } from './images/icon-twitter.svg'




function App() {
  const [mobile, setMobile] = useState(false);

  const [size, setSize] = useState(window.innerWidth)


  useEffect(() => {
    const chekSize = () => {
      setSize(window.innerWidth)
    }

    window.addEventListener('resize', chekSize)
    if (size < 800) {
      setMobile(true)
    }
    else {
      setMobile(false)
    }
    return () => {
      // console.log('cleanUp')

      window.removeEventListener('resize', chekSize);
    }

  }, [size])
  return (
    <>
      {/* ---------Hero Section---------*/}
      <section className="hero p-lg-5 p-0" >
        {/* <img src={HeroImage}  alt="" /> */}
        <Navbar />
        <div class="c-cont container w-100 p-xs-1 p-4 my-lg-5 mt-lg-0 mt-5 py-5">
          <div className="row row-cols-1">
            <div className="col-md-7 mx-md-auto mx-auto mx-lg-0">
              <h1 className='py-sm-1 text-break py-4 px-xs-0 px-2 my-xs-3 my-5 fs-sm-0'>Immersive experiences that deliver</h1>
            </div>
          </div>

        </div>
      </section>
      <main>

        {/* ---------About Section---------*/}
        <div className="container p-sm-5 p-3 mt-lg-5 mt-3">
          <div className="about-section d-flex flex-column w-100 my-5">
            <div className="image">
              <img className='img-fluid' src={require(`./images/desktop/image-interactive.jpg`)} alt="" />
            </div>
            <div className="text bg-white p-sm-5 m-sm-2 m-0 p-4 text-lg-start text-center">
              <h1>The leader in interactive VR</h1>
              <p> Founded in 2011, Loopstudios has been producing world-class virtual reality
                projects for some of the best companies around the globe. Our award-winning
                creations have transformed businesses through digital experiences that bind
                to their brand.</p>
            </div>
          </div>

          {/* ---------Creation Section---------*/}
          <div className="Creation-section ">
            <div className="header d-flex justify-content-lg-between justify-content-center">
              <h1 className='fw-bold'>OUR CREATIONS</h1>
              <button className='btn btn-outline-dark w-25 bt-dp'>SEE ALL</button>
            </div>
            <div className="items my-sm-5 my-2">
              <div className="row justify-content-center">
                <div className="col-auto c-col m-3 ">
                  <img src={require(`./images/${!mobile ? 'desktop' : 'mobile'}/image-deep-earth.jpg`)} className='rounded-2 w-100 ' alt="" />
                  <div className="title">
                    <h1 className='w-50 mx-auto'>DEEP EARTH</h1>
                  </div>
                </div>
                <div className="col-auto c-col m-3 ">
                  <img src={require(`./images/${!mobile ? 'desktop' : 'mobile'}/image-night-arcade.jpg`)} className='rounded-2 w-100 ' alt="" />
                  <div className="title">
                    <h1 className='w-50 mx-auto'>DEEP EARTH</h1>
                  </div>
                </div>
                <div className="col-auto c-col m-3 ">
                  <img src={require(`./images/${!mobile ? 'desktop' : 'mobile'}/image-soccer-team.jpg`)} className='rounded-2 w-100 ' alt="" />
                  <div className="title">
                    <h1 className='w-50 mx-auto'>DEEP EARTH</h1>
                  </div>
                </div>
                <div className="col-auto c-col m-3 ">
                  <img src={require(`./images/${!mobile ? 'desktop' : 'mobile'}/image-grid.jpg`)} className='rounded-2 w-100 ' alt="" />
                  <div className="title">
                    <h1 className='w-50 mx-auto'>DEEP EARTH</h1>
                  </div>
                </div>
                <div className="col-auto c-col m-3 ">
                  <img src={require(`./images/${!mobile ? 'desktop' : 'mobile'}/image-from-above.jpg`)} className='rounded-2 w-100 ' alt="" />
                  <div className="title">
                    <h1 className='w-50 mx-auto'>DEEP EARTH</h1>
                  </div>
                </div>
                <div className="col-auto c-col m-3 ">
                  <img src={require(`./images/${!mobile ? 'desktop' : 'mobile'}/image-pocket-borealis.jpg`)} className='rounded-2 w-100 ' alt="" />
                  <div className="title">
                    <h1 className='w-50 mx-auto'>DEEP EARTH</h1>
                  </div>
                </div>
                <div className="col-auto c-col m-3 ">
                  <img src={require(`./images/${!mobile ? 'desktop' : 'mobile'}/image-curiosity.jpg`)} className='rounded-2 w-100  ' alt="" />
                  <div className="title">
                    <h1 className='w-50 mx-auto'>DEEP EARTH</h1>
                  </div>
                </div>
                <div className="col-auto c-col m-3 ">
                  <img src={require(`./images/${!mobile ? 'desktop' : 'mobile'}/image-fisheye.jpg`)} className='rounded-2 w-100  ' alt="" />
                  <div className="title">
                    <h1 className='w-50 mx-auto'>DEEP EARTH</h1>
                  </div>
                </div>
              </div>
              <button className='btn btn-outline-dark w-50 mx-auto bt-mb'>SEE ALL</button>
            </div>
          </div>
        </div>
      </main>
      {/* ---------Footer Section---------*/}
      <footer>
        <div className="footer-section">
          <div className="container p-5 text-sm-start text-center">
            <div className="d-flex justify-content-between flex-sm-row flex-column ">
              <div className="c-1">
                <Logo />
                <div className="nav pt-2 d-flex flex-sm-row flex-column m-sm-0 m-3 ">
                  <button className='mx-2 ms-0 p-sm-1 p-3'>About</button>
                  <button className='mx-2 p-sm-1 p-3'>Careers</button>
                  <button className='mx-2 p-sm-1 p-3'>Products</button>
                  <button className='mx-2 p-sm-1 p-3'>Support</button>
                </div>
              </div>
              <div className="c-2">
                <div className="i-socialMedia pb-1 d-flex justify-content-sm-end justify-content-center">
                  <button className='mx-2 pb-2'><FacebookLogo /></button>
                  <button className='mx-2 pb-2'><TwitterLogo /></button>
                  <button className='mx-2 pb-2'><PintrestLogo /></button>
                  <button className='mx-2 me-0 pb-2'><IsntagramLogo /></button>
                </div>
                <p>© 2021 Loopstudios. All rights reserved.</p>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>

  );
}

export default App;

import { useEffect, useState } from 'react';
import Navbar from './Component/Navbar'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ReactComponent as FacebookLogo } from './images/icon-facebook.svg'
import { ReactComponent as Logo } from './images/logo.svg'
import { ReactComponent as IsntagramLogo } from './images/icon-instagram.svg'
import { ReactComponent as PintrestLogo } from './images/icon-pinterest.svg'
import { ReactComponent as TwitterLogo } from './images/icon-twitter.svg'

const data = [
  { title: 'DEEP EARTH', image: 'image-deep-earth.jpg' },
  { title: 'Night arcade', image: 'image-night-arcade.jpg' },
  { title: 'Soccer team VR', image: 'image-soccer-team.jpg' },
  { title: 'The grid', image: 'image-grid.jpg' },
  { title: 'From up above VR', image: 'image-from-above.jpg' },
  { title: 'Pocket borealis', image: 'image-pocket-borealis.jpg' },
  { title: 'The curiosity', image: 'image-curiosity.jpg' },
  { title: 'Make it fisheye', image: 'image-fisheye.jpg' }
]


function App() {
  const [mobile, setMobile] = useState(false);

  const [size, setSize] = useState(window.innerWidth)

  useEffect(() => {
    AOS.init();
  },[])
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
        <div className="c-cont container w-100 p-xs-1 p-4 my-lg-5 mt-lg-0 mt-5 py-5">
          <div className="row row-cols-1">
            <div className="col-md-7 mx-md-auto mx-auto mx-lg-0" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-out">
              <h1 className='py-sm-1 text-break py-4 px-xs-0 px-2 my-xs-3 my-5 fs-sm-0' >Immersive experiences that deliver</h1>
            </div>
          </div>

        </div>
      </section>
      <main>

        {/* ---------About Section---------*/}
        <div className="container p-sm-5 p-3 mt-lg-5 mt-3">
          <div className="about-section d-flex flex-column w-100 my-5">
            <div className="image" data-aos="zoom-in"
              data-aos-duration="1000">
              <img className='img-fluid' src={require(`./images/desktop/image-interactive.jpg`)} alt="" />
            </div>
            <div className="text bg-white p-sm-5 m-sm-2 m-0 p-4 text-lg-start text-center" data-aos="fade-right"
              data-aos-duration="2000">
              <h1>The leader in interactive VR</h1>
              <p> Founded in 2011, Loopstudios has been producing world-class virtual reality
                projects for some of the best companies around the globe. Our award-winning
                creations have transformed businesses through digital experiences that bind
                to their brand.</p>
            </div>
          </div>

          {/* ---------Creation Section---------*/}
          <div className="Creation-section ">
            <div className="header d-flex justify-content-lg-between justify-content-center" data-aos="fade-up"
              data-aos-anchor-placement="center-bottom" data-aos-delay="300"  >
              <h1 className='fw-bold'>OUR CREATIONS</h1>
              <button className='btn btn-outline-dark w-25 bt-dp'>SEE ALL</button>
            </div>
            <div className="items my-sm-5 my-2">
              <div className="row justify-content-center" >
                {data.map((item,index) => {
                  const { title, image } = item;
                  return (
                    <div className="col-auto c-col m-3 " data-aos="zoom-in" key={index} data-aos-offset='100'>
                      <img src={require(`./images/${!mobile ? 'desktop' : 'mobile'}/${image}`)} className='rounded-2 w-100 ' alt="" />
                      <div className="title">
                        <h1 className='w-75 mx-auto'>{title}</h1>
                      </div>
                    </div>
                  )
                })}
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

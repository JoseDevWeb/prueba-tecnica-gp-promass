import logo from './logo.svg';
import '../src/css/App.css';
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
      <Header />

      <div className='w-full xl:w-full  '>
        <img className='w-full xl:w-full' src={require('./images/Frame1.png')} />
      </div>

      <div className='grid grid-cols-1  md:grid-cols-3 md:gap-3 text-center mb-10'>
        <div className=''>
          <p className='font-inter text-ptec-dark font-semibold text-3xl md:text-5xl leading-extra-custom-subtitulos md:leading-extra-custom-subtitulos'>Subtítulo 1</p>
          <p className='font-inter text-ptec-dark font-normal text-xl'>Lorem ipsum.</p>
        </div>

        <div className=''>
          <p className='font-inter text-ptec-dark font-semibold text-3xl md:text-5xl leading-extra-custom-subtitulos md:leading-extra-custom-subtitulos'>Subtítulo 2</p>
          <p className='font-inter text-ptec-dark'>Lorem ipsum.</p>
        </div>

        <div className=''>
          <p className='font-inter text-ptec-dark font-semibold text-3xl md:text-5xl leading-extra-custom-subtitulos md:leading-extra-custom-subtitulos'>Subtítulo 3</p>
          <p className='font-inter text-ptec-dark'>Lorem ipsum.</p>
        </div>

      </div>

      <div className=' '>
        <img className='' src={require('./images/Frame3.png')} />
      </div>

      <div className='mb-10 md:flex md:w-4/6 md:gap-x-11 md:mx-auto md:mt-10 md:mb-10'>


        <div className='flex mt-10 ml-10  md:flex  '>
          <div className=''>
            <img className='' src={require('./images/circle1.png')} />
          </div>
          <div className=''>
            <p className='font-inter text-ptec-dark font-semibold text-3xl md:text-5xl leading-extra-custom-subtitulos md:leading-extra-custom-subtitulos'>Subtítulo 5</p>
            <p className='font-inter text-ptec-dark font-normal text-xl'>Lorem ipsum.</p>
          </div>


        </div>

        <div className='flex mt-10 ml-10 md:flex'>
          <div className=''>
            <img className='' src={require('./images/circle1.png')} />
          </div>
          <div className=''>
            <p className='font-inter text-ptec-dark font-semibold text-3xl md:text-5xl leading-extra-custom-subtitulos md:leading-extra-custom-subtitulos'>Subtítulo 5</p>
            <p className='font-inter text-ptec-dark font-normal text-xl'>Lorem ipsum.</p>
          </div>


        </div>

      </div>

      <div className='bg-ptec-gray-light pb-10'>
        <div className='mb-10 flex justify-between  md:w-2/5 md:gap-x-11 md:mx-auto md:mt-10 md:mb-10 '>


          <div className=' mt-10 ml-10   '>
            <p className='font-inter text-ptec-dark font-semibold text-5xl leading-extra-58px'>Sitio</p>

            <p className='font-inter text-ptec-dark leading-extra-29px'>Inicio</p>
            <p className='font-inter text-ptec-dark leading-extra-29px  '>Nosotros</p>
            <p className='font-inter text-ptec-dark leading-extra-29px  '>Preguntas Frecuentes</p>


          </div>

          <div className=' mt-10 ml-10 '>
            <p className='font-inter text-ptec-dark font-semibold text-5xl leading-extra-58px'>Contacto</p>

            <p className='font-inter text-ptec-dark leading-extra-29px '>01 2345 5678</p>
            <p className='font-inter text-ptec-dark leading-extra-29px'>mail@gmail.com</p>
          </div>


        </div>
      </div>


      <Footer />

    </div>
  );
}

export default App;

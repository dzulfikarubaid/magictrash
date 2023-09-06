import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Navbar from './Navbar'
import { IonIcon } from '@ionic/react'
import { arrowBackCircleOutline, arrowBackOutline, arrowForwardCircle, arrowForwardCircleOutline, arrowForwardOutline, chevronDown, chevronUp, search, searchCircle, searchOutline } from 'ionicons/icons'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import Footbar from './Footbar'

function FaqItem({ question, answer }:any) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAnswer = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className='w-[400px] flex flex-col gap-6'>
        <button
          className={`border-solid border-color7 border-2 p-2 px-3 rounded-full flex flex-row justify-between w-full items-center ${isOpen ? 'bg-gray-200' : ''}`}
          onClick={toggleAnswer}
        >
          <h1>{question}</h1>
          <IonIcon icon={isOpen ? chevronUp : chevronDown} />
        </button>
        {isOpen && (
            <p className='text-left'>{answer}</p>
        )}
      </div>
    );
  }
function Start() {
    
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        axios.get('https://magictrash-api.vercel.app/api/').then((res) => {
            setData(res.data)
            setLoaded(true)
        })
    },[])
    const history = useHistory()
    useEffect(() => {
      if(window.screen.width <= 600){
        history.replace('/')
        window.location.reload()
      }

    })
    function handleSearch(e:any){
        e.preventDefault();
        const query = e.target.elements.searchInput.value;
        // Navigasi ke halaman pencarian dengan query sebagai parameter
        history.push(`/shop?q=${query}`);
    }
  return (
    <div>
        <Navbar></Navbar>
        <div className='rounded-full bg-gradient-radial from-color4 via-transparent opacity-80 to-transparent -z-10 absolute w-[400px] h-[400px] top-0 -left-[100px] '></div>
        <div className='flex flex-row justify-center'>
            <div className='p-20 w-1/2 flex flex-col gap-6'>
            <h1 className='font-bold text-[43px] text-teks1'>Tempatnya Jual Beli Fashion Bekas Murah, Kualitas Wahh!</h1>
            <div className='w-1/2 h-1 bg-tekssub '></div>
            <p>Mau jual fashion bekas? Mau beli fashion bekas dengan kualitas terjamin? MagicTrash Solusinya!</p>
            <li className='list-disc list-inside'>
            Ngejual atau donasi baju tak terpakai </li>
            <li className='list-disc list-inside'>
            Cari baju bekas termurah kualitas bagus</li>
            <li className='list-disc list-inside'>
            Transaksi aman dan terpercaya</li>
            <form className='flex flex-row items-center' onSubmit={handleSearch}>
              <div className='border-2 rounded-full flex flex-row items-center p-1'>
                <IonIcon className='px-2' size='large' icon={searchOutline}></IonIcon>
              <input type="text" name='searchInput' placeholder='Cari fashion kamu di sini!' className='rounded-full p-2 focus:outline-none'/>
              <button type='submit' className='bg-color7 p-2 rounded-full px-4 text-teks1'>Search</button>
              </div>
            </form>
            </div>
            <div className='w-1/2'>
                <img className='w-full' src="image 6.png" alt="" />
            </div>
        </div>
        <div className='py-10 px-20'>
            <p>Khusus buat kamu</p>
            <div className='flex flex-row justify-between items-center pb-8'>
                <h1 className='font-bold text-xl text-teks1'>Rekomen Mantep!</h1>
                <div className='flex flex-row gap-4'>
                    <button className='bg-color7 h-fit p-1 rounded-full flex justify-center'><IonIcon size='large' icon={arrowBackOutline}></IonIcon></button>
                    <button className='bg-color7 h-fit p-1 rounded-full flex justify-center'><IonIcon size='large' icon={arrowForwardOutline}></IonIcon></button>
                </div>
            </div>
            <Swiper
            className=''
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={15}
            slidesPerView={3.5}
            >
            { data.slice(-4).reverse().map((item:any) => {
                return (
                    <>
                    {
                    loaded &&
                    <SwiperSlide key={item.id}>
                    <Link to={`/product/${item.id}`} className='flex flex-col gap-2 mb-6'>
                        <img className='rounded-xl w-[400px] h-[400px] object-cover' src={item.image1} alt="" />
                        <h1 className='text-xl font-semibold'>{item.title}</h1>
                        
                        {/* <h1 className='text-sm'>{item.harga_asli}</h1> */}
                        <h1 className='text-lg'>Rp{item.harga_diskon}</h1>
                    </Link>
                    </SwiperSlide>
                    }
                    
                    </>
                    
                )
            })
            }
            
            </Swiper>
            
            <p className='pt-20' id='service'>Layanan Kami</p>
            <h1 className='font-bold text-teks1 text-xl pb-4'>Layanan Magictrash</h1>
            <div className='flex flex-row gap-4'>
                <div className='rounded-full bg-gradient-radial from-color3 via-transparent opacity-80 to-transparent -z-10 absolute w-[600px] h-[600px] -translate-y-[250px] -right-[200px] '></div>
                <div>
                    <h1>Kamu bisa ngejual atau ngebeli produk bekas berkualitas dengan harga nyaman di kantong. Kamu juga bisa menyumbangkan barangmu agar bermanfaat kepada orang yang membutuhkan.</h1>
                    <div className='flex flex-row gap-10 mt-4'>
                        <div className='border-2 w-[200px] p-2 rounded-xl'>
                            <h1 className='bg-color7 py-2 mx-4 text-teks1 text-sm rounded-xl text-center'>Pick Up</h1>
                            <p className='text-sm pt-2 text-justify'>Foto barang bekasmu, konfirmasi ke admin, kurir akan menjemputmu dan membayar barangmu.</p>
                        </div>
                        <div className='border-2 w-[200px] p-2 rounded-xl'>
                            <h1 className='bg-color7 py-2 mx-4 text-teks1 text-sm rounded-xl text-center'>Drop Point</h1>
                            <p className='text-sm pt-2 text-justify'>Antar langsung barangmu ke tempat kami terdekat. Tanpa menunggu kurir dan proses cepat.</p>
                        </div>
                        <div className='border-2 w-[200px] p-2 rounded-xl'>
                            <h1 className='bg-color7 py-2 mx-4 text-teks1 text-sm rounded-xl text-center'>Berdonasi</h1>
                            <p className='text-sm pt-2 text-justify'>Layanan donasi barang bekas yang diberikan kepada panti atau orang yang berkebutuhan.</p>
                        </div>
                        
                    </div>
                </div>
                <div className='w-2/3'>
                <img src="image 7.png" alt="" />
                </div>
                
            </div>
            <div className='text-center pt-10'>
                <p>Tentang Kami</p>
                <h1 className='font-bold text-xl text-teks1 pb-4'>Kenapa Harus Pakai Magictrash?</h1>
                <p>Kami menerima fashion bekas apapun dan mengolahnya menjadi produk yang bermanfaat untuk orang lain.</p>
            </div>
            <div className='text-center pt-10 flex flex-col justify-center'>
                <p>Prosedur</p>
                <h1 className='font-bold text-xl text-teks1 pb-4'>Mekanisme Penjualan Barang</h1>
                <p>Alur penjualan barang bekas di MagicTrash</p>
                <img className='px-32 py-8' src="mekanisme.png" alt="" />
            </div>
            <div className='text-center pt-10'>
                <p className='text-sm' id='faq'>Hal Yang Sering Ditanyain</p>
                <h1 className='font-bold text-xl text-teks1'>Frequently Asked Questions</h1>
                <p className=' '>Masih ada yang ragu dan ada pertanyaan? 
                Tenang, disini kami akan selalu ada!</p>
                <div className='flex flex-row gap-10 justify-center '>
                    <div className='w-[400px] flex flex-col gap-6 py-20'>
                    <FaqItem
                        question="Apa itu magictrash.id?"
                        answer="Tempat jual dan beli barang bekas terbaik nyaman di kantong, mulai dari fashion, sepatu, elektronik, peralatan penunjang kos, hingga kerajinan mahasiswa."
                    />
                    <FaqItem
                        question="Apa aja baju bekas yang diterima?"
                        answer="Kami menerima berbagai jenis baju bekas seperti kaos, kemeja, celana, dan lainnya dalam kondisi baik."
                    />
                    <FaqItem
                        question="Apa keunggulan magictrash?"
                        answer="Keunggulan magictrash antara lain adalah proses donasi yang mudah, lingkungan yang terjaga, dan dukungan untuk masyarakat yang membutuhkan."
                    />
                    <FaqItem question='Gimana cara menyumbangkan baju?' answer='Buka menu donasi kemudian masukkan keterangan barang yang ingin anda donasikan, tekan submit untuk mengirim, dan anda akan dihubungi oleh admin'></FaqItem>
                    </div>
                    <div>
                    <div className='rounded-full bg-gradient-radial from-color4 via-transparent opacity-80 to-transparent -z-10 absolute w-[500px] h-[500px]  '></div>
                    <img src="
                    nanyaa 1.png" alt="" /></div>
                </div>
            </div>
        </div>
        <Footbar></Footbar>
    </div>
  )
}

export default Start
import React, { useEffect, useState } from 'react';
import { IonButtons, IonContent, IonHeader, IonItem, IonItemGroup, IonList, IonMenu, IonMenuButton, IonPage, IonRefresher, IonRefresherContent, IonSearchbar, IonSkeletonText, IonTitle, IonToolbar, RefresherEventDetail } from '@ionic/react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Start.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Menu from './Menu';
function Start() {
  function SkeletonArmy(){
    return(
      <div className='mb-3'>
        <div className='w-[95px] h-[95px]'>
      <IonSkeletonText animated={true}></IonSkeletonText>
      <h3 className='mt-1 text-[10px]'>
        <IonSkeletonText animated={true}></IonSkeletonText>
      </h3>
      <p className='w-[70%] mt-1 text-[10px]'>
        <IonSkeletonText animated></IonSkeletonText>
      </p>
    </div>
      </div>
      

    )
   
  }
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)
    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
      setTimeout(() => {
        // Any calls to load data go here
        event.detail.complete();
      }, 2000);
    }
    useEffect(() => {
        axios.get('https://magictrash-api.vercel.app/list/').then((res) => {
            setData(res.data)
            setLoaded(true)
        })
    },[])
  return (
    <>
      <Menu></Menu>
      <IonPage id="main-content">
        <IonHeader className='ion-no-border'>
          <IonToolbar>
            <IonButtons slot="end">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle className='font-semibold'>Magictrash</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
            <div className='flex flex-row justify-between mt-5'>
                <div className='px-5 flex flex-col gap-5'>
                    <h1 className='text-xl font-bold'>Tempatnya Jual Beli Fashion Bekas Murah, Kualitas Wahh!</h1>
                    <p className='text-[10px]'>
                    Mau jual fashion bekas? Mau beli fashion bekas dengan kualitas terjamin? MagicTrash Solusinya!
                    </p>
                    <div className='text-[10px]'>
                    <li>Ngejual atau donasi baju tak terpakai</li>
                    <li>Cari baju bekas termurah kualitas bagus</li>
                    <li>Transaksi aman dan terpercaya</li>
                    </div>
                </div>
                <img className='w-[200px] h-[200px]' src="baju-home.png" alt="" />
            </div>
            <div className='px-5 mt-5 flex flex-col gap-3 mb-5'>
                <h1 className='font-semibold'>Rekomen Mantep!</h1>
                <div>
                <Swiper
      // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={15}
                            slidesPerView={2.5}
                            scrollbar={{ draggable: true, hide:true, enabled:false}}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                        
                    { data.map((item:any) => {
                            return (
                              <>
                              {
                                loaded &&
                                <SwiperSlide key={item.id}>
                                <Link to={`/product/${item.id}`} className='flex flex-col gap-2 mb-6'>
                                    <img className='rounded-xl w-[150px] h-[150px] object-cover' src={item.image1} alt="" />
                                    <h1 className='text-[10px] font-semibold'>{item.title}</h1>
                                   
                                    {/* <h1 className='text-sm'>{item.harga_asli}</h1> */}
                                    <h1 className='text-[10px]'>Rp{item.harga_diskon}</h1>
                                </Link>
                                </SwiperSlide>
                              }
                              
                              </>
                                
                            )
                        })
                    }
                    
                    </Swiper>
                    {
                      !loaded && 
                      <div className='mb-3 flex flex-row gap-3'>
                      <SkeletonArmy></SkeletonArmy>
                      <SkeletonArmy></SkeletonArmy>
                      <SkeletonArmy></SkeletonArmy>
                      {/* <SkeletonArmy></SkeletonArmy> */}
                      </div>
                    }
                </div>
                    <h1 className='font-semibold'>Layanan Magictrash</h1>
                    <p className='text-justify text-[10px]'>Kamu bisa ngejual atau ngebeli produk bekas berkualitas dengan harga nyaman di kantong. Kamu juga bisa menyumbangkan barangmu agar bermanfaat kepada orang yang membutuhkan.</p>
                    <div className='flex gap-2 justify-center items-center'>
                        <div className='border-[1.5px] w-[100px] h-[120px] rounded-xl'>
                        <h1 className='text-[10px] p-2'>Foto barang bekasmu, konfirmasi ke admin, kurir akan menjemputmu dan membayar barangmu.</h1>
                        </div>
                        <div className='border-[1.5px] w-[100px] h-[120px] rounded-xl'>
                        <h1 className='text-[10px] p-2'>Antar langsung barangmu ke tempat kami terdekat. Tanpa menunggu kurir dan proses cepat.</h1>
                        </div>
                        <div className='border-[1.5px] w-[100px] h-[120px] rounded-xl'>
                        <h1 className='text-[10px] p-2'>
                        Layanan donasi barang bekas yang diberikan kepada panti atau orang yang berkebutuhan.</h1>
                        </div>
                    
                     
                    </div>
            </div>
        </IonContent>
      </IonPage>
    </>
  );
}
export default Start;
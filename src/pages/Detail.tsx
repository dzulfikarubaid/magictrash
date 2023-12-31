import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonRefresher, IonRefresherContent, IonSkeletonText, IonTitle, IonToolbar, RefresherEventDetail } from '@ionic/react';
import axios from 'axios';
import { logoWhatsapp, personCircleOutline, personOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import video from './jeans.mp4';
type QuizParams = {
    id: string;
  };
  
const Detail: React.FC = () => {
    const {id} = useParams<QuizParams>();
    const [data, setData] = useState<any>([])
    const [loaded, setLoaded] = useState(false)
    function SkeletonArmy(){
        return(
        <div className='mb-3 flex flex-col gap-3'>
        <div className=' rounded-xl mb-3'>
          <IonSkeletonText className='w-full h-[300px]' animated={true}></IonSkeletonText>
        </div>
        <h1 ><IonSkeletonText className='h-4 w-full' animated={true}></IonSkeletonText></h1>
        <h2 className='font-semibold'><IonSkeletonText className='w-[40%]  h-3' animated={true}></IonSkeletonText></h2>
        <h1 className='line-through '><IonSkeletonText className='h-3 w-[30%]' animated={true}></IonSkeletonText></h1>
        <h1 className='font-bold'><IonSkeletonText className='w-[50%] h-3' animated={true}></IonSkeletonText></h1>
        <div className='flex flex-col gap-1'>
        <p className='w-full h-[300px]'><IonSkeletonText animated={true}></IonSkeletonText></p>
        
        </div>
        
        </div>
          
    
        )}
    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        location.reload()
        setTimeout(() => {

          // Any calls to load data go here
          event.detail.complete();
        }, 2000);
      }
    useEffect(() => {
        axios.get(`https://magictrash-api.vercel.app/api/${id}/`).then((res) => {
            setData(res.data)
            setLoaded(true)
        })
    },[id])
    return (
        <IonPage>
            <IonHeader className='ion-no-border '>
                <IonToolbar className='ion-no-border bg-none bg-white'>
                <IonButtons slot="start">
                <IonBackButton></IonBackButton>
                </IonButtons>
                    <h1 className='text-xl font-bold text-black px-3 '>Detail Produk</h1>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
            <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
            <IonRefresherContent></IonRefresherContent>
            </IonRefresher>
                <div className='flex flex-col gap-3'>
                {
                    loaded &&
                    <>
                    <div>
                    <Swiper
                    style={{ }}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{clickable: true}}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className=''
                >
                     
                        <>
                        {
                        data.image1 ? <SwiperSlide >
                        <img src={data.image1} className='object-contain ease-in duration-500 rounded-xl w-full h-[300px]' alt="" />
                        </SwiperSlide> : ''
                    }
                    {
                        data.image2 ? <SwiperSlide><img src={data.image2} className='object-contain ease-in duration-500 rounded-xl w-full h-[300px]' alt="" />
                        </SwiperSlide> : ''
                    }
                    {
                        data.image3 ? <SwiperSlide><img src={data.image3}  className='object-contain ease-in duration-500 rounded-xl w-full h-[300px]' alt="" />
                        </SwiperSlide> : ''
                    }
                    {
                        data.image4 ? <SwiperSlide><img src={data.image4}  className='object-contain ease-in duration-500 rounded-xl w-full h-[300px]' alt="" />
                        </SwiperSlide> : ''
                    }
                    {
                        data.image5 ? <SwiperSlide><img src={data.image5}  className='object-contain ease-in duration-500 rounded-xl w-full h-[300px]' alt="" />
                        </SwiperSlide> : ''
                    }</>
                
                    
                    
                </Swiper>
                </div>
                <h1 className='text-xl font-bold'>{data.title}</h1>
                <h1 className='font-semibold'>Rp{data.harga_diskon}</h1>
                <h1 className='line-through text-[12px]'>Rp{data.harga_asli}</h1>
                <h1 className='font-bold'>Deskripsi Produk</h1>
                <p>{data.body}</p>
                <h1 className='font-bold'>Alasan Menjual</h1>
                <p>{data.alasan}</p>
                </>
                }
                {
                    !loaded && <SkeletonArmy></SkeletonArmy>
                }
                <h1 className='font-bold'>Beli Sekarang</h1>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-3'>
                    <IonIcon size='large' icon={personCircleOutline}></IonIcon>
                    <div>
                    <h1>Retno Wulandari</h1>
                    <h1 className='text-[12px]'>Chief Marketing Officer</h1>
                    </div>
                    </div>
                    <a target='_blank' href={`https://api.whatsapp.com/send/?phone=6287855715585&text=Hai kak, saya ingin membeli ${data.title}, produk nomor ${data.id}, harga Rp${data.harga_asli}&&type=phone_number&app_absent=0`}>
                    <IonIcon size='large' icon={logoWhatsapp}></IonIcon>
                    </a>
                </div>
                </div>
                <h1 className='font-bold  my-3'>Video Pemrosesan Produk</h1>
                <video className='w-full h-[300px] mb-10' src={video} controls></video>
            </IonContent>
        </IonPage>
    );
};

export default Detail;
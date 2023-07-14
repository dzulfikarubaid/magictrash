import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import axios from 'axios';
import { logoWhatsapp, personCircleOutline, personOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


type QuizParams = {
    id: string;
  };
  
const Detail: React.FC = () => {
    const {id} = useParams<QuizParams>();
    const [data, setData] = useState<any>([])
    useEffect(() => {
        axios.get(`https://magictrash-api.vercel.app/${id}/`).then((res) => {
            setData(res.data)
        })
    },[id])
    return (
        <IonPage>
            <IonHeader className='ion-no-border pt-4 bg-none'>
                <IonToolbar className='ion-no-border bg-white'>
                <IonButtons slot="start">
                <IonBackButton></IonBackButton>
                </IonButtons>
                    <h1 className='text-xl font-bold text-black px-3'>Detail Produk</h1>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <div className='flex flex-col gap-3'>
                    <div>
                    <Swiper
      // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={1}
                    scrollbar={{ draggable: true, hide: true, enabled:false, }}
                    pagination={{clickable: true, }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    
                    {
                        data.image1 ? <SwiperSlide>
                        <img src={data.image1} className='hover:object-contain ease-in duration-500 rounded-xl w-full h-[200px] object-cover' alt="" />
                        </SwiperSlide> : ''
                    }
                    {
                        data.image2 ? <SwiperSlide><img src={data.image2} className='rounded-xl w-full h-[200px] object-cover' alt="" />
                        </SwiperSlide> : ''
                    }
                    {
                        data.image3 ? <SwiperSlide><img src={data.image3} className='rounded-xl w-full h-[200px] object-cover' alt="" />
                        </SwiperSlide> : ''
                    }
                    {
                        data.image4 ? <SwiperSlide><img src={data.image4} className='rounded-xl w-full h-[200px] object-cover' alt="" />
                        </SwiperSlide> : ''
                    }
                    {
                        data.image5 ? <SwiperSlide><img src={data.image5} className='rounded-xl w-full h-[200px] object-cover' alt="" />
                        </SwiperSlide> : ''
                    }
                </Swiper>

                </div>
                
                <h1 className='text-xl font-bold'>{data.title}</h1>
                <h1 className='font-semibold'>Rp{data.harga_diskon}</h1>
                <h1 className='line-through text-[12px]'>Rp{data.harga_asli}</h1>
                <h1 className='font-bold'>Deskripsi Produk</h1>
                <p>{data.body}</p>
                <h1 className='font-bold'>Beli Sekarang</h1>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-3'>
                    <IonIcon size='large' icon={personCircleOutline}></IonIcon>
                    <div>
                    <h1>Retno Wulandari</h1>
                    <h1 className='text-[12px]'>Chief Marketing Officer</h1>
                    </div>
                    </div>
                    <a target='_blank' href={`https://api.whatsapp.com/send/?phone=6287855715585&text=Hai kak, saya ingin membeli ${data.title}, produk nomor ${data.id}, harga ${data.harga_asli}&&type=phone_number&app_absent=0`}>
                    <IonIcon size='large' icon={logoWhatsapp}></IonIcon>
                    </a>
                </div>
                </div>
                
            </IonContent>
        </IonPage>
    );
};

export default Detail;
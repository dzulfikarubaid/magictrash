import React, { useEffect, useState } from 'react';
import { IonButtons, IonContent, IonHeader, IonItem, IonItemGroup, IonList, IonMenu, IonMenuButton, IonPage, IonRefresher, IonRefresherContent, IonSearchbar, IonTitle, IonToolbar, RefresherEventDetail } from '@ionic/react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Start.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Menu from './Menu';
import './Home.css'

function Shop(){
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://magictrash-api.vercel.app/').then((res) => {
            setData(res.data)
        })
    },[])
    return(
        <>
      <Menu></Menu>
      <IonPage id="main-content">
        <IonHeader className='ion-no-border'>
          <IonToolbar>
            <IonButtons slot="end">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle className='font-semibold'><Link to={'/'}>
            Magictrash</Link></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className='ion-padding'>
        <IonSearchbar animated={true} showCancelButton="focus" placeholder='Cari Sesuatu' class="custom"></IonSearchbar>
        <div className='flex flex-wrap gap-5 justify-center mt-3'>
        {
            data.map((item:any)=>{
                return(
                    <Link key={item.id} to={`/product/${item.id}`} className='flex flex-col gap-2  w-[90px] h-[125px]'>
                        <img className='rounded-xl w-[90px] h-[90px] object-cover' src={item.image1} alt="" />
                        <h1 className='text-[10px] font-semibold'>{item.title}</h1>
                        
                        {/* <h1 className='text-sm'>{item.harga_asli}</h1> */}
                        <h1 className='text-[10px]'>Rp{item.harga_diskon}</h1>
                    </Link>
                )
            })
        }
        </div>
        
</IonContent>
      </IonPage>
    </>
    );
};

export default Shop;
import React, { useEffect, useState } from 'react';
import { IonButtons, IonContent, IonHeader, IonItem, IonItemGroup, IonLabel, IonList, IonListHeader, IonMenu, IonMenuButton, IonPage, IonRefresher, IonRefresherContent, IonSearchbar, IonSkeletonText, IonThumbnail, IonTitle, IonToolbar, RefresherEventDetail } from '@ionic/react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Start.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Menu from './Menu';
import './Home.css'

function Shop(){
  function SkeletonArmy(){
    return(
      <div className='mb-3'>
        <div className='w-[95px] h-[95px] rounded-xl'>
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
    const [loaded, setLoaded] = useState(false)
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://magictrash-api.vercel.app/').then((res) => {
            setData(res.data)
            setLoaded(true)
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
        <div className='flex flex-wrap justify-center gap-5 mt-3'>
        {
            data.map((item:any)=>{
                return(
                  <>
                  {loaded &&  
                  <Link key={item.id} to={`/product/${item.id}`} className='flex flex-col gap-2  w-[95px] h-fit'>
                        <img className='rounded-xl w-[95px] h-[95px] object-cover' src={item.image1} alt="" />
                        <h1 className='text-[10px] font-semibold'>{item.title}</h1>
                        
                        {/* <h1 className='text-sm'>{item.harga_asli}</h1> */}
                        <h1 className='text-[10px]'>Rp{item.harga_diskon}</h1>
                    </Link>}
                  </>
                )
            })
        }
      
        </div>
        {!loaded &&  
        <div className='flex flex-wrap justify-center gap-5'>
        <SkeletonArmy></SkeletonArmy>
        <SkeletonArmy></SkeletonArmy>
        <SkeletonArmy></SkeletonArmy>
        <SkeletonArmy></SkeletonArmy>
        <SkeletonArmy></SkeletonArmy>
        <SkeletonArmy></SkeletonArmy>
        <SkeletonArmy></SkeletonArmy>
        <SkeletonArmy></SkeletonArmy>
        <SkeletonArmy></SkeletonArmy>
        <SkeletonArmy></SkeletonArmy>
        <SkeletonArmy></SkeletonArmy>
        <SkeletonArmy></SkeletonArmy>
        </div>
           
           
        }
        
</IonContent>
      </IonPage>
    </>
    );
};

export default Shop;
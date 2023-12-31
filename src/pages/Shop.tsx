import React, { useEffect, useState } from 'react';
import { IonButtons, IonContent, IonHeader, IonItem, IonItemGroup, IonLabel, IonList, IonListHeader, IonMenu, IonMenuButton, IonPage, IonRefresher, IonRefresherContent, IonSearchbar, IonSkeletonText, IonThumbnail, IonTitle, IonToolbar, RefresherEventDetail } from '@ionic/react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import './Start.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Menu from './Menu';
import './Home.css'
import './Start.css'
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
    const [search, setSearch] = useState('')
    const [loaded, setLoaded] = useState(false)
    const [data, setData] = useState([])
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q');
    useEffect(() => {
        axios.get('https://magictrash-api.vercel.app/api/').then((res) => {
            setData(res.data)
            setLoaded(true)
        })
    },[])
    let [results, setResults] = useState([...data])
    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
      window.location.reload()
      setTimeout(() => {
        // Any calls to load data go here

        event.detail.complete();
      }, 2000);
    }
    const [text, setText] = useState('')
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
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonSearchbar type='text' animated={true} onIonInput={(e) => setText(e.detail.value!)} showCancelButton="focus" placeholder='Cari Sesuatu' class="custom"></IonSearchbar>
        <div className='flex flex-wrap justify-center gap-5 mt-3'>
        {loaded &&  
    data.slice(0).reverse().filter((item:any) => {
      return (
        (query === null || item.title.toLowerCase().includes(query.toLowerCase())) &&
        (text === '' || item.title.toLowerCase().includes(text.toLowerCase()))
      );
    }).map((item:any) => {
        return(
          <Link key={item.id} to={`/product/${item.id}`} className='flex flex-col gap-2 w-[95px] h-fit'>
            <img className='rounded-xl w-[95px] h-[95px] object-cover' src={item.image1} alt="" />
            <h1 className='text-[10px] font-semibold'>{item.title}</h1>
            <h1 className='text-[10px]'>Rp{item.harga_diskon}</h1>
          </Link>
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
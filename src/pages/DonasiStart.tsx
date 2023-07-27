import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Menu from './Menu';

const DonasiStart: React.FC = () => {
    function handleClick(){
        window.location.href = '/donasi-form'
    }
    return (
        <>
        <Menu></Menu>
        <IonPage id="main-content">
        <IonHeader className='ion-no-border'>
          <IonToolbar>
            <IonButtons slot="end">
              <IonIcon ></IonIcon>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle className='font-semibold'>Magictrash</IonTitle>
          </IonToolbar>
        </IonHeader>
            <IonContent className="ion-padding">
                <div className='flex flex-row justify-between p-4'>
                    <div>
                        <h1 className='font-bold text-[20px]'>Yuk, Mulai Berdonasi Barang Bekas!</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptatibus aperiam facere quisquam. Mollitia ipsa iure ipsum impedit laborum. Facere nemo a perspiciatis nostrum mollitia, repellat velit consectetur quasi earum!</p>
                        <button onClick={handleClick} className='mt-5 w-full rounded-xl bg-black text-white p-2' >Donasi Sekarang</button>
                    </div>
                    <div>
                    
                    </div>

                </div>

            </IonContent>
        </IonPage>
        </>
        
        
    );
};

export default DonasiStart;
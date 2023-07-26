import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { cloudUploadOutline } from 'ionicons/icons';
import React from 'react';

const Donation: React.FC = () => {
    function handleClick(){
        window.location.href = '/success'
    }

    return (
        <IonPage>
            <IonHeader className='ion-no-border  bg-none'>
                <IonToolbar className='ion-no-border bg-white'>
                <IonButtons slot="start">
                <IonBackButton></IonBackButton>
                </IonButtons>
                    <h1 className='text-xl font-bold text-black px-3'>Donasi</h1>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <form action="" className='flex flex-col gap-2'>
                <label htmlFor="">Nama Barang</label>
                <input className='bg-slate-100 w-full p-2 focus:outline-none rounded-lg' type="text" />
                <label htmlFor="">Nomor WhatsApp</label>
                <input className='bg-slate-100 w-full p-2 focus:outline-none rounded-lg' type="text" />
                <label htmlFor="">Alamat</label>
                <input className='bg-slate-100 w-full p-2 focus:outline-none rounded-lg' type="text" />
                <label htmlFor="">Alasan Donasi</label>
                <input className='bg-slate-100 w-full p-2 focus:outline-none rounded-lg' type="text" />
               
                <label htmlFor="">Foto Barang</label>
                <button className='' >
                        <div className='py-4 w-full rounded-lg bg-slate-100 text-slate-400'>
                        <IonIcon size='large' icon={cloudUploadOutline}></IonIcon>
                        <p>klik untuk upload</p>
                        </div>
                    </button>
                    <input type="image" value='' />
                <button className='bg-black text-white p-2 rounded-lg mt-2' onClick={handleClick} type='button'>Donasi</button>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default Donation;
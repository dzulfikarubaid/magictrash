import { IonContent, IonHeader, IonItem, IonItemGroup, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Notification: React.FC = () => {
    return (
        <IonPage>
           
            <IonContent >
            <div className='mt-8 flex-col flex'>
                    <h1 className='px-8 text-xl font-bold mb-5'>Notifikasi</h1>
                    <IonList className=''>
                        <IonItemGroup><IonItem>
                        <div className='p-2 bg-slate-200  w-full'>
                            <h1>13.50</h1>
                        <Link  to='/app/chat'>Anda mendapatkan pesan baru dari <span className='text-blue-500'>Joko Widodo</span> </Link>

                            </div>
                        </IonItem>
                        <IonItem>
                        <div className='p-2 bg-slate-200  w-full'>
                            <h1>11.25</h1>
                        <Link  to='/app/pesanan'>Pesanan anda sudah sampai, beri ulasan kepada <span className='text-blue-500'>Bill Gates</span> </Link>

                            </div>
                        </IonItem>
                        <IonItem>
                        <div className='p-2 bg-slate-200 w-full'>
                            <h1>11.10</h1>
                        <Link  to='/app/pesanan'>Pesanan anda sedang diantar oleh <span className='text-blue-500'>Bill Gates</span> </Link>

                            </div>
                        </IonItem>
                        <IonItem>
                        <div className='p-2 bg-slate-200  w-full'>
                            <h1>11.03</h1>
                        <Link  to='/app/pesanan'>Anda mendapatkan tawaran pengantaran dari <span className='text-blue-500'>Bill Gates</span> </Link>

                            </div>
                        </IonItem>
                        <IonItem>
                        <div className='p-2 '>
                            <h1>10.59</h1>
                        <Link  to='/app/chat'>Anda mendapatkan tawaran pengantaran dari <span className='text-blue-500'>Prabowo</span> </Link>

                            </div>
                        </IonItem>
                        <IonItem>
                            <div className='p-2 '>
                            <h1>10.50</h1>
                        <Link  to='/app/chat'>Anda mendapatkan pesan baru dari <span className='text-blue-500'>Vladimir Putin</span> </Link>

                            </div>
                           
                        </IonItem>
                        </IonItemGroup>
                    </IonList>
            </div>
            </IonContent>
        </IonPage>
    );
};

export default Notification;
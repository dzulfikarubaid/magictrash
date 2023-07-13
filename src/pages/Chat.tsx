import { IonContent, IonHeader, IonIcon, IonItem, IonItemGroup, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { addCircleOutline, addOutline } from 'ionicons/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const Chat: React.FC = () => {

    return (
        <IonPage>
           
            <IonContent>
            <div className='mt-8 flex-col flex'>
           <div className='px-8 flex flex-row justify-between w-full'>
           <h1 className=' text-xl font-bold'>Pesan</h1>
            <button><IonIcon size='large' icon={addCircleOutline}></IonIcon></button>
           </div>
            <IonList className='px-4'>
                <IonItemGroup><IonItem>
                    <Link className=' p-2 flex flex-row justify-between w-full' to='/app/chat'>
                        <div className='flex flex-row gap-4'>
                        <img  className='w-[40px] h-[40px] object-cover rounded-full' src="jokowi.jpg" alt="" />
                        <div>
                        <h1 className='font-bold'>
                        Joko Widodo
                        </h1>
                        <p>Halo</p>
                        </div>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-1 px-2'>
                            <h1 className='text-blue-500'>13.50</h1>
                            <h1 className='bg-blue-500 px-[10px] py-1 text-white rounded-full text-[12px]'>
                                1
                            </h1>
                        </div>      
                        </Link>
                        </IonItem>
                        <IonItem>
                        <Link className=' p-2 flex flex-row justify-between w-full' to='/app/chat'>
                       
                        <div className='flex flex-row gap-4'>
                        <img  className='w-[40px] h-[40px] object-cover rounded-full' src="putin.jpg" alt="" />
                        <div>
                        <h1 className='font-bold'>
                        Vladimir Putin
                        </h1>
                        <p>Apakah pesanan saya sudah diantar?</p>
                        </div>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-1 px-2'>
                            <h1 className=''>10.50</h1>
                            
                        </div>

                        
                        
                                
                            </Link>
                        </IonItem>
                        </IonItemGroup>
                    </IonList>
            </div>
            </IonContent>
        </IonPage>
    );
};

export default Chat;
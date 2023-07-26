import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Success: React.FC = () => {

    return (
        <IonPage>
            <IonContent>
            <div className='px-10'>
                <h1 className='mt-[100%] text-center '>Terima kasih, data anda telah disimpan, selanjutnya anda akan dihubungi oleh admin</h1>
            </div>
            </IonContent>
            
        </IonPage>
    );
};

export default Success;
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const SellStart: React.FC = () => {

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <div className='flex flex-row justify-between'>
                    <div>
                        <h1 className='font-bold text-[20px]'>Daripada nganggur mending jual aja</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptatibus aperiam facere quisquam. Mollitia ipsa iure ipsum impedit laborum. Facere nemo a perspiciatis nostrum mollitia, repellat velit consectetur quasi earum!</p>
                        <a href="#">Mulai Jual</a>
                    </div>
                    <div>
                    
                    </div>

                </div>

            </IonContent>
        </IonPage>
    );
};

export default SellStart;
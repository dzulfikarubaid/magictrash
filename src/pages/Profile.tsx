import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemGroup, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { bookOutline, createOutline, logOutOutline } from 'ionicons/icons';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Profile: React.FC = () => {
    const history = useHistory()
    const handleSignOut=()=>{
        history.push('/')
    }
    return (
        <IonPage>
            <IonHeader className='ion-no-border pt-4 bg-none'>
                <IonToolbar className='ion-no-border bg-white'>
                <IonButtons slot="start">
                <IonBackButton></IonBackButton>
                </IonButtons>
                    <h1 className='text-xl font-bold text-black px-3'>Profilku</h1>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
            <IonList>
            <IonItemGroup className='flex flex-col gap-5'>
            <IonItem>
                {/* <div className='flex flex-col gap-5'> */}
                <div className='flex flex-row '>
                <img src="aku.png" className='mb-2 w-[40px] h-[40px] rounded-full border-2' alt="" />
                <div className='flex flex-col gap-1'>
                <h3 className='font-bold'>Ahmad Dzulfikar Ubaidillah</h3>
                <h3>dzulfikarubaidd@gmail.com</h3>
                </div>
                <div className='mr-3'>
                <IonIcon size='large' icon={createOutline}></IonIcon>
                </div>
                </div>
                </IonItem>
                <IonItem>
                <div>
                    <Link to={'/ketentuan-layanan'} className='flex flex-row gap-2'>
                        <IonIcon icon={bookOutline}></IonIcon><h1>Ketentuan Layanan</h1></Link>
                </div>

                </IonItem>
                <IonItem>
                <div className=' flex flex-row items-center'>
                    <button className='flex flex-row gap-2' onClick={handleSignOut}><span><IonIcon icon={logOutOutline}></IonIcon></span>Sign Out</button>
                </div>
                </IonItem>
                
                {/* </div> */}
                
                </IonItemGroup>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Profile;
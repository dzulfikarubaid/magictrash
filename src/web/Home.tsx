import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Start from './Start';

const Home: React.FC = () => {

  return (
    <IonPage>
      
      <IonContent>
        <Start></Start>
      </IonContent>
    </IonPage>
  );
};

export default Home;
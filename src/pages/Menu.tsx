import { IonContent, IonHeader, IonItem, IonItemGroup, IonList, IonMenu, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
   
    return (
        <IonMenu contentId='main-content' side='end'>
        <IonHeader className='ion-no-border'>
          <IonToolbar>
            <IonTitle className='font-semibold '><Link to={'/'}>
            Magictrash</Link></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent >
            <IonList>
                <IonItemGroup>
                    <IonItem>
                        <Link to='/shop'>Shop</Link>
                    </IonItem>
                    <IonItem>
                        <Link to='/'>Sell</Link>
                    </IonItem>
                    <IonItem>
                        <Link to='/'>Service</Link>
                    </IonItem>
                    <IonItem>
                        <Link to='/'>About Us</Link>
                    </IonItem>
                   
                </IonItemGroup>
            </IonList>
        </IonContent>
      </IonMenu>
    );
};

export default Menu;
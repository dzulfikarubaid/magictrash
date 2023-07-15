import { IonContent, IonHeader, IonItem, IonItemGroup, IonList, IonMenu, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
    const closeMenu = () => {
        setTimeout(() => {
            document.querySelector('ion-menu')!.toggle();
        }, 200)
      };
    return (
        <IonMenu contentId='main-content' side='end' >
        <IonHeader className='ion-no-border'>
          <IonToolbar>
            <IonTitle className='font-semibold '><Link onClick={closeMenu} to={'/'}>
            Magictrash</Link></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent >
            <IonList>
                <IonItemGroup>
                    <IonItem >
                        <Link onClick={closeMenu} to='/shop'>Shop</Link>
                    </IonItem>
                    <IonItem>
                        <Link onClick={closeMenu} to='/'>Sell</Link>
                    </IonItem>
                    <IonItem >
                        <Link onClick={closeMenu} to='/'>Service</Link>
                    </IonItem>
                    <IonItem >
                        <Link onClick={closeMenu} to='/'>About Us</Link>
                    </IonItem>
                   
                </IonItemGroup>
            </IonList>
        </IonContent>
      </IonMenu>
    );
};

export default Menu;
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {logoFacebook,camera,man,personCircleOutline, homeOutline,shirtSharp, womanSharp,manSharp, footballSharp, notificationsOutline, bagOutline, chatbubblesOutline } from 'ionicons/icons' 
import { Route, Redirect } from 'react-router';
import Home from './Home';
import Profile from './Profile';
import Categories from './Categories';
import Notification from './Notification';
import Pesanan from './Pesanan'

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Chat from './Chat';

const Tabs: React.FC = () => {

    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route path='/app/pesanan'>
                    <Pesanan></Pesanan>
                </Route>
                <Route path={'/app/notification'} component={Notification}></Route>
                <Route path={'/app/chat'} component={Chat}></Route>
                <Route path="/app/home">
                    <Home></Home>
                </Route>
                <Route exact path='/app'>
                    <Redirect to='/app/home'></Redirect>
                </Route>
            </IonRouterOutlet>
            <IonTabBar color={'tertiary'} slot='bottom' style={{paddingLeft:'20px',paddingRight:'20px'}}>
                <IonTabButton tab='home' href='/app/home'>
                    <IonIcon icon={homeOutline}>
                    </IonIcon>
                    
                </IonTabButton>
                <IonTabButton tab='notification' href='/app/notification'>
                    <IonIcon icon={notificationsOutline}>
                    </IonIcon>
                  
                </IonTabButton>
                <IonTabButton tab='pesanan' href='/app/pesanan'>
                    <IonIcon icon={bagOutline}>
                    </IonIcon>
                  
                </IonTabButton>
                
                <IonTabButton tab='chat' href='/app/chat'>
                    <IonIcon icon={chatbubblesOutline}>
                    </IonIcon>
                    
                </IonTabButton>
            </IonTabBar>
        </IonTabs>

    );
};

export default Tabs;
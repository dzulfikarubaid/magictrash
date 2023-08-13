import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import SignUp from './pages/SignUp';
import Start from './pages/Start';
import SignIn from './pages/SignIn';
import Home from './web/Home';
import Tabs from './pages/Tabs';
import AddPost from './pages/AddPost';
import Profile from './pages/Profile';
import PostDetail from './pages/PostDetail';
import Apply from './pages/Apply';
import Kl from './pages/Kl';
import Detail from './pages/Detail';
import Shop from './pages/Shop';
import Sell from './pages/Sell';
import Service from './pages/Service';
import { Component } from '@ionic/pwa-elements/dist/types/stencil-public-runtime';
import About from './pages/About';
import Donation from './pages/Donation';
import Success from './pages/Success';
import SellStart from './pages/SellStart';
import DonasiStart from './pages/DonasiStart';
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Start/>
        </Route>
        <Route exact path="/signin">
          <SignIn/>
        </Route>
        <Route exact path="/signup">
          <SignUp/>
        </Route>
        <Route path='/app'>
          <Tabs/>
        </Route>
        <Route path='/web'>
          <Home/>
        </Route>
        <Route path={'/addpost'}>
          <AddPost></AddPost>
        </Route>
        <Route path={'/profile'}>
          <Profile></Profile>
        </Route>
        <Route path={'/detailpost'}>
          <PostDetail></PostDetail>
        </Route>
        <Route path={'/apply'}>
          <Apply></Apply>
        </Route>
        <Route path={'/ketentuan-layanan'}>
          <Kl></Kl>
        </Route>
        <Route path='/product/:id' component={Detail}></Route>
        <Route path={'/shop'}><Shop /></Route>
        <Route path={'/sell-form'} component={Sell}></Route>
        <Route path={'/success'}>
          <Success></Success>
        </Route>
        <Route path={'/donation'} component={DonasiStart}></Route>
        <Route path='/service' component={Service}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/sell' component={SellStart}></Route>
        <Route path={'/donasi-form'} component={Donation}></Route>
        
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

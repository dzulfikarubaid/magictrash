import { IonBackButton, IonButton, IonButtons, IonCheckbox, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { logoFacebook, logoGoogle } from 'ionicons/icons';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const SignUp: React.FC = () => {
    const history = useHistory()
    const handleSignUp = () =>{
        history.push('/app')
    }

    return (
        
        <IonPage>
            <IonHeader className='ion-no-border'>
                <IonToolbar >
                    <IonButtons slot="start">
                    <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>Sign Up</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
            <div className='ion-padding'>
                <form action="" style={{display:'flex', flexDirection:'column', padding:'15px', gap:'20px'}}>
                <label htmlFor="email">Email</label>
                <IonInput clearInput fill='outline' counter={true}></IonInput>
                <label htmlFor="password">Password</label>
                <IonInput type='password' clearInput fill='outline' counter={true}></IonInput>
                <label htmlFor="c_password">Confirm Password</label>
                <IonInput type='password' clearInput fill='outline' counter={true}></IonInput>
               
                <IonButton onClick={handleSignUp}>Sign Up</IonButton>
                </form>
                <div style={{display:'flex', justifyContent:'center', flexDirection:'column', textAlign:'center'}}>
                    
                    <p>Already have an account?<span><Link to={'/signin'} className='text-blue-500' style={{textDecoration:'none',fontWeight:'bold', alignSelf:'center'}}> Sign In</Link></span> </p>
                    
                    </div>
                </div>
    
        </IonContent>
        </IonPage>
    );
};

export default SignUp;
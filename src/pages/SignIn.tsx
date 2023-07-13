import React from 'react';
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCheckbox, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from "react-router-dom"
import { Link } from 'react-router-dom';
import { logoIonic, logoFacebook, logoGoogle } from 'ionicons/icons';
function SignIn() {
    const history = useHistory()
    const handleSubmit = () =>{
        history.push('/app')
    }
  return (
    <IonPage>
        <IonHeader className='ion-no-border'>
            <IonToolbar >
                <IonButtons slot="start">
                <IonBackButton></IonBackButton>
                </IonButtons>
                <IonTitle>Sign In</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent >
            <div className='ion-padding'>
                <form action="" style={{display:'flex', flexDirection:'column', padding:'15px', gap:'20px'}}>
                <label htmlFor="email">Email</label>
                <IonInput clearInput fill='outline' counter={true}></IonInput>
                <label htmlFor="password">Password</label>
                <IonInput type='password' clearInput fill='outline' counter={true}></IonInput>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between',marginTop:'10px'}}>
                <IonCheckbox labelPlacement="start">Save Password</IonCheckbox>
                <Link to={'/signup'} style={{textDecoration:'none', color:'black', }}>Forgot Password?</Link>
                </div>
                <IonButton onClick={handleSubmit}>Sign In</IonButton>
                </form>
                <div style={{display:'flex', justifyContent:'center', flexDirection:'column', textAlign:'center'}}>
                    
                    <p>Don't have an account?<span><Link className='text-blue-500' to={'/signup'} style={{textDecoration:'none',fontWeight:'bold', alignSelf:'center'}}> Sign Up</Link></span> </p>
                
                </div>
            </div>
        </IonContent>
        

    </IonPage>
    
  );
}
export default SignIn;
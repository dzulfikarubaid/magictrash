import { Camera, CameraResultType } from '@capacitor/camera';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import axios from 'axios';
import { cloudUploadOutline } from 'ionicons/icons';
import React, {useEffect, useState} from 'react';

const Donation: React.FC = () => {
    const [Image, setImage] = React.useState<string>();
    const data= {nama_barang:'',nomor_wa:'',alamat:'',alasan:'',foto_barang:Image}
    const [inputData, setInputData] =useState(data)
    useEffect(() => {
        setInputData({ ...inputData, foto_barang: Image });
      }, [Image]);
    function handleClick(){
        window.location.href = '/success'
    }
    
    const takePicture = async () => {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: true,
          resultType: CameraResultType.Uri
        });
      
        // image.webPath will contain a path that can be set as an image src.
        // You can access the original file using image.path, which can be
        // passed to the Filesystem API to read the raw data of the image,
        // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
        var imageUrl = image.webPath;
      
        // Can be set to the src of an image now
        setImage(imageUrl)
      }
      const [loading, setLoading] = useState(false)
    function handleSubmit(e:any){
        e.preventDefault()
        setLoading(true)
        axios.post('https://magictrash-api.vercel.app/donasi/', inputData)
        .then((res)=>{
            setLoading(false)
            window.location.href = '/success'
        })
        .catch(
            (err)=>{
                setLoading(false)
                alert('Mohon maaf, terjadi error yang tidak diketahui')
            }
        )
    }
    const handleData = (e:any) => {
        setInputData({...inputData, [e.target.name]: e.target.value})
      }
    return (
        <IonPage>
            <IonHeader className='ion-no-border  bg-none'>
                <IonToolbar className='ion-no-border bg-white'>
                <IonButtons slot="start">
                <IonBackButton></IonBackButton>
                </IonButtons>
                    <h1 className='text-xl font-bold text-black px-3'>Donasi</h1>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <form action="" className='flex flex-col gap-2'>
                <label htmlFor="">Nama Barang</label>
                <input className='bg-slate-100 w-full p-2 focus:outline-none rounded-lg' type="text" onChange={handleData} value={inputData.nama_barang} name='nama_barang'/>
                <label htmlFor="">Nomor WhatsApp</label>
                <input className='bg-slate-100 w-full p-2 focus:outline-none rounded-lg' type="text" 
                onChange={handleData} value={inputData.nomor_wa} name='nomor_wa'/>
                <label htmlFor="">Alamat</label>
                <input className='bg-slate-100 w-full p-2 focus:outline-none rounded-lg' type="text" 
                onChange={handleData} value={inputData.alamat} name='alamat'/>
                <label htmlFor="">Alasan Donasi</label>
                <input className='bg-slate-100 w-full p-2 focus:outline-none rounded-lg' type="text" 
                onChange={handleData} value={inputData.alasan} name='alasan'/>
               
                <label htmlFor="">Foto Barang</label>
                {
                    Image ? <div className=''>
                        <img src={Image} />
                        <button className='bg-red-500 text-white p-2 rounded-lg mt-4 w-full' onClick={()=>setImage('')} type='button' >Hapus Gambar</button>
                    </div>
                    :
                    <button className='' type='button' onClick={takePicture} >
                        <div className='py-4 w-full rounded-lg bg-slate-100 text-slate-400'>
                        <IonIcon size='large' icon={cloudUploadOutline}></IonIcon>
                        <p>klik untuk upload</p>
                        </div>
                    </button>
                    
                    
                }
                
                <button className='bg-black text-white p-2 rounded-lg mt-2' onClick={handleSubmit} type='button'>Donasi</button>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default Donation;
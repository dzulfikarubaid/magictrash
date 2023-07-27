import { Camera, CameraResultType } from '@capacitor/camera';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import axios from 'axios';
import { cloudUploadOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';

const Sell: React.FC = () => {
    const [Image, setImage] = React.useState<string>();
    const [loading, setLoading] = useState(false)
    const data= {nama_barang:'',nomor_wa:'',alamat:'',harga:'',alasan:'',foto_barang:Image}
    const [inputData, setInputData] =useState(data)
    useEffect(() => {
        setInputData({ ...inputData, foto_barang: Image });
      }, [Image]);
      function blobToBase64(blob:any) {
        return new Promise((resolve, _) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        });
      }
    const handleSubmit = (e:any) => {
        e.preventDefault()
        setLoading(true)
        axios.post('https://magictrash-api.vercel.app/jual/', inputData)
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
            if (imageUrl) {
                const imageUrlBlob = new Blob([imageUrl]);
              
                const reader = new FileReader();
              
                reader.readAsDataURL(imageUrlBlob);
              
                reader.onloadend = () => {
                  const base64data: string | ArrayBuffer | null = reader.result;
                  console.log(base64data);
                }
              }
          }
          
        
    return (
        <IonPage>
            <IonHeader className='ion-no-border  bg-none'>
                <IonToolbar className='ion-no-border bg-white'>
                <IonButtons slot="start">
                <IonBackButton></IonBackButton>
                </IonButtons>
                    <h1 className='text-xl font-bold text-black px-3'>Penjualan</h1>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <form action="" className='flex flex-col gap-2'>
                <label htmlFor="">Nama Barang</label>
                <input className='bg-slate-100 w-full p-2 focus:outline-none rounded-lg' type="text" 
                onChange={handleData} value={inputData.nama_barang} name="nama_barang"/>
                <label htmlFor="">Nomor WhatsApp</label>
                <input className='bg-slate-100 w-full p-2 focus:outline-none rounded-lg' type="text" 
                onChange={handleData} value={inputData.nomor_wa} name="nomor_wa"/>
                <label htmlFor="">Alamat</label>
                <input className='bg-slate-100 w-full p-2 focus:outline-none rounded-lg' type="text" 
                onChange={handleData} value={inputData.alamat} name="alamat"/>
                <label htmlFor="">Alasan Menjual</label>
                <input className='bg-slate-100 w-full p-2 focus:outline-none rounded-lg' type="text" 
                onChange={handleData} value={inputData.alasan} name="alasan"/>
                <label htmlFor="">Harga</label>
                <input className='bg-slate-100 w-full p-2 focus:outline-none rounded-lg' type="text" 
                onChange={handleData} value={inputData.harga} name='harga'/>
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
                
                {
                    loading ? <button className='bg-slate-100 text-black p-2 rounded-lg mt-2' type='button'>Loading ...</button> : <button className='bg-black text-white p-2 rounded-lg mt-2' onClick={handleSubmit} type='button'>Jual</button>
                }
                </form>
            </IonContent>
        </IonPage>
    );
};

export default Sell;
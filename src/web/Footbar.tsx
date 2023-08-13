import React from 'react'
import './Web.css'
import { IonIcon } from '@ionic/react'
import { logoFacebook, logoInstagram, logoTwitter, logoWhatsapp } from 'ionicons/icons'
function Footbar() {
  return (
    <nav className='flex flex-row justify-between items-center p-6 px-10 bg-color7 text-teks1'>
        <div className='w-1/2 flex flex-col'>
        <a href="" className='flex flex-row gap-4 items-center'>
        <img className='w-[50px]' src="magiclogo.png" alt="" />
        <div className='text-center'>
        <h1 className='font-semibold text-xl'>MAGICTRASH.ID</h1>
        <p className='text-[12px]'>Re-wearing is caring</p>
        </div>
        </a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo beatae perspiciatis animi nulla. Fugiat velit accusantium, deserunt iusto at possimus molestiae ullam ex, laboriosam earum repellendus consequuntur rerum fuga magnam!</p>
        <div className='flex flex-row gap-6 pt-8'>
            <li><a href="https://instagram.com/magictrash.id"><IonIcon size='large' icon={logoInstagram}></IonIcon></a></li>
            <li><a href="https://wa.me/"><IonIcon size='large' icon={logoWhatsapp}></IonIcon></a></li>
            <li><a href="https://facebook.com"><IonIcon size='large' icon={logoFacebook}></IonIcon></a></li>
        </div>
        <h1>Copyright MagicTrash 2023, All Right Reserved</h1>
        </div>
        
    
        <div className='flex flex-row gap-20 font-semibold'>
        <div>
            <h1>Contact Us</h1>
            <div className='text-black font-normal flex flex-col'>
            <p>Jln. Arif Rahman No. 10
            Sukolilo, Surabaya 60111</p>
            <p>(+62) 823-0110-7811</p>
            <p>magictrash.id@gmail.com</p>
            </div>
        </div>
        <div>
            <h1>Other</h1>
            <div className='text-black font-normal flex flex-col'>
            <a href="">Kebijakan Privasi</a>
            <a href="">Syarat dan Ketentuan</a>
            <a href="">Pusat Bantuan</a>
            <a href="">Terms & Conditions</a>
            </div>
        </div>
        </div>
    </nav>
  )
}

export default Footbar
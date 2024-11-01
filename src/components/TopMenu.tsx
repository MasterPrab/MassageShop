import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { AuthOptions } from 'next-auth';
import { ServerSession } from 'mongodb';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Link } from '@mui/material';


export default async function TopMenu(){

    const session = await getServerSession(authOptions)

    return(
        <div className= {styles.menucontainer} >
            <Image src = {'/img/logo.jpg'} className = {styles.logoimg} 
            alt = 'logo' 
            height={0} 
            width = {0} 
            sizes = '100vh'/>
            <TopMenuItem title='Select Car' pageRef='/car'/>
            <TopMenuItem title='Reservations' pageRef='/reservations'/>
            <TopMenuItem title='About' pageRef='/about'/>
            <div className="flex flex-row absolute right-20 h-full">
            <TopMenuItem title="Cart" pageRef="/cart" />
            </div>


            {
                session? <Link href="/api/auth/signout"> 
                    <div className='flex items-center absolute right-0 h-full px-2 text-cyan-600 text-sm'>
                    Sign-out of {session.user?.name}</div> </Link>
                :<Link href="/api/auth/signin">
                    <div className='flex items-center absolute right-0 h-full px-2 text-cyan-600 text-sm'>
                    Sign-In</div></Link>

            }
        </div>
    );
}
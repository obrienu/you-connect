import React, { useContext } from 'react';
import PcHeader from '../../components/pcheader/pcheader.component';
import MobileHeader from '../../components/mobileheader/mobile.header.component';
import LogoHeader from '../../components/logo.header/logo.header.component';
import Loader from '../../components/loader/loader.component';
import { StateContext } from '../../context/app.context';


const Header = () => {
    const { isLoading } = useContext(StateContext);

    return (
        <>
            <LogoHeader
            />
            {isLoading && <Loader />}
            <div className="mt">
                <PcHeader
                />
                <MobileHeader
                    isMobile={true}
                />
            </div>
            <style jsx>{`
               .mt{
                   margin-top: 3rem;
               }
               `}</style>
        </>
    )

}


export default Header
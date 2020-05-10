import React from 'react';
import PcHeader from '../../components/pcheader/pcheader.component';
import MobileHeader from '../../components/mobileheader/mobile.header.component';
import LogoHeader from '../../components/logo.header/logo.header.component';


const Header = () => {

    return (
        <>
            <LogoHeader
            />
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
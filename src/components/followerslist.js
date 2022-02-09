import React from 'react';

const Followerslist = () => {
    return (
        <div className='follow-list'>
            <div className='first-follow'>
                <div className='follow-dp'> 
                    <img src='img/profile.jpg' alt='dp'/>
                </div>
                <div className='follow-info'>
                    <div className='follow-name'>Name</div>
                    <div className='follow-username'>Username</div>
                </div>
                <div className='follow-follow'>
                    <a href=''>Follow</a>
                </div>
            </div>
            <div className='first-follow'>
                <div className='follow-dp'> 
                    <img src='img/profile.jpg' alt='dp'/>
                </div>
                <div className='follow-info'>
                    <div className='follow-name'>Name</div>
                    <div className='follow-username'>Username</div>
                </div>
                <div className='follow-follow'>
                    <a href=''>Follow</a>
                </div>
            </div>
            <div className='first-follow'>
                <div className='follow-dp'> 
                    <img src='img/profile.jpg' alt='dp'/>
                </div>
                <div className='follow-info'>
                    <div className='follow-name'>Name</div>
                    <div className='follow-username'>Username</div>
                </div>
                <div className='follow-follow'>
                    <a href=''>Follow</a>
                </div>
            </div>
            <div className='first-follow show-more'>
                <a href=''>Show More</a>
            </div>
            
        </div>
    );
}

export default Followerslist;

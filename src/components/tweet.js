import React from 'react';
import { FaRegImage, FaPollH, FaRegSmile, FaCalendarCheck,FaMapMarkerAlt } from 'react-icons/fa'
import { MdGif} from 'react-icons/md'

const Tweet = () => {
    return (
        <div className='create-tweet'>
            <div className='create-first'>
                <div className='create-tweet-dp'>
                <img src='img/profile.jpg' />
                </div>
                <div className='create-inputfield'>
                    <input type='text' placeholder='What`s Happening?' className='inputbox'/>
                </div>
            </div>
            <div className='create-second'>
                    <div className='create-logo'>
                    <a href=''><FaRegImage /></a>
                    <a href=''><MdGif/></a>
                    <a href=''>< FaPollH/></a>
                    <a href=''>< FaRegSmile/></a>
                    <a href=''>< FaCalendarCheck/></a>
                    <a href=''><FaMapMarkerAlt/></a>
                    </div>
                    <div className='create-tweet-btn'>
                        <a href=''>Tweet</a>
                    </div>
            </div>
            
        </div>
    );
}

export default Tweet;



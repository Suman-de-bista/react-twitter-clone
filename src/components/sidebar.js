import React from 'react';
import { FaTwitter,FaHome,FaHashtag,FaRegBell,FaRegEnvelope,FaRegBookmark,FaClipboardList,FaUserAlt,FaMehBlank} from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul>
                <li>
                    <a href=''>
                        <FaTwitter className='logo twitter-logo'/>
                    </a>
                </li>
                <li>
                    <a href=''>
                        <FaHome className='logo'/>
                        Home
                    </a>
                </li>
                <li>
                    <a href=''>
                        <FaHashtag className='logo'/>
                        Explore
                    </a>
                </li>
                <li>
                    <a href=''>
                        <FaRegBell className='logo'/>
                        Notifications
                    </a>
                </li>
                <li>
                    <a href=''>
                        <FaRegEnvelope className='logo'/>
                        Messages
                    </a>
                </li>
                <li>
                    <a href=''>
                        <FaRegBookmark className='logo'/>
                        Bookmarks
                    </a>
                </li>
                <li>
                    <a href=''>
                        <FaClipboardList className='logo'/>
                        Lists
                    </a>
                </li>
                <li>
                    <a href=''>
                        <FaUserAlt className='logo'/>
                        Profile
                    </a>
                </li>
                <li>
                    <a href=''>
                        <FaMehBlank className='logo'/>
                        More
                    </a>
                </li>
                <li>
                    <a href='' className='tweet-button'>
                        Tweet
                    </a>
                </li>
            </ul>
            
        </div>
    );
}

export default Sidebar;

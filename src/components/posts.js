import React from 'react';
import {FaRegComment,FaRetweet} from 'react-icons/fa'
import {MdVerified} from 'react-icons/md'
import {FiMoreHorizontal,FiHeart,FiShare} from 'react-icons/fi'

const Posts = () => {
    const tweets = [
        {
        id:1,
        dp:<img src='img/icc.jpg'/>,
        name: 'ICC' ,
        username:'@ICC',
        badge:true,
        time: '  4h',
        post:'Heres the Pakistan squad which will face-off against Australia in a three-match Test series Will they prevail in their home conditions? ',
        photo: <img src='img/icc-post.jfif' />,
        comment: '104',
        retweet:'342',
        likes:'5k'  
    },
    {
        id:2,
        dp:<img src='img/ronb.jpg'/>,
        name: 'Routine of Nepal banda' ,
        username:'@RONBupdates',
        badge:false,
        time: '  2h',
        post:'Historic: Nepali Captains Vijay Lama and Shravan Rijal becomes the trainer of the first widebody in the aviation history of Nepal. ❤Flag of Nepal',
        photo: <img src='img/ronb-post.jfif' />,
        comment: '',
        retweet:'8',
        likes:'201'  
    }
]

    let verifiedBadge;
    if(tweets.badge){
        verifiedBadge = <MdVerified/>
    }

    

    
    return (
        <div className='posts-number'>

            {tweets.map((number)=>(
                <div key = {number.id} className='posts'>
                    <div className='post-dp'>
                {number.dp}
            </div>
            <div className='post-details'>
                <div className='post-row'>
                    <div className='post-head'>
                        <div className=' post-name'>
                            <a href=''>{number.name}</a>
                        </div>
                        <div className='post-first post-badge'>
                            {verifiedBadge}
                        </div>
                        <div className='post-first post-username'>
                            {number.username}
                        </div>
                        <div className='post-first post-time'>
                            ·{number.time}
                        </div>
                        </div>
                        <div className='post-more-opt'>
                            <FiMoreHorizontal/>
                        </div>
                    </div>
                    <div className='post-tweet'>
                        {number.post}
                    </div>
                    <div className='post-photo'>
                        {number.photo}
                    </div>
                    <div className='post-react'>
                        <div className='react post-comment'>
                            <FaRegComment/>
                            <span>{number.comment}</span>
                        </div>
                        <div className='react post-retweet'>
                            <FaRetweet/>
                            <span>{number.retweet}</span>
                        </div>
                        <div className='react post-like'>
                            <FiHeart/>
                            <span>{number.likes}</span>
                        </div>
                        <div className='react post-share'>
                            <FiShare/>
                        </div>
                    </div>
                </div>
                </div>
            ))}
            
            </div>
    );
}

export default Posts;

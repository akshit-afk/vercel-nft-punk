import React from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import more from '../assets/owner/more.png'
import { useState,useEffect } from 'react'
import './main.css'
import weth from '../assets/weth.png'
const Main = ({punkListData,selectedPunk}) => {
    const [activePunk ,setActivePunk] = useState(punkListData[0]);
    useEffect(()=>{
        setActivePunk(punkListData[selectedPunk])
    },[punkListData,selectedPunk])
    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='punkHighlight'>
                  <div className='punkContainer'>
                      <img src = {activePunk.image_original_url}
                       className="selectedPunk"
                        alt =""></img>
                  </div>
                </div>

                <div className='punkDetails' style = {{color : '#fff'}}>
                  <div className = 'title'>
                      {activePunk.name}
                      <span className='itemNumber'>•#{activePunk.token_id}</span>
                  </div>
                  <div className='priceContainer'>
                      <img src = {weth} className='maineth' alt = ""></img>
                  <div className='price' style={{color : '#fff'}}>{activePunk.traits[0]?.value}</div></div>
                  <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img src = {activePunk.owner.profile_img_url} alt = ""></img>

                    </div>
                    <div className='ownerDetails'>
                        <div className='ownerNameAndHandle' style={{color :'#fff'}}>
                            <div>{activePunk.owner.address}</div>
                            <div className='ownerHandle'>@akshit</div>
                            </div>
                            <div className='ownerLink'>
                                <img src ={instagramLogo} alt = ""></img>
                            </div>
                            <div className='ownerLink'>
                                <img src ={twitterLogo} alt = ""></img>
                            </div><div className='ownerLink'>
                                <img src ={more} alt = ""></img>
                            </div>
                        </div>
                    </div>
                
                </div>
               
                

                </div>
            </div>
        
    )
}

export default Main

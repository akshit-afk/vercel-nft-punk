import React from 'react'
import "./header.css"
import punkLogo from "../assets/header/cryptopunk-logo.png"
import searchIcon from "../assets/header/search.png"
import themeIcon from "../assets/header/theme-switch.png"

const Header = () => {
    return (
        <div className='header'>

        <div className='logo-container'>
            <img src = {punkLogo} className ='punkLogo' alt =""></img>
        </div>
        <div className='search-bar'>
            <div className='serachIconcontainer'>
                <img src = {searchIcon} className = 'searchIcon' alt = ""></img>
              </div>
              <input className = 'serachInput'type="text" placeholder='Collection,item or user...'></input>
        </div>
        <div className='headerItems'>
         <p>Drops</p>
         <p>Marketplace</p>
         <p>Create</p>

        </div>
        <div className ="headerActions">
          <div className = "themeSwitchContainer">
              <img src = {themeIcon} className='themeIcon' alt= ""></img>
          </div>
        </div>
        <div className='loginButton'>
          GET IN
        </div>
      </div>
    )
}

export default Header

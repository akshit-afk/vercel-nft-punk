import React from 'react'
import Collectioncard from './collectioncard'
import './punklist.css'

const Punklist = ({punkListData , setselectedPunk}) => {
    return (
        <div className='punklist'>
            {punkListData.map(punk => (
                <div onClick={() =>//console.log(punk.token_id)
                setselectedPunk(punk.token_id)
            }>
                    <Collectioncard id = {punk.token_id} name = {punk.name} traits = {punk.traits} image = {punk.image_original_url}/>
                    </div>
            ))}
        </div>
    )
}

export default Punklist

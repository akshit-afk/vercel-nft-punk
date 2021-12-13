
import './App.css';
import Header from './components/header';
import Punklist from './components/punklist';
import { useEffect,useState } from 'react'
import axios from 'axios'
import Main from './components/main';

function App() {
  const [punkListData , setpunkListData] = useState([])
  const [selectedPunk , setselectedPunk] = useState(0)
  useEffect(()=>{
   const getMyNfts = async () =>{
       const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x8FD46941d37d655bE33bB04C23d2c21527a5ccC1&order_direction=asc')
       setpunkListData(openSeaData.data.assets);
       console.log(openSeaData.data.assets);
   }
   return getMyNfts()
  },[])
  return (
    <div className='app'>
    <Header />
    { punkListData.length > 0 && (
      <>
      <Main punkListData = {punkListData} selectedPunk = {selectedPunk} />
    <Punklist punkListData = {punkListData} setselectedPunk = {setselectedPunk} />
      </>
    )}
    
    </div>
  );

}

export default App;

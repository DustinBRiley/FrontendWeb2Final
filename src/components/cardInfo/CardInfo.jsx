import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const CardInfo = () => {
  const { setCardSet } = useContext(CartContext)
  const [cardNum, setCardNum] = useState("")
  const [ccv, setCCV] = useState("")
  const [exp, setExp] = useState("")
  const [zip, setZip] = useState("")
  const cardform = document.getElementById('cardform')
  const cardNumh2s = document.getElementById('cardNumh2s')
  function handleSubmit(e) {
    e.preventDefault()
    setCardSet(true)
    cardform.style.display = "none"
    cardNumh2s.style.display = "block"
  }
  return (
    <div className='flex flex-direction-column justify-between text-lg h-full m-4 p-4 border w-1/2'>
      <div id='cardNumh2s' style={{display: "none"}} className=''>
        <h2 className='text-lg m-4'>Card #: {cardNum}</h2>
        <h2 className='text-lg m-4'>CCV: {ccv}</h2>
        <h2 className='text-lg m-4'>Expiration Date: {exp}</h2>
        <h2 className='text-lg m-4'>Zip: {zip}</h2>
        <button className='border bg-yellow-700'
          onClick={()=>{
            setCardSet(false)
          cardNumh2s.style.display = "none"
          cardform.style.display = "block"
          }}>Change cardNum</button>
      </div>
      <div>
        <form id='cardform' onSubmit={handleSubmit}>
          <label htmlFor="cardNum">Card #: </label>
          <input className='border m-2' id='cardNum' value={cardNum} onChange={(e) => {setCardNum(e.target.value)}}></input>
          <br></br>
          <label htmlFor="ccv">CCV: </label>
          <input className='border m-2' id='ccv' value={ccv} onChange={(e) => {setCCV(e.target.value)}}></input>
          <br></br>
          <label htmlFor="exp">Expiration Date: </label>
          <input className='border m-2' id='exp' value={exp} onChange={(e) => {setExp(e.target.value)}}></input>
          <br></br>
          <label htmlFor="zip">Zip: </label>
          <input className='border m-2' id='zip' value={zip} onChange={(e) => {setZip(e.target.value)}}></input>
          <br></br>
          <button className='border bg-yellow-700' type='Submit'>Use cardNum</button>
        </form>
      </div>
    </div>
  )
}

export default CardInfo
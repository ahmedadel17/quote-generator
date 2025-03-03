import './App.css';
import React, {useState} from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import {FacebookShareButton, TwitterShareButton, WhatsappShareButton} from "react-share";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Twitter } from '@mui/icons-material';
const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  }
  const [quote, setQuote] = useState(quoteData)

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data)
      });
  }

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert('copied')
  }
 
  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
      <TwitterShareButton url='https://www.facebook.com/elbastawesy17/'  title={`"${quote.content}" - ${quote.author}`}>
      <Twitter size={40}sx={{color:'white'}}/>
      </TwitterShareButton>
      <FacebookShareButton url='https://www.facebook.com/elbastawesy17/'  title={`"${quote.content}" - ${quote.author}`}>
      <FacebookIcon size={40} sx={{color:'white'}}/>
      </FacebookShareButton>
      <WhatsappShareButton url='https://www.Whatsapp.com/elbastawesy17/'  title={`"${quote.content}" - ${quote.author}`}>
      <WhatsAppIcon size={40}sx={{color:'white'}}/>
      </WhatsappShareButton>
      </div>
    </>
  )
}


export default App;

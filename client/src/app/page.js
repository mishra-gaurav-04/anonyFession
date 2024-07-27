"use client"
import React, { useState } from 'react'
import "./page.scss"

const App = () => {
  const [toastMsg, setToastMsg] = useState(false);
  const [confession, setConfession] = useState('');

  // function to send data to server
  const send = async (body) => {
    const response = await fetch('https://anonymous-confession-9zv7.onrender.com/send', {
      method: "POST",
      headers: { "Content-Type": "application/json" }, body
    })
    let result = await response.json();
    if (result) {
      setToastMsg('✅Confession sent successfully✅')
      setTimeout(() => {
        setToastMsg(false)
      }, 2000);
    } else {
      setToastMsg('❌Error sending confession❌')
      setTimeout(() => {
        setToastMsg(false)
      }, 2000);
    }
  }

  // handle chnage for confession box to recors confession
  const handleChange = (e) => { setConfession(e.target.value) }

  // handle submit fuction for the form
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (confession !== '') {
        let date = new Date().toLocaleString();
        let msgObj = {
          platform: navigator.platform,
          appName: navigator.appName,
          appVersion: navigator.appVersion,
          deviceMemory: navigator.deviceMemory,
          message: confession,
          read: false,
          date
        }
        send(JSON.stringify(msgObj));
      } else {
        setToastMsg('☠️Where is confession NOOB☠️')
        setTimeout(() => {
          setToastMsg(false)
        }, 2000);
      }
    } catch (error) {
      console.log('handleSubmit function failed...');
    }
  }

  return (
    <div>
      <form>
        <h1>GPC CONFESS</h1>
        <textarea
          type='text'
          placeholder='Enter your confession here :)'
          onChange={handleChange}
        />
        <div className="box">
          <button className="button" onClick={handleSubmit}>Submit Confession</button>
          <div className="space">
            <span style={{ '--i': 31 }} className="star"></span>
            <span style={{ '--i': 12 }} className="star"></span>
            <span style={{ '--i': 57 }} className="star"></span>
            <span style={{ '--i': 93 }} className="star"></span>
            <span style={{ '--i': 23 }} className="star"></span>
            <span style={{ '--i': 70 }} className="star"></span>
            <span style={{ '--i': 6 }} className="star"></span>
          </div>
        </div>
      </form>
      {toastMsg && <Toast toastMsg={toastMsg} />}
    </div>
  )
}

export default App;

const Toast = ({ toastMsg }) => {
  return (<div className='toast'>
    <p>{toastMsg}</p>
  </div>)
}
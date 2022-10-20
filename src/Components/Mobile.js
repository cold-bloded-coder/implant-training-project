import React from 'react'
import Calendar from './Calendar/Calendar'
import Header from './MobileComponents/Header'

const Mobile = () => {
  return (
    <div className="font-pop">
      <Header title="Attendence"></Header>
      <Calendar></Calendar>
    </div>
  )
}

export default Mobile

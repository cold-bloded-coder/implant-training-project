import React from 'react'
import {Card} from './Card';
import {WeekAttendence} from './WeekAttendence';

export function Main() {
  return (
    <div className='flex my-5 mx-52 gap-x-4'>
      <Card></Card>
      <WeekAttendence></WeekAttendence>
    </div>
  )
}

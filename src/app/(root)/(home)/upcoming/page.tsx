'use client'
import CallList from '@/components/ui/CallList'
import React from 'react'

const Upcoming = () => {
  return (
    <div className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Upcoming Meeting</h1>

        <CallList type="upcoming"/>

    </div>
  )
}

export default Upcoming
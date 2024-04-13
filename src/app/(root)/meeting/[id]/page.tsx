/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Loader from '@/components/ui/Loader'
import MeetingRoom from '@/components/ui/MeetingRoom'
import MeetingSetup from '@/components/ui/MeetingSetup'
import { useGetCallById } from '@/hooks/useGetCallById'
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk'
import React, { useState } from 'react'

const meeting = ({params :{id}} : {params: {id: string}}) => {
    const {user, isLoaded} = useUser()
    const [isSetupComplete, setIsSetupComplete] = useState(false)
    const {call , isCallLoading} = useGetCallById(id)
    if(!isLoaded || isCallLoading) return <Loader/>
    return (
    <div className='h-screen w-full'>
      <StreamCall call={call}>
        <StreamTheme>
          {
            !isSetupComplete ? (
              <MeetingSetup setIsSetupComplete={setIsSetupComplete}/>
            ) : (
              <MeetingRoom/>
            )
          }
        </StreamTheme>
      </StreamCall>
    </div>
  )
}

export default meeting
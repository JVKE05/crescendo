import React from 'react'
import { Button } from './ui/button'

type Props = {}

const Piano = (props: Props) => {
  return (
    <div className='flex flex-col gap-0.5 select-none items-center'>
        <div className='flex relative -left-69'>
            <Button className='absolute h-24 left-8' />
            <Button className='absolute h-24 left-22' />
            <Button className='absolute h-24 left-46' />
            <Button className='absolute h-24 left-60' />
            <Button className='absolute h-24 left-72' />
            <Button className='absolute h-24 left-96' />
            <Button className='absolute h-24 left-110' />
        </div>
        <div className='flex gap-0.5'>
            <Button className='bg-white border border-black h-40 w-12' />
            <Button className='bg-white border border-black h-40 w-12' />
            <Button className='bg-white border border-black h-40 w-12' />
            <Button className='bg-white border border-black h-40 w-12' />
            <Button className='bg-white border border-black h-40 w-12' />
            <Button className='bg-white border border-black h-40 w-12' />
            <Button className='bg-white border border-black h-40 w-12' />
            <Button className='bg-white border border-black h-40 w-12' />
            <Button className='bg-white border border-black h-40 w-12' />
            <Button className='bg-white border border-black h-40 w-12' />
            <Button className='bg-white border border-black h-40 w-12' />
        </div>
    </div>
  )
}

export default Piano
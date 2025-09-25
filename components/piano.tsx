"use client"

import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import * as Tone from 'tone'

const Piano = () => {
  const synth = useRef<Tone.PolySynth | null>(null);
  
  useEffect(() => {
    // Clean up the synth when the component unmounts
    synth.current = new Tone.PolySynth(Tone.Synth).toDestination();
  }, []);


  return (
    <div className='flex flex-col gap-0.5 select-none items-center'>
        <div className='flex relative -left-69'>
            <Button className='absolute h-24 left-8' onMouseDown={() => synth.current?.triggerAttackRelease("C#4", 0.2)}/>
            <Button className='absolute h-24 left-22' onMouseDown={() => synth.current?.triggerAttackRelease("D#4", 0.2)}/>
            <Button className='absolute h-24 left-46' onMouseDown={() => synth.current?.triggerAttackRelease("F#4", 0.2)}/>
            <Button className='absolute h-24 left-60' onMouseDown={() => synth.current?.triggerAttackRelease("G#4", 0.2)}/>
            <Button className='absolute h-24 left-72' onMouseDown={() => synth.current?.triggerAttackRelease("A#4", 0.2)}/>
            <Button className='absolute h-24 left-96' onMouseDown={() => synth.current?.triggerAttackRelease("C#5", 0.2)}/>
            <Button className='absolute h-24 left-110' onMouseDown={() => synth.current?.triggerAttackRelease("D#5", 0.2)}/>
        </div>
        <div className='flex gap-0.5'>
            <Button className='bg-white border border-black h-40 w-12' onMouseDown={() => synth.current?.triggerAttackRelease("C4", 0.2)}/>
            <Button className='bg-white border border-black h-40 w-12' onMouseDown={() => synth.current?.triggerAttackRelease("D4", 0.2)}/>
            <Button className='bg-white border border-black h-40 w-12' onMouseDown={() => synth.current?.triggerAttackRelease("E4", 0.2)}/>
            <Button className='bg-white border border-black h-40 w-12' onMouseDown={() => synth.current?.triggerAttackRelease("F4", 0.2)}/>
            <Button className='bg-white border border-black h-40 w-12' onMouseDown={() => synth.current?.triggerAttackRelease("G4", 0.2)}/>
            <Button className='bg-white border border-black h-40 w-12' onMouseDown={() => synth.current?.triggerAttackRelease("A4", 0.2)}/>
            <Button className='bg-white border border-black h-40 w-12' onMouseDown={() => synth.current?.triggerAttackRelease("B4", 0.2)}/>
            <Button className='bg-white border border-black h-40 w-12' onMouseDown={() => synth.current?.triggerAttackRelease("C5", 0.2)}/>
            <Button className='bg-white border border-black h-40 w-12' onMouseDown={() => synth.current?.triggerAttackRelease("D5", 0.2)}/>
            <Button className='bg-white border border-black h-40 w-12' onMouseDown={() => synth.current?.triggerAttackRelease("E5", 0.2)}/>
            <Button className='bg-white border border-black h-40 w-12' onMouseDown={() => synth.current?.triggerAttackRelease("F5", 0.2)}/>
        </div>
    </div>
  )
}

export default Piano
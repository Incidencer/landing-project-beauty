import React from 'react'

import ReactPlayer from 'react-player'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Image from 'next/image'

const ModalVideo = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <div className='flex gap-4 items-center'>
                    <button className='relative w-[58px] h-[58px] bg-white rounded-full flex items-center justify-center shadow-2xl shadow-accent'>
                        <Image src="/assets/home/play.svg" width={36} height={36} alt="" />
                    </button>
                    <span className='text-lg font-primary'>Watch Video</span>
                </div>
            </DialogTrigger>
            <DialogContent>
                <ReactPlayer width={"100%"} height={"100%"} url="https://youtu.be/PDJLvF1dUek?si=Af3ATI6gdzOcLtxw" />
            </DialogContent>
        </Dialog>
    )
}

export default ModalVideo
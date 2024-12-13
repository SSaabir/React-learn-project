import React from 'react'
import { Button } from 'flowbite-react'

function User() {
    return(
        <div className="text-center justify-center bg-gray-700 rounded-lg text-gray-200 pt-2 w-80 max-w-full">
            <span className="text-black bg-red-600 rounded-sm text-sm font-bold px-3 py-7 absolute top-3 left-10">ONLINE</span>
            <img src="./images/th-3760927380.jpg" className='w-24 ring-2 ring-blue-400 rounded-full' alt="user" />
            <h3 className="my-2.5">Full Name</h3>
            <h3 className="my-2.5">City</h3>
            <p className="text-m leading-normal text-center">Work</p>
            <div className="flex justify-center gap-5">
                <Button className="bg-blue-400 border rounded-md font-bold px-3 py-1">Message</Button>
                <Button className="bg-transparent border border-cyan-400 rounded-md font-bold px-3 py-1">Following</Button>
            </div>
            <div className="text-left p-4 mt-4">
                <h6 className="my-5">Skills</h6>
                <ul className='m-0 p-0'>
                    <li className='border border-gray-100 inline-block p-2 mx-2 text-sm'>HTML</li>
                    <li className='border border-gray-100 inline-block p-2 mx-2 text-sm'>Javascript</li>
                    <li className='border border-gray-100 inline-block p-2 mx-2 text-sm'>Figma</li>
                    <li className='border border-gray-100 inline-block p-2 mx-2 text-sm'>.net</li>
                    <li className='border border-gray-100 inline-block p-2 mx-2 text-sm'>Cyber</li>
                    <li className='border border-gray-100 inline-block p-2 mx-2 text-sm'>George</li>
                </ul>
            </div>
        </div>
    )
}

export const UserCard = () => {
  return (
        <User />
  )
}

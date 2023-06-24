import { Home, LayoutGrid, Palette, Wand2, Bell, FolderClosed, UploadCloud, Settings } from 'lucide-react'
import Image from 'next/image'

import Logo from '@/assets/img/logo.png'

export default function Navbar() {
  return (
    <>
    <div className="w-60 h-5/6 bg-[#111727] rounded-xl pt-8 pl-3 text-zinc-50">
      <div className="flex gap-1 tracking-wide font-semibold">
        <Image src={Logo} alt='logo' width={30} height={30} />
        <h1 className="">Untitled UI</h1>
      </div>

      <div className="pt-3">
        <span className="text-[10px]">DASHBOARD</span>     
      </div>
      <div className="pt-4 pl-3 flex gap-2 text-sm items-center cursor-pointer">
        <Home width={22} />
        <span>Overview</span>
      </div>
      <div className="pt-4 pl-3 flex gap-2 text-sm items-center cursor-pointer">
        <LayoutGrid width={22} />
        <span>Current projects</span>
        <span className="ml-4 px-2 bg-[#404856] rounded-xl text-sm cursor-pointer">10</span>
      </div>

      <div className="pt-3">
        <span className="text-[10px]">EDITOR</span>     
      </div>

      <div className="pt-4 pl-3 flex gap-2 text-sm items-center cursor-pointer">
        <Palette width={22} />
        <span>Designer</span>
      </div>

      <div className="pt-4 pl-3 flex gap-2 text-sm items-center cursor-pointer">
        <Wand2 />
        <span>Magic build</span>
      </div>

      <div className="pt-4 pl-3 flex gap-2 text-sm items-center cursor-pointer">
        <Bell width={22} />
        <span>Notifications</span>
      </div>

      <div className="pt-4 pl-3 flex gap-2 text-sm items-center cursor-pointer">
        <FolderClosed width={22} />
        <span>Current projects</span>
      </div>

      <div className="pt-4 pl-3 flex gap-2 text-sm items-center cursor-pointer">
        <UploadCloud width={22} />
        <span>Upload new</span>
      </div>

      <div className="pl-3 mr-3 flex gap-2 text-sm items-center transition ease-in delay-75 bg-[#404856] cursor-pointer hover:bg-[#353c47] h-9 mt-12 rounded-lg">
        <Settings width={22} className=""/>
        <span>Settings</span>
      </div>
    </div>
    </>
  )
} 
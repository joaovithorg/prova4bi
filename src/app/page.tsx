import Image from 'next/image'
import codegirl from '@/img/codegirl.png'
import logo from '@/img/Logo.png'

export default function Home() {
  return (
    <>
    <main className='bg-stone-800 max-h-screen h-screen lg:bg-background lg:bg-cover flex flex-col'>

      <div className='p-4 lg:p-16 mt-32 flex-1 flex-col justify-between'>
        <div className='justify-center flex'>
        <Image src={logo} alt='' width={240} ></Image>
        </div>
        <div className='flex flex-col gap-4 mt-44'>
          <h1 className='text-2xl lg:text-5xl/snug text-white' >Nome de usuario</h1>
          <input type='text' className='bg-stone-700 p-4 border rounded-lg'/>
          <h1 className='text-2xl lg:text-5xl/snug text-white mt-4' >Senha</h1>
          <input type='text' className='bg-stone-700 p-4 border rounded-lg'/>
          <button className='bg-rose-700 active:bg-indigo-950 hover:bg-indigo-950 text-white font-bold rounded-lg w-full lg:w-72 p-4'>Entrar </button>
          <button className='bg-gray-300 active:bg-indigo-950 hover:bg-indigo-950 text-pink-600 font-bold rounded-lg w-full lg:w-72 p-4'>Esqueci minha senha </button>
        </div>
      </div>
    </main>
    </>
  )
}

export default function home() {

return (
    <div className='w-screen grid place-items-center'>
        <h2 className='p-10 font-bold text-4xl'>Ce blog utilise</h2>
        <ul className='p-10 text-3xl place-items-center'>
          <li className='p-1' >TypeScript</li>
          <li className='p-1' >React</li>
          <li className='p-1' >Sonner Toast</li>
          <li className="p-1" >Json Server</li>
          <li className='p-1' >Tailwind CSS</li>
          <li className='p-1' >...</li>
        </ul>
    </div>
  )
}
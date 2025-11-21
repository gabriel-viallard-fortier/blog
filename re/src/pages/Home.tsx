export default function home() {

return (
  <>
  <div className="flex justify-around p-15">
    <div className='flex flex-col place-items-center'>
        <h2 className='p-10 font-bold text-2xl'><mark>Ce blog utilise</mark></h2>
        <ol className='p-1 list-decimal text-2xl '>
          <li className='p-1  ' >TypeScript</li>
          <li className='p-1' >React</li>
          <li className="p-1" >Json Server</li>
          <li className='p-1' >Tailwind CSS</li>
          <li className='p-1' >Sonner Toast</li>
        </ol>
    </div>
    <div className='flex flex-col place-items-center'>
        <h2 className='p-10 font-bold text-2xl'><mark>TODO</mark></h2>
        <ol className='p-1 list-decimal text-2xl'>
          <li className="p-1">Responsive</li>
          <li className="p-1">Stockage des likes</li>
          <li className="p-1">Confirmation de suppression</li>
          <li className="p-1">Upload images</li>
          <li className="p-1">Ajout des dates</li>
        </ol>
    </div>
  </div>
    <div className="p-15 flex justify-center m-auto text-center text-2xl ">
      <figure>
        <audio controls src="/piano.wav"></audio>
      </figure>
    </div>
  </>
  )
}
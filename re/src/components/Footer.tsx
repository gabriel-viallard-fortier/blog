
export default function Footer() {

    return (
        
        <div className='w-full md:w-screen lg:w-screen bg-blue-300 flex flex-col place-items-center'>
            
           <h3 className='text-2xl p-5 content-center font-bold'>Liens externes</h3>
            <div className='justify-center m-auto gap-5 flex '>
                <a href="https://www.youtube.com/@une-bouteille-a-la-mer" target="_blank">
                    <img src="/yt-logo.png" className="logo react" alt="YT logo" />
                </a>
                <a href="https://soundcloud.com/une-bouteille-a-la-mer" target="_blank">
                    <img src="/sc-logo.png" className="logo react" alt="SC logo" />
                </a>
            </div>
        
            </div>
        );
}
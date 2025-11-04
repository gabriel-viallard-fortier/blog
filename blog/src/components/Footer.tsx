import ytLogo from '/yt-logo.png';
import scLogo from '/sc-logo.png';

export default function Footer() {
    return (
        <div className='bg-black w-screen place-items-center'>
           <h3 className='text-2xl p-5 content-center font-bold'>A propos</h3>
            <div className='justify-center m-auto gap-5 flex '>
                <a href="https://vite.dev" target="_blank">
                    <img src={ytLogo} className="logo react" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={scLogo} className="logo react" alt="React logo" />
                </a>
            </div>
        </div>
    );
}
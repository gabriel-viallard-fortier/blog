import tigerImg from '/tiger.jpg'
export default function ArticleThumbnail() {
    return (
        <div className='place-items-center p-5'>
            <h3 className="p-5 text-2xl">Un méchant article</h3>
            <img className="w-48" src={tigerImg} alt="tiger" />
        </div>
    );

}
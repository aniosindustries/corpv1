import stockimg from '../aniosindustries.png';

export default function Home(){

    const navigateToPageOnClick = (e) => {
        if(e.target.innerText === 'LEARN MORE'){
            window.location.href = '/upward';
    }
    }

    return(
        <div className="container">
            <div className="row align-items-center">
                <div className="col text-center">
                    <img src={stockimg} className='stock-img' alt='stock'/>
                </div>
                <div className="col home-cta">
                    <h1>INSPIRED BY THE PRESENT, INNOVATING THE FUTURE</h1>
                        <button onClick={navigateToPageOnClick}>LEARN MORE</button>
                </div>
            </div>
        </div>
    )
}
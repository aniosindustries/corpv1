import {useContext} from 'react';
import UserContext from '../context/UserContext';
import {ReactComponent as Logo} from '../aniosindustries.svg';
import UpwardLogin from './UpwardLogin';




function Upward(){
const {user} = useContext(UserContext);
        return (
            
        <div className='home-vision'>
            {user === null ? (<UpwardLogin/>) : ( 
        <>
            <Logo/>
                <div className='container text-center'>
                <p>
                Aníos Industries' flagship product is an app named Aníos, dedicated to making orbital launches and space tourism accessible to everyone. Ours will be the first platform to offer booking services for both payload launches and human travel. Think of us as Expedia, but for space travel. We offer different "experiences", depending on whether you have a payload to launch into orbit, or you want to book passage on any available launch vehicle. What really makes our platform tick is our different experiences for launch operators and port operators. This allows any registered operator to add their missions to different destinations. Plus, our platform will allow you to book a traditional flight from your home airport to the launch location's airport, making our booking experience as simple as possible.
                </p>
                </div>
        </>
        )}
        </div>
        ) 
}


export default Upward;




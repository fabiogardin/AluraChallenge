import { BiHomeAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function IconInicial(){
    return(

        <Link to='/' style={{   position: 'absolute', 
                                    left: '48px',
                                    top: '48px',
                                }} >
            <BiHomeAlt style={{fontSize: '30px', color:'#FFFFFF'}} />
        </Link>
    )
};

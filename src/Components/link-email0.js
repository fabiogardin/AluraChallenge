import { BiEnvelope } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function IconEmailInicio(){
    return(
        <Link to='/' style={{   position: 'absolute', 
                                        left: '125px',
                                        top: '48px',
                                    }} >
            <BiEnvelope style={{fontSize: '30px', color:'#FFFFFF'}} />
        </Link>
    )
};
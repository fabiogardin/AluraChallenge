import { BiMessageDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function IconContato(){
    return(

        <Link to='/mensagem' style={{   position: 'relative',
                                        top: '-20px',
                                }} >
            <BiMessageDetail style={{fontSize: '25px', color: '#2FBD99'}} />
        </Link>
    )
};
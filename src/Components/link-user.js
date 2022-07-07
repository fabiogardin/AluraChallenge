import { BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function IconAccount(){
    return(

        <Link to='/perfil' style={{ position: 'absolute',
                                    left: 'auto',
                                    right: '40px',
                                    top: '43px',
                                }} >
            <BiUserCircle style={{fontSize: '45px', color: '#2FBD99' }} />
        </Link>
    )
};
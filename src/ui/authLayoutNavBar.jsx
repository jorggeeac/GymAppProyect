import { NavLink, useNavigate } from "react-router-dom"
 import 'boxicons';
import './ui.css';
import { useDispatch, useSelector } from "react-redux";
import imagenDefault from "../assets/imagenDefaultDesign.jpg"
import { startLogout } from "../store/auth/thunks";

export const AuthLayoutNavBar = () => {

    const { displayName, photoURL } = useSelector(state => state.auth);
    
    const navigate = useNavigate();

    const dispatch = useDispatch();
    
    const logout = () => {
    dispatch(startLogout());
  
     navigate('/login');
    }
    
  return (
    <>
        <nav id="menu" className="main-menu menu">
            <ul>
                
                <li>
                    <NavLink className={ ({isActive}) => `subclassNav inicio ${isActive ? "active" : ""} `}
                        to="/inicio">  
                            <div className="prueba2">
                                <box-icon name='home' type='solid' size='22px' tagName="prueba4" style={{position: "relative", top: "3px" }}></box-icon>
                            </div>                
                            <span className="nav-text">
                            Home
                            </span> 
                    </NavLink>  
                </li> 

                <li >
                    <NavLink className={ ({isActive}) => `subclassNav rutinas ${isActive ? "active" : ""} `}
                        to="/rutinas">
                            <div className="prueba2">
                                <box-icon name='body' size='22px' className="box-icon" style={{position: "relative", top: "3px" }}></box-icon> 
                            </div>
                                <span className="nav-text">
                                Rutinas
                                </span> 
                    </NavLink>
                </li> 

                <li >
                    <NavLink className={ ({isActive}) => `subclassNav entrenadores ${isActive ? "active" : ""} `}
                        to="/entrenadores">
                        <div className="prueba2">
                                <box-icon type='solid' name='group' size='22px' className="box-icon" style={{position: "relative", top: "3px" }}></box-icon>
                            </div>    
                                <span className="nav-text">
                                Entrenadores
                                </span> 
                    </NavLink>
                </li> 

                <li > 
                    <NavLink className={ ({isActive}) => `subclassNav alimentacion ${isActive ? "active" : ""} `}
                        to="/alimentacion">
                            <div className="prueba2">
                                <box-icon name='restaurant' size='22px' className="box-icon" style={{position: "relative", top: "3px" }}></box-icon>
                            </div>   
                                <span className="nav-text">
                                Alimentación
                                </span> 
                    </NavLink>
                </li>

                <li > 
                    <NavLink className={ ({isActive}) => `subclassNav ejercicios ${isActive ? "active" : ""} `}
                        to="/ejercicios">
                            <div className="prueba2">
                                <box-icon name='dumbbell' size='22px' className="box-icon2" style={{position: "relative", top: "3px" }}></box-icon>
                            </div>   
                                <span className="nav-text">
                                Ejercicios
                                </span> 
                    </NavLink>
                </li> 
            </ul>

            <ul className="userProfile">
                <li>
                    <a className="subclassNav">
                        <div className="logoutNavBar">
                            <box-icon name='log-out' color='red' onClick={logout}></box-icon>
                        </div>
                    </a> 
                </li>

                <li className="prueba3">
                    <a className="subclassNav">
                        <div className="imgPhoto">
                            <img src={photoURL || imagenDefault } alt="foto de perfil" className="photoURL"/>
                        </div>

                        <span className="nav-text2">
                            {'hola '+ displayName }
                        </span>  
                    </a> 
                </li>
            </ul>
        </nav>
    </>
  )
}

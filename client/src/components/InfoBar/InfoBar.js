import './InfoBar.css';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

const InfoBar = ({room}) =>{
    return(
        <div className='infoBar'>
            <div className='leftInnerContainer'>
                <img className='onlineIcon' src = {onlineIcon} alt = ""/>
                <h3>{room}</h3>
            </div>
            <div className='rightInnerContainer'>
                <a href = "/" ><img src = {closeIcon} alt = ""/></a> {/*This is basically to refresh the query params and disconnect the socket*/}
            </div>
        </div>
    )
}

export default InfoBar;
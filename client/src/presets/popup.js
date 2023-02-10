import Fade from 'react-reveal/Fade'
import './css/popup.css';


export function BasicPopup(props) {
    let visible = true
    const popup = (
        <Fade>
            <div className="updatePopup">
                <div className="updatePopup_inner">
                    <div className="banner">
                        <button onClick={props.close}>X</button>
                    </div>
                    <div style={{overflow: 'auto'}}>
                        {props.children}
                    </div>
                </div>
            </div>
        </Fade>
    )
    return visible ? popup : null
}
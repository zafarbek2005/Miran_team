import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { gsap } from 'gsap';
import './snekbar.scss' 

const Snackbar = ({ message, onClose }) => {
    const nodeRef = React.useRef(null);

    return (
        <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            nodeRef={nodeRef}
            classNames="snackbar"
            onEnter={() => {
                gsap.fromTo(nodeRef.current, { y: -200, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
            }}
            onExit={() => {
                gsap.to(nodeRef.current, { y: -200, opacity: 0, duration: 0.5 });
            }}
        >
            <div ref={nodeRef} className="snackbar">
                <span>{message}</span>
                <button onClick={onClose}>Close</button>
            </div>
        </CSSTransition>
    );
};

export default Snackbar;

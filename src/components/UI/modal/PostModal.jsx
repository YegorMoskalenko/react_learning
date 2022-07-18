import React from 'react';
import cl from './PostModal.module.css'

const PostModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.postModal]
    if(visible === true){
        rootClasses.push(cl.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.postModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default PostModal;
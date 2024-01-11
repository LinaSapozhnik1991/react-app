import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';




const Dialogs = (props) => {

 


    let dialogsElement = props.state.dialogs.map( (dialog) => <DialogItem name = {dialog.name} id={dialog.id}/>);
    let messageElement = props.state.messages.map( message =>  <Message message = {message.message}/> );
    let newMessageElement = React.createRef();
    let addMessage=()=>{
        let letter = newMessageElement.current.value;
        alert(letter);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
              {dialogsElement}
        
            </div>
                <div className={s.messages}>
               { messageElement}
               <div className={s.textArea}>
                <textarea ref={newMessageElement}></textarea>
              </div>
              <div>
                <button onClick={addMessage}>New Message</button>
              </div>
                
              
                </div>
        </div>
    )
}

export default Dialogs;
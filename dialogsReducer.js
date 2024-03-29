
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState ={
  dialogs : [
    {id:1, name: 'Oleg'},
    {id:2, name: 'Igor'},
    {id:3, name: 'Sergey'},
    {id:4, name: 'LINA'}
    
],

messages : [
        {id:1, message: 'Hello!'},
        {id:2, message: 'Hi!'},
        {id:3, message: 'Good'},
        {id:4, message: 'Yo'},
],
  newMessageBody:'',
}
const dialogsReducer = (state = initialState,action) => {
 


  switch(action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };
    
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody :'',
        messages: [ ...state.messages, {id:6, message: body}],
      };
    default:
      return state;
  }
}

export const sendMessageCreator = () =>({type :SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
({type:UPDATE_NEW_MESSAGE_BODY, body:body});

export default dialogsReducer;
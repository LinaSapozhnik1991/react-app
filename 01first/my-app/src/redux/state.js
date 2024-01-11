let store = {
  _state : {

    profilePage: {
        posts : [
            {id:1, message: 'AAAAA!', likesCount:12},
            {id:2, message: 'What the fuck?!', likesCount:45},
            {id:3, message: 'My first post', likesCount: 1},
            
          ],
          newPostText: "hello"

    },

    dialogsPage: {

        dialogs : [
            {id:1, name: 'Oleg'},
            {id:2, name: 'Igor'},
            {id:3, name: 'Sergey'},
            {id:4, name: 'Lina'},
            {id:5, name: 'Lexus' },
          {id:6, name: 'Chuha'}],

        messages : [
                {id:1, message: 'Hello!'},
                {id:2, message: 'Hi!'},
                {id:3, message: 'Good'},
                {id:4, message: 'Yo'},
                {id:5,message:'haahahahhahha'}

            ]
}
  },
  getState(){
    return this._state
  },


  _rerenderEntairTree(){
    console.log('State  changed');

},
addPost(){

 let newPost = {
    id: 5 ,
    message: this._state.profilePage.newPostText,
    likesCount:0,
};

this._state.profilePage.posts.push(newPost);
this._state.profilePage.newPostText = '';
this._rerenderEntairTree(this._state)

},

updateNewPostText (newText){
this._state.profilePage.newPostText= newText;
  this._rerenderEntairTree(this._state);
  },

 subscribe  (observer){
  this._rerenderEntairTree= observer;
  }
}
  



window.store = store;
export default store;
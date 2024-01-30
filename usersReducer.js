const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLOW';
const SET_USERS= 'SET_USERS';


let initialState =  {
    users:[
    /*{id : 1, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRafG7T1jTh3VXibRpcpNHirHoWAitFD8kTSg&usqp=CAU',followed:false, fullName: 'Oleg', status:' I am big BOSS!',
        location :{city:'Tynda',country :'Russia'} },
        {id:2,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1ZwufoAlip13AOl0qP1sKhJskEB2pXYHAQ&usqp=CAU',followed:true,fullName: 'Igor', status:' It is cool!',
        location :{city:'Moscow',country :'Russia'} },
        {id:3,photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbVbQIN6DuYvHOFstazKuOlu_BYkr_UFTaJQ&usqp=CAU',followed:false,fullName: 'Sveta', status:' EYAA!',
        location :{city:'New-York',country :'USA'} },
        {id:4,photoUrl:'https://i.ucrazy.ru/files/pics/2023.10/2023-10-17-21-53-072.webp',followed:true,fullName: 'Anna', status:' I am happy!',
        location :{city:'Ankara',country :'Turkey'} },*/
    
    ]
    }
 const usersReducer = (state = initialState, action)=>
{
    switch(action.type){
        case FOLLOW:
          return {
                ...state,
            users: state.users.map( u => {
                if (u.id === action.userId){
                    return {...u, followed: true }
                }
                return u;
            })
        }

        case UNFOLLOW:
            return {
                ...state,
            users: state.users.map( u => {
                if (u.id === action.userId){
                    return {...u, followed: false }
                }
                return u;
            })
        }
        case SET_USERS: {
            return {
                ...state, users:action.users}
                 //users:[...state.users, ...action.users]
            }
        

default:
    return state;
    }

}



export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users })

export default usersReducer;
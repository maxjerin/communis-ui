const initialState = {
    token : null,
    isError: false,
    exception:""
}


const reducer = (state=initialState, action) => {

    switch(action.type){
        case "USER_LOGOUT": {
            return initialState
        }
        case "AUTHENTICATE_USER_FULFILLED": {
            return {...state,
                isError:false,
                token: action.payload,
                exception: ""
            }
        }
        case "AUTHENTICATE_USER_REJECTED":{
            return {...state,
                isError:true,
                exception : action.payload
            }
        }
    }

    return state
}

export default reducer



const AuthRoudecre = (state, action)=>{


    if(  typeof state == 'undefined'){

        return {


            data:{}
        }
    }

    switch(action.type){

      case "Login":

      return {

        ...state ,
         data: action.data
    }
      case "Logout":

      return {

        ...state , 
        data: {}
    }

      default:

      return {

        ...state
      }


    }};

export default AuthRoudecre;
    


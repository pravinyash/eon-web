import { actionLoginTypes } from "../constants/actionTypes";

const initialData = {
  fetchingUser: false,
  accessToken: "",
  refreshToken: "",
  userData: {},
  userRole: "",
  eventType: [],
  userProfile: {},
  questions: {},
  fetchingQuestions: false,
};

const userReducer = (state = initialData, action) => {
  switch (action.type) {
    case actionLoginTypes.SET_USER_FETCHING:
      return {
        ...state,
        fetchingUser: !state.fetchingUser,
      };
      case actionLoginTypes.USER_RECIEVED:
        return {
          ...state,
          accessToken: action.payload.access,
          refreshToken: action.payload.refresh,
          userData: action.payload.user,
          userRole: action.payload.user.role.role,
          fetchingUser: false,
        };
      case actionLoginTypes.GET_EVENT_TYPE:
        return {
          ...state,
          eventType: action.payload
        }
      case actionLoginTypes.USER_ERROR:
        return {
          ...state,
          fetchingUser:false,
          
        }
      case actionLoginTypes.LOG_OUT:
        return initialData;
      
      case actionLoginTypes.FETCHED_USER_PROFILE:
        return {
          ...state,
          userProfile: action.payload,
          fetchingUser: false,
        }
    default:
      return state;
  }
};
export default userReducer;

import { OPEN_THREAD } from '../../../utils/constants/chat-app';

function activeThreadIdReducer(state = '1-fca2', action) {
  switch (action.type) {
    case OPEN_THREAD: {
      console.log('active thread reducer ', action)
      return action.id
    }
    default: 
      return state;
  }
}

export default activeThreadIdReducer;
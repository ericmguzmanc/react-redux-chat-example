import { ADD_MESSAGE, DELETE_MESSAGE } from '../../../utils/constants/chat-app';

function findThreadIndex(threads, action) {
  switch (action.type) {
    case ADD_MESSAGE: {
      return threads.findIndex(
        (t) => t.id === action.threadId
      );
    }
    case DELETE_MESSAGE: {
      return threads.findIndex(
        (t) => t.messages.find((m) => (
          m.id === action.id
        )) 
      );
    }
    default: 
      return threads;
  }
}

export default findThreadIndex;
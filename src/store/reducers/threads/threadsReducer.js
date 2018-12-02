import findThreadIndex from './findThreadIndex';
import messagesReducer from '../messages/messagesReducer';
import { ADD_MESSAGE, DELETE_MESSAGE } from '../../../utils/constants/chat-app';

import uuid from 'uuid';

function threadsReducer(state = [
  {
    id: '1-fca2',
    title: 'Eric Guzman',
    messages: [
      {
        text: `I've been waiting for you...`,
        timestamp: Date.now(),
        id: uuid.v4()
      }
    ],
  },
  {
    id: '2-be91',
    title: 'Emily Rubens',
    messages: messagesReducer(undefined, {}),
  }
], action) {
  switch(action.type) {
    case ADD_MESSAGE:
    case DELETE_MESSAGE: {
      const threadIndex = findThreadIndex(state, action);

      const oldThread = state[threadIndex];
      const newThread = {
        ...oldThread,
        messages: messagesReducer(oldThread.messages, action)
      };

      return [
        ...state.slice(0, threadIndex),
        newThread,
        ...state.slice(
          threadIndex + 1, state.length
        )
      ];
    }
    default: 
      return state;
  }
}

export default threadsReducer;
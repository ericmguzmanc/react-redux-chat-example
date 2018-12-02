import { ADD_MESSAGE, DELETE_MESSAGE, OPEN_THREAD } from '../../utils/constants/chat-app';

export const addMessage = (text, threadId) => ({
  type: ADD_MESSAGE,
  text: text,
  threadId: threadId,
});

export const deleteMessage = (id) => ({
  type: DELETE_MESSAGE,
  id: id,
});

export const openThread = (id) => ({
  type: OPEN_THREAD,
  id: id,
}); 

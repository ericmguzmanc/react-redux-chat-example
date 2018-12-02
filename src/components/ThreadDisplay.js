import React from 'react';
import { connect } from 'react-redux';
import { deleteMessage, addMessage } from '../store/actions';
import MessageList from './MessageList';
import TextFieldSubmit from './TextFieldSubmit';

const Thread = (props) => (
  <div className='ui center aligned basic segment chat-panel'>
    <MessageList 
      messages={props.thread.messages}
      onClick={props.onMessageClick}
    />
    <TextFieldSubmit 
      onSubmit={props.onMessageSubmit}
    />
  </div>
);

const mapStateToProps = (state) => (
  {
    thread: state.threads.find(
      t => t.id === state.activeThreadId
    ),
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onMessageClick: (id) => (
      dispatch(deleteMessage(id))
    ),
    dispatch: dispatch,
  }
);

const mergeThreadProps = (stateProps, dispatchProps) => (
  {
    ...stateProps,
    ...dispatchProps,
    onMessageSubmit: (text) => (
      dispatchProps.dispatch(
        addMessage(text, stateProps.thread.id)
      )
    ),
  }
);

const ThreadDisplay = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeThreadProps
)(Thread);

export default ThreadDisplay;
import React from 'react';
import { connect } from 'react-redux';
import { openThread } from '../store/actions';

const Tabs = (props) => (
  <div className='ui top attached tabular menu'>
    {
      props.tabs.map((tab, index) => (
        <div
          className={tab.active ? 'active item' : 'item'}
          key={index}
          onClick={() => props.onClick(tab.id)}
        >
          <span role='img' aria-label='tab emoji'>🍕 &nbsp;</span>
          {tab.title}
        </div>
      ))
    }
  </div>
);

const mapStateToTabsProps = (state) => {
  const tabs = state.threads.map(t => (
    {
      title: t.title,
      active: t.id === state.activeThreadId,
      id: t.id,
    }
  ));
  return {
    tabs,
  }
};

const mapDispatchToProps = (dispatch) => (
  {
    onClick: (id) => (
      dispatch(openThread(id))
    ),
  }
);

const ThreadTabs = connect(
  mapStateToTabsProps,
  mapDispatchToProps,
)(Tabs);

export default ThreadTabs;
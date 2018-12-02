import React from 'react';

class TextFieldSubmit extends React.PureComponent {

  state = {
    value: ''
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value
    });
  };  

  handleSubmit = () => {
    this.props.onSubmit(this.state.value);
    this.setState({
      value: ''
    });
  };

  render () {
    return (
      <div className='ui input'>
        <input 
          onChange={this.onChange}
          value={this.state.value}
          type='text'
        />
        <button
          onClick={this.handleSubmit}
          className='ui basic button'
          type='submit'
        >
         <span role='img' aria-label='add emoji'>➕</span>
        </button>
      </div>
    );
  }
}

export default TextFieldSubmit;
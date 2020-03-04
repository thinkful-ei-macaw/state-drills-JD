import React from 'react';

class Accordion extends React.Component {
  constructor(props){
    super(props)
  }
  
  state = {
    clicked: null
  }

  handleClick(num) {
    console.log('clicked', num);
    this.setState(() => {
      return {clicked: num}
    });

    };
  
  // renderButtons() {
  //   return this.props.sections.map(() => (
  //   <li>
  //     <button>{this.props.sections.title}</button>
  //   </li>
  //   ))
  // }

  //   render() {
  //     return (
  //       <div>
  //         <ul>
  //           {this.renderButtons()}
  //         </ul>
  //       </div>
  //     )
  //   }

  render() {
    if (this.state.clicked === 0) {
      return (
        <ul>
          <li className="section1">
            <button onClick={e => this.handleClick(0)}>{this.props.sections[0].title}</button>
            <p>{this.props.sections[0].content}</p>
          </li>
          <li className="section2">
           <button onClick={e => this.handleClick(1)}>{this.props.sections[1].title}</button>
          </li>
          <li className="section3">
           <button onClick={e => this.handleClick(2)}>{this.props.sections[2].title}</button>
          </li>
      </ul>
      )
    } else if (this.state.clicked === 1) {
    return (
      <ul>
      <li className="section1">
        <button onClick={e => this.handleClick(0)}>{this.props.sections[0].title}</button>
      </li>
      <li className="section2">
       <button onClick={e => this.handleClick(1)}>{this.props.sections[1].title}</button>
       <p>{this.props.sections[1].content}</p>
      </li>
      <li className="section3">
       <button onClick={e => this.handleClick(2)}>{this.props.sections[2].title}</button>
      </li>
  </ul>
  )
  } else if (this.state.clicked === 2) {
    return (
      <ul>
      <li className="section1">
        <button onClick={e => this.handleClick(0)}>{this.props.sections[0].title}</button>
      </li>
      <li className="section2">
       <button onClick={e => this.handleClick(1)}>{this.props.sections[1].title}</button>
      </li>
      <li className="section3">
       <button onClick={e => this.handleClick(2)}>{this.props.sections[2].title}</button>
       <p>{this.props.sections[2].content}</p>
      </li>
  </ul>
    )
  } else {
    return (
      <ul>
      <li className="section1">
        <button onClick={e => this.handleClick(0)}>{this.props.sections[0].title}</button>
      </li>
      <li className="section2">
       <button onClick={e => this.handleClick(1)}>{this.props.sections[1].title}</button>
      </li>
      <li className="section3">
       <button onClick={e => this.handleClick(2)}>{this.props.sections[2].title}</button>
      </li>
  </ul>
    )
  }
  }
}

export default Accordion;
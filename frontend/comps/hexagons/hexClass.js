import React from 'react';

export default class HexComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      gons: "",
      hexWide: props.wide ?? 5,
      hexWidth: props.hexWidth ?? '100',
      hexHeight: props.hexHeight ?? '100'
    }
    
  }

  render() {
    return (
      <div className={'rowContainer'} /*style={""}*/ >
        <svg >
          {this.renderLoop}
        </svg>
      </div>
    );
  }
  
  renderLoop(){
  for (let i = 0; i < hexWide; i++) {
    gons.push(
  
      <g key={i}>
        <polygon className={'hex'}  fill="lime" stroke="blue" stroke-width="10" 
                   points="850,75 958,137.5 958,262.5 850,325 742,262.6 742,137.5" />
        <polygon className={'hex'} points="100,50 75,100 25,100 0,50 25,0 75,0"
          // onClick={() => alert("test")}  
          //onMouseOver={(e) => { this.fillStyle = "#FF0000";}}
          onMouseEnter={(e) => {console.log(e.target)}}
          onClick ={(e) => {console.log(e.target)}}
          //dangerouslySetInnerHTML
            >
        </polygon>
      </g>
  
    );
  }
}
  updateMessage(message) {
    this.setState({
      message: message
    });
  }
}

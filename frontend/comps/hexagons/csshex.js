import React, { useState } from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const hexValue = (['id: 23']);

export default class cssHex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      message: "",
      gons: "",
      hexWide: props.wide ?? 5,
      hexWidth: props.hexWidth ?? '100',
      hexHeight: props.hexHeight ?? '100',
      hexObjects: [
        ['tarzan','king of jungle', 100],
      'Mountain','test'
      ],
      arrOfObjects: [{ "a": 1, "b": 1 }, { "a": 2, "b": 2 }, { "a": 3, "b": 3 }]
    }
  }

  render() {
    return (
      <div style={styles}>
        <style>{``}</style>
        <div class="main">
          <div class="container">


            {this.props.message.stringify}
            <div id={this.state.id}
              onMouseEnter={(e) => { console.log(e.target.id)  }}
              onClick={(e) => { console.log(e.target) }}>

              {this.state.hexObjects.map((object, i) => 
              <p key={i} style={{fontSize:'10px'}}>
                      {i}: {JSON.stringify(object)}
              </p>)}
            </div>




            <div id={this.state.id}
              onMouseEnter={(e) => { console.log(e.target.id)  }}
              onClick={(e) => { console.log(e.target) }}>

              {this.state.arrOfObjects.map((item, i) => {
                return <li key={i}>{item.a} - {item.b}</li>
              })}

              {this.state.hexObjects.map((value, i, a) => 
              <p key={i} style={{fontSize:'10px'}}>
                {Object.keys(value)} :{Object.values(value)}
              </p>)}
            </div>


          </div>
        </div>
      </div>
    )
  }

}

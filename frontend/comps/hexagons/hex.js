
const HexRow = (props) => {
  let gons = [];
  const hexWide = props.wide ?? 5;
  const hexWidth = props.hexWidth ?? '100';
  const hexHeight = props.hexHeight ?? '100';

  const rowContainer = {
    // width:hexWide * 2 * hexWidth + "px" ,
    position: 'relative',display: 'inline-block'
  }
  const hexTile = {
    height: "100px", width: "100vw",
    //'margin-right':hexWidth*.5 +"px",
  }
  const hex = {}

  for (let i = 0; i < hexWide; i++) {
    gons.push(

      <g key={i}>
          <polygon className={'hex'}  fill="lime" stroke="blue" strokeWidth="10" 
            points="850,75 958,137.5 958,262.5 850,325 742,262.6 742,137.5" />
        <polygon className={'hex'} points="100,50 75,100 25,100 0,50 25,0 75,0"
          // onClick={() => alert("test")}  
          //onMouseOver={(e) => { this.fillStyle = "#FF0000";}}
          onMouseEnter={(e) => {console.log(e.target)}}
          onClick ={(e) => {console.log(e.target)}}
          // dangerouslySetInnerHTML
            >
        </polygon>
      </g>

    );
  }

  return (
    <div className={'rowContainer'} style={rowContainer} >
      <style>

      </style>
      <svg width="50vw" height="auto">
        {gons}
      </svg>

    </div>
  );
}

export default HexRow;
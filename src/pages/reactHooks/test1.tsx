import React from 'react';

export const Test1 = () => {

  const [num, setNumber] = React.useState(0);
  let timeId = 0;
  const handerClick = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        setNumber(num + 1)
        console.log(num, timeId)
      }, 1000)
    }
  }
  return <button onClick={handerClick} >{num} { timeId }</button>
};

// class Test1 extends React.Component<{}> {
//   constructor(props: any) {
//     super(props)
//     this.state = {
//       number: 0
//     }
//   }
//   handerClick = () => {
//     for (let i = 0; i < 5; i++) {
//       setTimeout(() => {
//         this.setState({ number: this.state.number + 1 })
//         console.log(this.state.number)
//       }, 1000)
//     }
//   }

//   render() {
//     return <div>
//       <button onClick={this.handerClick} >num++</button>
//     </div>
//   }
// }

// export default Test1;

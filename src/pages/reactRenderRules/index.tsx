import React from 'react';

interface SonProps {
  d: string;
}

function Son(props: SonProps) {
  const { d } = props;
  console.log('child render!');
  return <div>Son{d}</div>;
}

function Parent(props: any) {
  const [count, setCount] = React.useState(0);
  console.log(44, props);
  return (
    <div>
      <div onClick={() => { setCount(count + 1) }}>count:{count}</div>
      {/* <Son /> */}
      {props.children}
    </div>
  );
}


function App() {
  const d = 'name';
  
  return (
    <Parent>
      <Son d={d} />
    </Parent>
  );
}

export default App;
import React, { useState, useCallback, memo } from 'react';
import App from './reactRenderRules/index';
import styles from './index.scss'

interface HYButtonProps {
  title: string;
  count: number;
  increment: () => void;
}

const HYButton = memo((props: HYButtonProps) => {
  const { title, count } = props;
  console.log("HYButton重新渲染：" + title);
  return <button style={{ margin: '0 20px' }} onClick={props.increment}>{title}test{count}</button>
});

export default function CallbackHookDemo02() {
  console.log('----------------------');
  console.log("CallbackHookDemo02重新渲染");
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const increment1 = () => {
    console.log("执行increment1函数");
    setCount(count + 1);
  }
  const increment2 = useCallback(() => {
    console.log("执行increment2函数");
    setCount(count + 1);
  }, [setCount])
  return (
    <div style={{padding: 200}} className={styles.content}>
      <h2 style={{ marginBottom: 30 }}>CallbackHookDemo01：{count}</h2>
      {count}
      {/* <button onClick={increment1}>+1</button>
      <button onClick={increment2}>+1</button> */}
      <HYButton title="btn1" increment={increment1} />
      <HYButton title="btn2" increment={increment2} count={count} />
      <button onClick={e => setShow(!show)}>show切换</button>
      <App />
    </div>
  )
}
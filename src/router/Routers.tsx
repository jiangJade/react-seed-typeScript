import * as React from 'react';
import { Suspense, lazy } from 'react';
import { Spin } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import loading from './loading';

const Index = lazy(() => import('../pages/index'));

const Routers = () => (
  <Router>
    <div className="App">
      <Suspense fallback={<Spin className="spin-loading-class" tip="Loading...">请稍后。。。</Spin>}>
        <Route path="/" render={ () => <Index /> } />
      </Suspense>
    </div>
  </Router>
);

export default Routers;
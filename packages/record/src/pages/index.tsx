import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import history from '@/kit/history';
import 'regenerator-runtime/runtime';
import store from '@/redux/store';
import './index.less';
import TestPage from './test/main';

const App = () => (
  <LocaleProvider locale={zhCN}>
    <Provider store={store}>
      <Router history={history}>
        <div className="father">
          hello
          <TestPage></TestPage>
          {/*<Switch>*/}
            {/*<Route component={TestPage} />*/}
          {/*</Switch>*/}
        </div>
      </Router>
    </Provider>
  </LocaleProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

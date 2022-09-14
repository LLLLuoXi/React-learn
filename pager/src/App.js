/*
 * @Author: luoxi
 * @LastEditTime: 2022-09-05 00:54:38
 * @LastEditors: your name
 * @Description: 
 */

import './App.css';
import Pager from './components/Pager';
import PagerTest from './components/PagerTest';

function App() {
  return (
    <div className="App">
      {/* <Pager currentPage={1} total={20} limit={9} panelNumber={5} /> */}
      <PagerTest />
    </div>
  );
}

export default App;

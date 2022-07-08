import {
  // Router의 종류는 두 가지가 있다. 하나는 Browser Router, 다른 하나는 Hash Router
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';

// "/movie"가 "/"보다 위에 있어야 링크가 나옴
// Switch 를 사용하면 라우터가 한 번에 하나의 url만 처리할 수 있다.
function App() {
  return <Router>
    <Switch>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>;
}

export default App;

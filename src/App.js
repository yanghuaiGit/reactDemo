import React, {Component} from 'react'
import RequestView from './router/routerMain.js'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

const Topic = ({match}) => (
  <div>
    <h3>参数: {match.params.topicId}</h3>
  </div>
 )

class RouterView extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/router/routerMain.js">Rendering with React</Link>
            </li>
            <li>
              <Link to="/topics/components">Components</Link>
            </li>
            <li>
              <Link to="/topics/props-v-state">Props v. State</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/router" component={RequestView} />
            <Route path="/topics/:topicId" component={Topic} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default RouterView
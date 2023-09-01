import {Component} from 'react'
import './index.css'

export default class LatestMatch extends Component {
  render() {
    const {details} = this.props
    const {competingTeam} = details
    return (
      <div>
        <h1>{competingTeam}</h1>
      </div>
    )
  }
}

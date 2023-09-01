import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

export default class Home extends Component {
  state = {teamsData: []}

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl/')
    const data = await response.json()

    const formatData = data.teams.map(eachData => ({
      name: eachData.name,
      id: eachData.id,
      teamImageUrl: eachData.team_image_url,
    }))
    this.setState({teamsData: formatData})
  }

  render() {
    const {teamsData} = this.state
    return (
      <div className="home-container">
        <div className="title-container">
          <img
            className="title-image"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        <ul className="teams-container">
          {teamsData.map(each => (
            <TeamCard key={each.id} teams={each} />
          ))}
        </ul>
      </div>
    )
  }
}

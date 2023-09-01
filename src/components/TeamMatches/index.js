import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import './index.css'

export default class TeamMatches extends Component {
  state = {oneTeam: {}}

  componentDidMount() {
    this.getTeamDetails()
  }

  getLatestMatches = eachData => ({
    umpires: eachData.umpires,
    result: eachData.result,
    manOfTheMatch: eachData.man_of_the_match,
    id: eachData.id,
    date: eachData.date,
    venue: eachData.venue,
    competingTeam: eachData.competing_team,
    competingTeamLogo: eachData.competing_team_logo,
    firstInnings: eachData.first_innings,
    secondInnings: eachData.second_innings,
    matchStatus: eachData.match_status,
  })

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatch: this.getLatestMatches(data.latest_match_details),
      recentMatches: data.recent_matches.map(each =>
        this.getLatestMatches(each),
      ),
    }
    console.log(updatedData)

    this.setState({oneTeam: updatedData})
  }

  render() {
    const {oneTeam} = this.state
    const {teamBannerUrl, latestMatch} = oneTeam
    return (
      <div>
        <img src={teamBannerUrl} alt="team banner" />
        <LatestMatch details={latestMatch} />
      </div>
    )
  }
}

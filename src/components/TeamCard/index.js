import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teams} = props
  const {id, name, teamImageUrl} = teams

  return (
    <li>
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageUrl} alt={name} />
        <p>{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard

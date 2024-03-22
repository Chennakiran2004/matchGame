import './index.css'

const Navbar = props => {
  const {score, time} = props
  return (
    <nav className="nav-bar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="score-and-timer-container">
        <p className="score">
          Score: <span className="span-text">{score}</span>
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
          className="timer-logo"
        />
        <p className="span-text">{time} sec</p>
      </ul>
    </nav>
  )
}

export default Navbar

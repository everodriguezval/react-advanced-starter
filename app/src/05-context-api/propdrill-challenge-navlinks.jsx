import User from '../05-context-api/propdrill-challenge-user'

// Destructure user and logout props
const Navlinks = ({ user, logout }) => {
    return (
      <div className='nav-container'>
        <ul className='nav-links'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
        </ul>
        {/** Pass user and logout props into <User /> */}
        <User user={user} logout={logout}/> 
      </div>
    )
  };
  
  export default Navlinks;
  
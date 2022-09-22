import { useNavigate } from "react-router-dom";


function About() {
  const navigate = useNavigate();

    return( <>
    
    <h2>About</h2>
    <button onClick={() => navigate('/users')}>Aqui</button>
    </>
    )
  }

  export default About;
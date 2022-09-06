import { Link } from "react-router-dom";

function Home(){
    return<>
    <h1>Home page</h1>
    <p>
        Hello welcome to Toppers 
    </p>
    <Link to= "/ About "> Go to About Page </Link>
    </>
}

export default Home;

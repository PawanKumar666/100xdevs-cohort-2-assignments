import { useNavigate } from 'react-router-dom';

export default function NavBar(){
    const navigate = useNavigate(); // With useNavigate, we can route without reloading (i.e fetching html, css, js files) on every navigation
    return (
        <div>
            <button onClick={() => navigate("/")}>Landing Page</button>
            <button onClick={() => navigate("/dashboard")}>Dashboard</button>
        </div>
    )
}
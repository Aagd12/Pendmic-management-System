import { Link } from "react-router-dom";
import styles from "./styles.module.css";
<link rel="preconnect" href="https://fonts.googleapis.com"/>;
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>;
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet"></link>;
const Nav = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location='/';
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				
					 <Link  style={{paddingLeft: 10, color:"	#ffffff",fontWeight:"bold", textDecoration: 'none'}} to="/">Home</Link>
		
					 <Link style={{ marginLeft:"30%", paddingLeft: 10, color:"	#ffffff",fontWeight:"bold", textDecoration: 'none'}} to="/covid">Live Tracker</Link>
			
				
				 <Link style={{ paddingLeft: 10, color:"	#ffffff",fontWeight:"bold", textDecoration: 'none'}} to="/vaccination">Vaccination </Link>
				
				
					 <Link style={  {  paddingLeft: 10, color:"	#ffffff",fontWeight:"bold", textDecoration: 'none'}}  to="/testing">Testing</Link>
		
				
				
					<Link  style={{paddingLeft: 10, color:"	#ffffff",fontWeight:"bold", textDecoration: 'none'}}to="/contact">Contact</Link>
	
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Nav;

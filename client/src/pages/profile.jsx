import ContactUser from '../components/ProfileComponents/ContactUser/ContactUser';
import Experience from '../components/ProfileComponents/Experience/Experience';
import Footer from '../components/ProfileComponents/Footer/Footer';
import Header from '../components/ProfileComponents/Header/Header';
import Info from '../components/ProfileComponents/Info/Info';
import '../styles/Profile.css'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Profile() {
  const location = useLocation();
  const userData = location.state ? location.state.userData : null;

  // Use userData to update candidateInfo or use it directly
  const candidateInfo = userData || {
    name: "John Doe",
    availability: "Available",
    experience: "5 years",
    age: 30,
    location: "City, Country",
  };

  return (
    <div>
      <Header />
      <Info candidateInfo={candidateInfo} />
      <Experience />
      <ContactUser />
      <Footer />
    </div>
  );
}

export default Profile;


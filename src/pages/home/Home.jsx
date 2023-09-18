import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Featured from '../../components/featured';
import PropertyList from '../../components/propertyList';
import './home.css'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import MailList from '../../components/mailList';
import Footer from '../../components/footer';


const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList/>
                <h1 className="homeTitle">Home guests love</h1>
                <FeaturedProperties/>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home;
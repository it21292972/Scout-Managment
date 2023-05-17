import  React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Adventure from '../../components/adventure/Adventure';
import ScoutProfile from '../../components/profile/ScoutProfile';
import Footer from '../../components/footer/Footer';

const ScoutProf = () => {
    return (
                <div className="ScoutProfile">
                    
                    <Navbar />
                    <ScoutProfile/>
                    <Adventure />
                    <Footer />
                
                </div>
            );
        };

export default ScoutProf






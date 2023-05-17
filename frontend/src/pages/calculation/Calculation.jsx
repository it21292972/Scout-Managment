import Navbar from '../../components/navbar/Navbar'
// import "./calculationComponent.scss";
import CalculationComponent from '../../components/calculationComponent/CalculationComponent';

const Calculation= () =>{
    return(
        <div className='calculation-component'>
            <Navbar/>
            <div className='container'>
                <div >
                <CalculationComponent/>                
                </div>
            </div>
        </div>
    )
}

export default Calculation



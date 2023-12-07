import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';

const App = () => {
    return (
        <div>
            <div className="container-fluid demo">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                           <span>DEMO - Kundenmanagement Tool mit React Redux. No data are saved!</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pt-5">
                <Header />
                <MainSection/>
            </div>
        </div>
    )
}

export default App
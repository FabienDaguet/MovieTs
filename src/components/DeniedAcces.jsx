import React from 'react'
import {useNavigate} from 'react-router-dom'

const DeniedAcces = () => {

let navigate = useNavigate();
const goToIndex = () => {
    navigate("/");
};
const goToRegister = () => {
    navigate("/register")
}

    return (
        <main className='text-center input-body'>
            <div className='form-register'>
                <div className="form">
                    <h1>Vous devez être connecté pour accéder à cette page</h1>
                    <div className='d-flex justify-content-between'>
                        <button className='col-5 btn btn-lg btn-success mt-4' type='submit' onClick={() => goToIndex()}>Connextion</button>
                        <button className='col-5 btn btn-lg btn-primary mt-4' onClick={() => goToRegister()}>S'enregistrer</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default DeniedAcces
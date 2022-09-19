import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Transition from '../../components/Transition';

const Success = () => {
    let [seconde, setSeconde] = useState(5);
    const navigate = useNavigate();

    const compteARebours = useCallback(() => {
        if (seconde > 0) {
            setSeconde(seconde - 1);
        } else {
            navigate('/');
        }
    }, [navigate, seconde]);

    useEffect(() => {

        setInterval(() => compteARebours(), 1000);

    }, [compteARebours]);


    return (
        <Transition>
            <div>
                <h1>Payment réussi !</h1>
                <h6>Vous Allez être redirigé vers la page d'accueil</h6>
                <p>Dans {seconde} secondes </p>
            </div>
        </Transition>
    );
};

export default Success;
import React from 'react';
import '../style/Home.scss';
import Presentation from './Presentation';
import Transition from './Transition';
import NavBarApp from '../components/NavBarApp';
import CarouselText from './CarouselText';
import { items } from '../util/util';
import Category from './Category';


const Home = () => {

    //console.log("public url", process.env.PUBLIC_URL);

    return (
        <Transition>
            <div className='home'>
                <NavBarApp />
                <Presentation />
                <CarouselText items={items} />
                <Category />
            </div>
        </Transition>

    );
};

export default Home;
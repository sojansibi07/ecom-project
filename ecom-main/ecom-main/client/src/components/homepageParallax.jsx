import './HomeStyle.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
function HomePage(){
    return(
             <div>
      <Parallax pages={4}>
        <ParallaxLayer speed={0.1}
           id='l1'
        />
      <ParallaxLayer speed={0.4}
           id='l2'
        />
      <ParallaxLayer speed={0.7}
           id='l3'
        />
      <ParallaxLayer speed={1}
           id='l4'
        />
      <ParallaxLayer speed={1.3}
           id='l5'
        />
      <ParallaxLayer speed={1.6}
           id='l6'
        />
      <ParallaxLayer speed={1.9}
           id='l7'
        />
      </Parallax>
    </div>  
    )
}

export default HomePage;
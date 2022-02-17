import React from 'react'
import Classes from './AboutTechMeet.module.css';
import logo from '../../images/logo-about.png';

function AboutTechMeet() {
    return (
        <>
            <div className={Classes.container}>
             <div className={Classes.info1}>
             Inter IIT Tech Meet is the annual technological competition organized by the Indian Institutes of Technology to promote knowledge sharing and promulgating technological advancements. 
                <br />
                <br />
The vision of Inter IIT Tech Meet is to address and illuminate talks on multitudes of real-life challenges and contribute to progressiveness through innovative technological solutions. A pivotal goal of the event is an exchange of ideas in a substantial way that inspire and foster development. 

             </div>
             <div className={Classes.visionbox}>
                 <div className={Classes.title}>
                     OUR VISION 
                 </div>
                 <div className={Classes.imgbox}>
                     <img className={Classes.imgbox} src={logo} alt={'Logo InterIIT'} />
                 </div>
             </div>
             <div className={Classes.info2}>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac felis eget odio porta laoreet. Etiam at elit sed mauris congue malesuada nec id augue. Ut eu metus non libero volutpat lacinia. Maecenas urna erat, posuere sed gravida at, posuere eget nisl. Nulla non nisi neque. Maecenas auctor suscipit efficitur. Pellentesque eu urna sagittis, mattis dolor vel, ultricies urna. Nulla volutpat interdum lorem non venenatis. Nam nec vehicula sem, eget placerat nulla.In porttitor mollis risus, vel sollicitudin elit congue id. Maecenas varius felis nec felis suscipit, eget laoreet mauris semper. Nulla ut lectus neque. Sed vel posuere purus. Pellentesque at vestibulum ante. Nam commodo libero a mi pellentesque, eu rhoncus sem mollis.
 Proin efficitur sodales tellus, blandit volutpat felis consequat venenatis. Nulla rhoncus ex at nisl facilisis semper. Nam sit amet leo nunc. Sed aliquet nibh id porta lobortis. Donec tellus velit, blandit quis sapien quis, efficitur commodo velit. Cras metus sapien, rhoncus vel neque id, rhoncus tempus tellus. Vestibulum consequat ultricies sem.


             </div>
            </div>

        </>
    )
}

export default AboutTechMeet

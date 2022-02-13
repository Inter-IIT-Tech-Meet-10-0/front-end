import React from 'react'
import Classes from './AboutIITKGP.module.css';
import iitkgpLogo from '../../images/iitkgplogo.png';

function AboutIITKGP() {
    return (
        <>
        <div className={Classes.container}>
           <div className={Classes.infoBox}>
               <div className={Classes.logoBox}>
                   <div className={Classes.logo}>
                   <img src={iitkgpLogo} alt="IIT KGP Logo" className={Classes.logo} />
                   </div>
               </div>

               <div className={Classes.content}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac felis eget odio porta laoreet. Etiam at elit sed mauris congue malesuada nec id augue. Ut eu metus non libero volutpat lacinia. Maecenas urna erat, posuere sed gravida at, posuere eget nisl. Nulla non nisi neque. Maecenas auctor suscipit efficitur. Pellentesque eu urna sagittis, mattis dolor vel, ultricies urna. Nulla volutpat interdum lorem non venenatis. Nam nec vehicula sem, eget placerat nulla.In porttitor mollis risus, vel sollicitudin elit congue id. Maecenas varius felis nec felis suscipit, eget laoreet mauris semper. Nulla ut lectus neque. Sed vel posuere purus. Pellentesque at vestibulum ante. Nam commodo libero a mi pellentesque, eu rhoncus sem mollis.
 Proin efficitur sodales tellus, blandit volutpat felis consequat venenatis. Nulla rhoncus ex at nisl facilisis semper. Nam sit amet leo nunc. Sed aliquet nibh id porta lobortis. Donec tellus velit, blandit quis sapien quis, efficitur commodo velit. Cras metus sapien, rhoncus vel neque id, rhoncus tempus tellus. Vestibulum 
               </div>
               <div className={Classes.buttonContainer}>
                   <div className={Classes.button}>
                       Learn More
                   </div>
               </div>
           </div>
        </div>
        </>
    )
}

export default AboutIITKGP

import React from 'react'
import Classes from './AboutTechMeet.module.css';
import logo from '../../images/logo-about.png';

function AboutTechMeet() {
    return (
        <>
            <div className={Classes.container}>
             <div className={Classes.info1}>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac felis eget odio porta laoreet. Etiam at elit sed mauris congue malesuada nec id augue. Ut eu metus non libero volutpat lacinia. Maecenas urna erat, posuere sed gravida at, posuere eget nisl. Nulla non nisi neque. Maecenas auctor suscipit efficitur. Pellentesque eu urna sagittis, mattis dolor vel, ultricies urna. Nulla volutpat interdum lorem non venenatis. Nam nec vehicula sem, eget placerat nulla.In porttitor mollis risus, vel sollicitudin elit congue id. Maecenas varius felis nec felis suscipit, eget laoreet mauris semper. Nulla ut lectus neque. Sed vel posuere purus. Pellentesque at vestibulum ante. Nam commodo libero a mi pellentesque, eu rhoncus sem mollis.
 Proin efficitur sodales tellus, blandit volutpat felis consequat venenatis. Nulla rhoncus ex at nisl facilisis semper. Nam sit amet leo nunc. Sed aliquet nibh id porta lobortis. Donec tellus velit, blandit quis sapien quis, efficitur commodo velit. Cras metus sapien, rhoncus vel neque id, rhoncus tempus tellus. Vestibulum consequat ultricies sem.

 Vestibulum massa lorem, congue sed massa eleifend, maximus bibendum eros. Nulla facilisi. Praesent suscipit, eros vel feugiat luctus, arcu augue facilisis dolor, ac tempor purus mauris eu magna. Aenean blandit felis imperdiet ex suscipit, a tempor magna tincidunt. Nam id justo pharetra sapien malesuada fringilla eget at orci. Etiam ac tempus felis. Nulla placerat eu ligula sit amet vehicula. Sed viverra dui vel mi venenatis euismod.

   Morbi egestas gravida bibendum. Vivamus consequat gravida mi, id ornare eros congue et. Donec quis risus eu ante eleifend tempor. Morbi sit amet orci id risus bibendum imperdiet eu at leo. Aliquam erat volutpat. Aenean sagittis fringilla sodales. Donec suscipit volutpat lacinia. Nunc vel fermentum ex.
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

import React from 'react'
import './LowPrep.css';
import JLR1 from '../../../images/jlr1.png';
import JLR2 from '../../../images/jlr2.png';


export const  JLR = () =>  {
  return (
     <>
      <div className="mainContainer">
          <div className="pstitle">PROBLEM STATEMENT</div>
          <div className="subtitle">Physical System Requirements:</div>
          <div className="para1">Devise a system to actuate the bonnet of a car. Simulate the system in Simscape for the
following requirements:</div>
           <div className="para1">
           <li className="listPoint">The bonnet should open by 60° from the initial position with a tolerance of ±1°</li>
          <li className="listPoint">The bonnet should open within 4 sec in a safe manner (the system shouldn’t jerk open the
bonnet)</li>
          <li className="listPoint">The bonnet should remain in its open position without the need for any manual latch</li>
          <li className="listPoint">The bonnet should close within 4 sec in a safe manner</li>
           </div>
          

          <div className="para1">
          Using your calculations and MATLAB simulations for the bonnet specifications mentioned
below, select the components from the existing marketplace in India and prepare a Bill of
Material (BOM) for the system. Cost and power consumption should be kept in mind while
selecting the components such as motors and actuators (the lesser, the better).
          </div>

          <div className="note">
          <strong>Note:</strong> Your system should be simple and deployable in a production vehicle. Customers should
be able to access the boot when the bonnet is open. The use of any exotic material/mechanisms
will need to be justified correctly.
          </div>
          <div className="subtitle">Packaging Requirements:</div>
          
          <div className="para1">The shape and the dimensions of the bonnet are as follows:</div>
          <div className="para1">Bonnet can be considered to be a <strong>trapezoid</strong>  with</div>
     <div className="para1">
        <li className="listPoint">Smaller width equal to <strong>1000 mm</strong></li>
        <li className="listPoint">Larger width equal to <strong>1630 mm</strong></li>
        <li className="listPoint">Height of <strong>1000 mm</strong> </li>
        <li className="listPoint">The bonnet is angled to the horizontal at <strong>12°</strong>  </li>
        <li className="listPoint">The overall mass of the bonnet is <strong>14 kg.</strong>  Although, it may range between <strong>9 to 14 kg</strong>  depending
on the vehicle  </li>
        <li className="listPoint">As shown in the diagrams below, your assembly components should all be fitted in the
<strong> orange area when the bonnet is closed.</strong>  The dimensions of which are: <strong> 400mm</strong>  radius with
both vertices on the longer side of the trapezoid as centers and the depth of <strong>150mm</strong> 
perpendicular to the bonnet. Components like hydraulic struts or mechanical lead screws
can come outside the orange area, provided you are able to justify it with a clear advantage
on some other parameter, and they take up a minimal amount of space</li>
 
 <li className="listPoint">The purple part in the diagrams below is the actual bonnet, and the orange part represents
the suggested space you can work with for your actuation assembly. The hinges are fixed at
the longer length of the bonnet</li>
           </div>
          

   <div className="imgBox">
       <img src={JLR1} alt="" className="img" />
   </div>

   <div className="centresubtitle">
   FRONT VIEW OF THE BONNET IN CLOSED POSITION
   </div>

   <div className="imgBox">
       <img src={JLR2} alt="" className="img" />
   </div>

   <div className="centresubtitle">
   NORMAL VIEW OF THE BONNET (NOT TO SCALE)
   </div>

   <div className="guidelineTitle">
   SUBMISSION REQUIREMENT
   </div>

   <div className="para1">
   <li className="listPoint">Governing equations of the complete system</li>
   <li className="listPoint">A working MATLAB/Simulink (Simscape) model which consists of all the physical actuation
components</li>
   <li className="listPoint">Plots of the angle of opening of the Bonnet vs time for a single cycle for different weights
(Single cycle: Opening of the Bonnet -&gt; Remaining open for 3 seconds -&gt; Closing the Bonnet)
BOM of all the components you have used in your design</li>
   <li className="listPoint">BOM of all the components you have used in your design</li>
   <li className="listPoint">Power consumption of your system for one cycle</li>
   <li className="listPoint">A front, side, and isometric view of your designed CAD geometry, within the suggested
constraints</li>
   </div>

   

  <div className="subtitle">Submission Details:</div>
        <div className="para1">
        <li className="listPoint">Prepare a PowerPoint presentation containing all the details of your proposed system(s).
        You should include literature survey (if any), working principle, methodology, system layout,
        governing equations, simulation results, packaging data, and ‘claimed points’ based on your
        self-assessment in it. The reason behind the use of a component has to be properly
        mentioned. Do not forget to add bibliography at the end; all the referenced content in your
        presentation (including equations, theory, etc.) must carry citations. Add your presentation
        and reference documents (papers, patents, etc.) to a folder and zip it.</li>
        <li className="listPoint">Prepare a zipped folder containing your programs and models along with the instructions to
        use them. We will review and simulate the system model and verify your claims. Write
        comments liberally, and make sure your programs and models are comprehensible.</li>
        <li className="listPoint">Send both zipped folders.</li>

        </div>
  

  <div className="subtitle">Submission Timeline:</div>
        <div className="para1">
        <li className="listPoint">Zipped folder containing PowerPoint presentation and reference documents and zipped
folder containing programs and models along with the instructions submission:<br/>
Due Date: 21st March 11:59 PM
</li>
<li className="listPoint">Top 10 teams will be shortlisted based on the submission</li>
<li className="listPoint">Announcement of Top 10 shortlisted teams: Due Date: 23rd March</li>
<li className="listPoint">Refined PowerPoint presentation submission of shortlisted teams:<br/>Due Date: 25th March 11:59 PM</li>
<li className="listPoint">Final presentation: Due Date: 26th-27th March</li>
<li className="listPoint">The top ten teams will give a presentation (not exceeding 10 minutes), followed by a Q&A (5 minutes) session </li>
        </div>
  

      <div className='note'>
      Send your submissions at this email: <a rel="noreferrer" className='link' href="mailto:submissions@interiit-tech.org" target={'_blank'}>submissions@interiit-tech.org</a>
      </div>

      <div className="guidelineTitle">EVALUATION</div>
      <div className="para1">
      <li className="listPoint">20 points for valid plots of bonnet’s opening angle vs time from MATLAB model</li>
      <li className="listPoint">25 points for simplicity and versatility of your system (Less moving parts in your BOM,
Minimum cost of components, Easily adaptable in different vehicle lineups)</li>
      <li className="listPoint">15 points for Ergonomics (Ease of access to the boot for the customer)</li>
      <li className="listPoint">15 points for Power consumption of your system</li>
      <li className="listPoint">25 points for Packaging of your system (“The lower volume you use, the more volume you
have remaining for the boot space”)</li>
      <li className="listPoint">10 points for a generalized model/equations that can be used to select components
including motors and actuators with weight of the bonnet, moment of inertia of the bonnet,
opening time, and closing time as the variables</li>
      <li className="listPoint">40 points for final presentation (Knowledge, Understanding of the system from OEM
perspective, Design strategy used) (for top 10 shortlisted teams)</li>

      </div>
      
     <div className="note">
    <strong> Note:</strong> Power Tailgate system is electro-mechanical/electro-hydraulic system that can
automatically open and close the tailgate by using a local switch (push button switch inside of
the tailgate and outside handle switch) and wireless remote key (FOB). You can have a look at
the system used in powered tailgates to get inspiration for your system.
     </div>



         
        


        


      </div>
     </>
  )
}





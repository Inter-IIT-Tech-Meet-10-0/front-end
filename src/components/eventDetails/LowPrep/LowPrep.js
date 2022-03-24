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
        <li className="listPoint">Thickness can be assumed to be <strong>4mm</strong> </li>
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

export const SAC = () => {
      return (
            <>
            <div className="mainContainer">
                  <div className="pstitle">
                  DOMAINS:
                  </div>
                  <div className="para1">
                  <li className="listPoint" style={{listStyle:'none'}}> 1. Bio-science/ Bio-Technology.</li>
                  <li className="listPoint" style={{listStyle:'none'}}> 2. Chemical Engineering/Chemistry</li>
                  <li className="listPoint" style={{listStyle:'none'}}> 3. Civil Engineering</li>
                  <li className="listPoint" style={{listStyle:'none'}}> 4. Computer Science/Information Technology/Communication Technology</li>
                  <li className="listPoint" style={{listStyle:'none'}}> 5. Design</li>
                  <li className="listPoint" style={{listStyle:'none'}}> 6. Data Science/Artificial Intelligence/Machine Learning</li>
                  <li className="listPoint" style={{listStyle:'none'}}> 7. Electrical Engineering</li>
                  <li className="listPoint" style={{listStyle:'none'}}> 8. Electronics Engineering</li>
                  <li className="listPoint" style={{listStyle:'none'}}> 9. Energy/Environment</li>
                  <li className="listPoint" style={{listStyle:'none'}}> 10. Maths/Finance</li>
                  <li className="listPoint" style={{listStyle:'none'}}> 11. Mechanical Engineering</li>
                  <li className="listPoint" style={{listStyle:'none'}}> 12. Physics</li>
                  <li className="listPoint" style={{listStyle:'none'}}> 13. Rural Technology/Nano-Technology</li>
                  <li className="listPoint" style={{listStyle:'none'}}> 14. Social Science( related to Humanities and other such relevant fields)</li>
                  <li className="listPoint" style={{listStyle:'none'}}> 15. Virtual Reality/Augmented Reality</li>
                  <li className="listPoint" style={{listStyle:'none'}}> 16. Other Technical Field</li>
                  </div>
                 

                  <div className="para1">
                  Based on the number of papers received from the domains mentioned above, we can merge
two domains into one.
                  </div>

                  <div className="guidelineTitle">
                  PAPER SUBMISSION:
                  </div>
                  <div className="para1">
                        1.Details Document
                  </div>
                  <div className="para1">
                  <li className="listpoint">
                  Abstract - Max 200 words
                  </li>
                  <li className="listpoint">
                  Name of the Conference
                  </li>
                  <li className="listpoint">
                  Date of publication
                  </li>
                  <li className="listpoint">
                  Proof of publication
                  </li>
                  </div>
                  
                  <div className="para1">
                       2.Paper <br/>
                       3.Poster Template: <a className='link' target={'_blank'} rel='noreferrer' href='https://bit.ly/Poster_template'>https://bit.ly/Poster_template</a>
                  </div>
                  <div className="note">The details document and paper should be in pdf format.</div>

                  <div className="guidelineTitle">
                  GUIDELINES:
                  </div>
                  <div className="para1">1.The Selected Papers from each IIT will have to be presented in the form of posters (in PDF
format).
                  <br/>
                  2.The participants will be assigned tables via online mode to present their papers.
                  </div>
                  <div className="guidelineTitle">
                  EVALUATION CRITERIA:
                  </div>
                  <div className="para1">
                        1.Each paper presented by an IIT in the SAC will earn them 30 event points, for a total of 150
points.
<br/>
                       2. Individual appreciation awards will be given to selected articles from each domain based
on reviews of the papers by professors and Ph.D. Scholars.

                  </div>

                  <div className="guidelineTitle">
                  SUBMISSION TIMELINE:
                  </div>
                  <div className="para1">
                      1. Paper and Details Document Submission Deadline: March 18, 2022
                      2. Poster Submission Deadline: March 24, 2022   
                  </div>
                  <div className="note">All entries must be mailed by the Contingent Leader only to <a className={'link'} rel="noreferrer" target={'_blank'} href='mailto:submissions@interiit-tech.org'>submissions@interiit-tech.org</a></div>
            </div>
            </>
      )
}

export const EC =() => {
      return (
            <>
            <div className="mainContainer">
                  <div className="pstitle">
                  REPORT
                  </div>
                  <div className="para1">
                  Every IIT is required to choose five projects and give a report on each one.
The following information should be included in the report:
                   <li className="listPoint" style={{listStyle:'none'}}>1.Name of the project</li>
                   <li className="listPoint" style={{listStyle:'none'}}>2.The problem addressed by the project (in 50 words)</li>
                   <li className="listPoint" style={{listStyle:'none'}}>3.Proposed solution (in up to 500 words)</li>
                   <li className="listPoint" style={{listStyle:'none'}}>4.Data insights (if any)</li>
                   <li className="listPoint" style={{listStyle:'none'}}>5.Test results, surveys, references, video links (if any)</li>
                   <li className="listPoint" style={{listStyle:'none'}}>6.Team Members' Name and Institution Name.</li>
                   A report template will be provided for it. A maximum of 5 pages can be used for the report.
                  </div>
                  <div className="note">
                  The entire report should be 1.15 spaced and have a font size of 9.
                  </div>
                  <div className="guidelineTitle">
                  POSTER
                  </div>
                  <div className="para1">
                  Each team has to make an A2 size virtual poster for presentation according to the provided
template. The poster must contain
                    <li className="listPoint" style={{listStyle:'none'}}>1.Project Name and Team Members</li>
                    <li className="listPoint" style={{listStyle:'none'}}>2.Abstract</li>
                    <li className="listPoint" style={{listStyle:'none'}}>3.Diagrams(if any)</li>
                    <li className="listPoint" style={{listStyle:'none'}}>4.Methodology</li>
                    <li className="listPoint" style={{listStyle:'none'}}>5.Conclusion</li>
                    <li className="listPoint" style={{listStyle:'none'}}>6.References</li>
                  </div>

                  <div className="guidelineTitle">
                  PROJECT PRESENTATION:
                  </div>
                  <div className="para1">
                  Three students from each team will showcase their project in the online exhibition.
A total of 15 students can be part of the team.
                  </div>
                  <div className="guidelineTitle">
                  EVALUATION CRITERIA:
                  </div>
                  <div className="para1">
                  Each project will receive 30 points for participation.<br/>
                  This event has a maximum score of 150 points.
                  </div>
                  <div className="guidelineTitle">
                  SUBMISSION TIMELINE:
                  </div>
                  <div className="para1">
                  <li className="listPoint" style={{listStyle:'none'}}>1.Report submission: March 21, 2022</li>
                  <li className="listPoint" style={{listStyle:'none'}}>2.Report template: <a target={'_blank'} className='link' rel='noreferrer' href=" https://bit.ly/37fBdnZ"> https://bit.ly/37fBdnZ</a></li>
                  <li className="listPoint" style={{listStyle:'none'}}>3.Poster submission: March 24, 2022</li>
                  <li className="listPoint" style={{listStyle:'none'}}>4.Poster template: <a rel='noreferrer' target={'_blank'} className='link' href="https://bit.ly/Poster_template">https://bit.ly/Poster_template</a> </li>
                  </div>

                  <div className="note">All submissions must be mailed by the Contingent Leader only to <a className={'link'} rel="noreferrer" target={'_blank'} href='mailto:submissions@interiit-tech.org'>submissions@interiit-tech.org</a></div>


            </div>
            </>
      )
}

export const BY = () => {

      return (
         <>
         <div className="mainContainer">
               <div className="pstitle">
               PROBLEM STATEMENT
               </div>
               <div className="subtitle">DESCRIPTION</div>
               <div className="para1">
               Acme E-Com Inc (referred to as ‘Acme’ henceforth), is a successful e-commerce corporation. It
has an efficient last-mile road network to deliver its products to the customers from its many
warehouses. As part of their future-readiness initiative, Acme wants to incorporate automated
drones as part of their fleet for these last-mile deliveries. Acme wants to pilot this approach in
the city of ‘Dronapur’.
               </div>
               <div className="para1">
               To optimize its drone fleet and plan its drone delivery operations, Acme has engaged a
trustworthy partner – You. Your objective is to design and create a solution that can provide a
drone deployment plan along with flight path and routing details while servicing the customers
at the lowest possible cost to Acme.
               </div>
               <div className="subtitle">
               Problem Statement
               </div>
               <div className="para1">
               Provide a cost-optimal deployment plan and routing plan for the available drones for the given
set of delivery points in 3-dimensions. The constraints and complexities are:
               </div>
               <div className="subtitle">
               Base Problem
               </div>
               <div className="para1">
               Acme has a single drone-ready warehouse at coordinates (0, 0, 0) which will serve as the base
for drone delivery operations. Acme has visibility to planned deliveries from today + 2 days and
the corresponding coordinates in three dimensions with respect to the warehouse. The
warehouse has an unlimited number of drone charging bays.
               </div>
               <div className="para1">
              <span className="highlight">Drones</span>  come in several varieties with different attributes like cost, maximum speed, speed
profiles, payload capacity – weight, cubic & slots, energy profiles, etc.
               </div>
               <div className="para1">
               Drones start their day at 08:00 AM from the warehouse on Day 1, with one or more items in their
slots and follow a defined path to the demand location(s). After a delivery, a drone may deliver to
the next customer or return to the warehouse for charging.

               </div>
                <div className="para1">
                <span className="highlight">Energy</span> is consumed in form of battery for various drone operations. In general, bigger drones
have bigger battery and can carry more payloads, but their energy usage is correspondingly
high. Energy also contributes to the cost of operation and hence needs to be minimized.
                </div>
                <div className="para1">
                <span className="highlight">Recharge Stations :</span> Acme has decided to install dedicated recharge stations at different points
where drones can recharge their batteries to enable longer ranges and more optimal delivery
strategies. Each recharge station, however, has limited bays for the drones and different
charging times for each drone.
                </div>
                <div className="subtitle">Complexity #1: No-Fly Zones</div>
                <div className="para1">
                The city council of ‘Dronapur’ has prohibited the movement of drones in certain areas. This
could be due to high population density, high traffic, or secure government facilities. This will be
provided as a set of No-Fly ‘cuboids’ with all coordinates.
                </div>
                <div className="subtitle">
                Complexity #2: Multiple warehouses
                </div>
                <div className="para1">
                With the success of the drone-based deliveries, Acme decides to open 2 more warehouses in the
satellite suburbs of ‘Dronapur’. Drones can start from one warehouse and travel to another one
during the day. At the end of the day, the drones can come back to any of the warehouses and
start the next day from there.
                </div>
                <div className="subtitle">
                Complexity #3: Dynamic Replanning [BONUS]
                </div>
                <div className="para1">
                Acme’s customers can possibly refuse to take the delivery of the item when the drone reaches
the location, due to various reasons. This typically happens for 2% of the cases. The refusal not
only leads to replanning for the individual drone but can have a domino effect on the entire plan
for the day.
                </div>
              
              <div className="subtitle">OBJECTIVES</div>

              <div className="para1">
              <span className="highlight">OBJECTIVE PRIORITY #1:</span>   Fulfill maximum possible demand. A solution serving less than 95% of
the demand will be deemed ‘invalid’.

              </div>
              <div className="para1">
              <span className="highlight">OBJECTIVE PRIORITY #2:</span>  Minimize total cost.<br />
              Cost components to be captured are:<br />
              a. Energy Cost<br/> 
              b. Maintenance Fixed Cost<br/>
              c. Maintenance Variable Cost<br/>
              </div>
              <div className="para1">
              <span className="highlight"><span className="highlight">OBJECTIVE PRIORITY #3:</span></span>  Minimize the number of drones used on any day.</div>
              <div className="subtitle">DATA</div>

              <div className="para1">
              The input data will be across multiple CSV text files with a predefined schema. The data format
and sample will be provided to the team. This can be used to build and test the model.
The drone optimization instructions and table formats along with the sample input and output
files have been attached <a target={'_blank'} className='link' rel='noreferrer' href="https://drive.google.com/drive/folders/19i9BVkUFtSDPp78hygAgYzgKjZuEVuXa">here</a>.
              </div>
              <div className="guidelineTitle">EVALUATION</div>
              
              <div className="para1">
              The teams will be required to run their model with up to 5 test scenarios that will be provided at
the time of final submission. Performance on these scenarios will be used for the final
evaluation.
              </div>
              <div className="para1">The teams will be ranked on the basis of the following criterion:<br/>
              The higher priority criterion is more important. E.g., a team achieving higher ‘Demand Met’ will
score higher than another team that is delivering lower ‘Total Cost’.<br/>
            1. Demand Met<br/>
            2. Total Cost (ref Objective #2 for cost components)
            3. Number of drones in play
            4. Model Performance on time taken for the solution.
              </div>
              <div className="subtitle">
              SCORING
              </div>
              <div className="para1">   The points will be decided on the basis of:<br/>
              </div>
              <div className="subtitle">A. Solution validity [Max 100 points]</div>
              <div className="para1">
              Teams will receive guaranteed minimum points for a valid solution regardless of the ranking:
                <br/>
                1. Base Problem without any complexity: [50 Points] <br/>
                2. Complexity#1: [30 Points] <br/>
                3. Complexity#2: [20 Points] <br/>
                4. [Bonus] Complexity#3: [Bonus points will be announced later]

              </div>

              <div className="subtitle">B. Relative ranking between the teams [Max 50 points]
</div>
               <div className="para1">
               Refer to section ‘Evaluation’ for ranking rules. Based on the number of submissions and ranking,
teams may get points ranging from 5-50.<br/>
Participants must solve complexities <strong>only in the given order.</strong><br/>
E.g., A team may choose to attempt Base Problem + Complexity 1 for a max total of 80 points.
However, they may not do Base Problem + Complexity 2 (as it skips over Complexity#1)
               </div>
               <div className="guidelineTitle">
               GUIDELINES
               </div>
               <div className="para1">
               Participants need to follow the following submission guidelines :<br/><br/>
               1. Clearly mention the outputs belong to which scenarios.<br/>
               2. The complexity which is being attempted for an output should be mentioned (Base or Base +
1 or Base + 1 + 2).<br/>
            3. In case complexity 3 is being attempted, 1A will be the original plan and 1B will be the replan after cancellation
            4. Mention all the assumptions which the team undertook with proper justification.<br/>
            5. By 20th March IST midnight, the additional input scenarios would be provided (3 to 5
Scenarios)<br/>
               </div>
             
             <div className="guidelineTitle">SUBMISSION</div>
             <div className="para1">Teams have to submit the output in the prescribed format and the code with proper
documentation in GitHub and send the repository link to the email id mentioned below.</div>
<div className="note">
            <strong>DEADLINE - 23:59, 23rd March 2022.</strong> <br/> 
             </div>
             <div className='note'>
      Send your submissions at this email: <a rel="noreferrer" className='link' href="mailto:submissions@interiit-tech.org" target={'_blank'}>submissions@interiit-tech.org</a>
      </div>
             </div>
         </>
      );
}

export const Gmetri =() => {
      return (
            <>
            <div className="mainContainer">
                  <div className="pstitle">
                  PROBLEM STATEMENT
                  </div>
                  <div className="subtitle">
                  DESCRIPTION
                  </div>
                  <div className="para1">
                  <a target={'_blank'} className='link' rel='noreferrer' href="https://www.gmetri.com/">GmetriXR</a> is a VC backed startup in the XR and Web3.0 space. <br/><br/>
                  You have to come up with an executable marketing plan for the next 2 to 3 years that
can help GMetri grow its user base and market presence.
                  <br/>
                  The strategy should help build the brand image of GMetri as the go-to product for
Web3.0 content creation.<br/>
                  
                  <li className="listPoint">
                  Start with getting acquainted with all the features of the GMetri Platform.
                  </li>
                  <li className="listPoint">
                  Explore various avenues to market and collaborate with the product.
                  </li>
                  <li className="listPoint">
                  GMetriXR is a no-code Metaverse creator. Keep in mind that Metaverse is just a
fancy word for the 3D internet. There’s no limit to what you can do with 3D
interactivity over the internet. And so explore all avenues.
                  </li>
                  <li className="listPoint">
                  Only if really required, you can explore the scope of adding new features to the
existing platform that could be marketed and used to attract more users.
                  </li>
                  <br/><br/>

                  Some examples of real-life applications where GMetri is being currently used are:
                  <li className="listPoint">
                  Training & Learning<br/>
                  <li className="listPointin">
                  Training employees with the skills needed to operate machinery, following
complex steps in manufacturing plants, pharmaceutical factories
                  </li>
                  <li className="listPointin">
                  Compliance / Safety training
                  </li>
                  <li className="listPointin">
                  Training on softer aspects like POSH, sales training
                  </li>
                  </li>
                  <li className="listPoint">
                  Facility Tours
                  <li className="listPointin">
                  For car dealerships, real estate, etc.
                  </li>
                  </li>
                  <li className="listPoint">
                  Retail Experiences/Product Tours
                  </li><li className="listPoint">
                  Events - Employee Town Halls, College events
                  </li>
                  <li className="listPoint">
                  3D presentations, storytelling (as opposed to powerpoint or keynote slides)
                  </li>
                  </div>
                                    <div className="subtitle">How to use the platform</div>

                  <div className="para1">
                        <li className="listPoint">Create a free account via this link: <a className='link' target={'_blank'} rel='noreferrer' href=" https://portal.gmetri.com/signup">https://portal.gmetri.com/signup</a></li>
                        <li className="listPoint">Then, go through the onboarding steps. Use documentation<br/>
                        (<a className='link' target={'_blank'} rel='noreferrer' href="https://www.gmetri.com/docs/">https://www.gmetri.com/docs/</a>) for advanced topics and go through the help
                  (<a className='link' target={'_blank'} rel='noreferrer' href="https://www.gmetri.com/help/">https://www.gmetri.com/help/</a>) for other links.
                        </li>
                        <li className="listPoint">An example of an XR Experience is: <a className='link' target={'_blank'} rel='noreferrer' href="https://xyecjf.gmetri.com/gmetri_learnerkit_01">https://xyecjf.gmetri.com/gmetri_learnerkit_01</a></li>
                        <li className="listPoint">
                        Enable menu for quick navigation.
                        </li>
                  </div>

                  <div className="guidelineTitle">SUBMISSION</div>
                  <div className="para1">
                  Teams can give their submission either as a PPT or a GMetri deployment link
                  (preferred). GMetri can easily be used to create an interactive presentation.
                  <br/>
                  <br/>
                  If you choose to submit a GMetri experience follow these pointers:
                  <br/>
                  <li className="listPoint">The first scene of the experience (or slide in the case of PPT) must be a mandatory
                  introduction and a brief summary of what you are trying to do.</li>
                  <li className="listPoint">Make heavy use of the Text or the Text to Speech element to complete your scenes
                  (slides) quickly.</li>
                  <li className="listPoint">Use multiple scenes like slides and use the menu to navigate across scenes.</li>
                  <li className="listPoint">If needed, you can also add your own video in GMetri for the narration in the
                  experience.</li>
                  <li className="listPoint">The whole experience (or presentation) should be able to be completed in 15 mins
                  <li className="listPointin">Penalties for any experience taking above 15 mins.</li>
                  <li className="listPointin">Try keeping video sizes (in case you use videos) small, and break it up into
                  multiple scenes.</li>
                  </li>
                  <br/>
                  <br/>
                  The top 10 submissions will have a presentation round on the event day. Initial results
                  will be announced by 25th March EOD.
                  </div>
                  <div className="note">
                  <strong>DEADLINE</strong>  - 23rd March 2022 3PM. 
                  </div>
                  <div className='note'>
                  Send your submissions at this email: <a rel="noreferrer" className='link' href="mailto:submissions@interiit-tech.org" target={'_blank'}>submissions@interiit-tech.org</a>
                  </div>
                  <div className="guidelineTitle">
                  EVALUATION
                  </div>
                  <div className="para1">
                  The GMetri experience/presentation will be evaluated across multiple factors:
                  <li className="listPoint">
                  Marketing Solution - 100 Points
                  <li className="listPointin">Optimization of marketing expense</li>
                  <li className="listPointin">Financial and general Feasibility</li>
                  <li className="listPointin">Usability and fit of the suggested feature</li>
                  <li className="listPointin">Details of any collaborations suggested with other companies</li>
                  <li className="listPointin">Final impact and conclusion</li>

                  </li>
                  <li className="listPoint">Presentation round - 40 Points</li>
                  <li className="listPoint">Submitting a GMetri deployment link instead of a presentation - 10 Points</li>
                   <br />
                   <br/>
                   Total points for this event is 150.
                  </div>

            </div>
            </>
      )
}




export const Mercari =() => {
  return (
        <>
        <div className="mainContainer">
              <div className="pstitle">
                    INTRODUCTION
              </div>
              <div className="para1">
              A Hospital Management System (HMS) is a software application that helps manage the
information related to health care and track patients through their treatment journey. On the
scale of a country as large and diverse as India, the problem requires innovative, scalable
solutions. Creating a network of approved hospitals, HMS will provide the ability to manage all
the records in one place, visualize a patient’s medical history, allow doctors to manage patients
better by automating manual workflows (example, automating the generation of medical bills
and preparing the medicines in the hospital’s dispensary based on doctor’s appointment
conclusion).
              </div>
              <div className="pstitle">PROBLEM STATEMENT</div>
              <div className="para1">
              Develop a mobile-based, highly scalable solution [19,21] for Multi-Chain Hospitals under NHM.
The solution should cater to patients and doctors to help them with observation, diagnosis,
treatment, appointment scheduling, referrals, record visualization, etc.
              </div>
              <div className="para1">
              You are free to use your creativity with the platform, technologies, features, etc. The minimum
basic guidelines for the HMS are:
              </div>

              <div className="para1">
                    <li className="listPoint">
                    Every citizen has NHID linked with them 
                    </li>
                    <li className="listPoint">
                    Hospitals (and their doctors) are associated with NHM 
                    </li>
                    <li className="listPoint">
                    Usage of Microservice architecture [3,19,22] is highly recommended
                    </li>
                    <li className="listPoint">
                    Digital storage [4] and linking of data [5] (i.e., bills, reports, prescriptions, hospital referrals,
etc.) with the proper owner
                    </li>
                    <li className="listPoint">
                    Usage of Docker [6], Kubernetes [7], Travis CI [8], GitHub Actions [9], Spinnaker [10], and
other open-source technologies is encouraged for continuous deployment and continuous
integration purposes 
                    </li>
                    <li className="listPoint">
                    Following proper code and documentation etiquettes [13, 14], architecture practices [15], and
production security and development operations [16] are encouraged
                    </li>
                    <li className="listPoint">
                    Considering maintainability, writing unit and integration tests [17] are recommended
                    </li>
                    <li className="listPoint">
                    The use of existing open-source (or trialware) projects, APIs, and technologies are highly
encouraged as felt appropriate. Using tools provided in the GitHub Student Pack is an
excellent way to incorporate paid solutions if required
                    </li>

              </div>
              <div className="para1">
              It is VERY IMPORTANT to design your architecture because scalability is the primary issue in a
large country like ours; whether it’s booking tickets on IRCTC or checking university results, we
have all faced it. [18]
              </div>

              <div style={{textDecoration:'underline'}} className="note">* Number in bracket refers to the reference number.</div>

              <div className="guidelineTitle">SUBMISSION REQUIREMENT</div>

              <div className="para1">
                    <li className="listPoint">
                    GitHub (or any other code hosting platform) repositories collection of Microservices (30 Points)
                    </li>
                    <li className="listPoint">
                    Deployed fully-functional instance(s) of the designed service(s) (80 points)<br/>
                      - Link(s) to the deployed microservices <br/>
                      - Demo video of the solution demonstrating the running of the application and system
                    </li>
                    <li className="listPoint">A brief report, not exceeding 6 pages (excluding cover page, index, etc., i.e., content only),
demonstrating the design decisions (40 points)</li>
              </div>
              <div className="para1">The deadline for all the submissions is 24th March, 11:59 p.m.</div>

              <div className='note'>
            Send your submissions at this email: <a rel="noreferrer" className='link' href="mailto:submissions@interiit-tech.org" target={'_blank'}>submissions@interiit-tech.org</a>
            </div>
              <div className="guidelineTitle">EVALUATION</div>

              <div className="para1">
              The evaluation focuses on visualization and usability of the interface(s), scalability of the
designed architecture, and maintainability of the submitted project repositories. The decisions
you make while designing the architecture and planning how to maintain (and develop further)
the produced code is critical as thousands of other developers would be working alongside you.
              </div>
              <div className="para1">A specific non-exhaustive list of evaluation criteria is provided below.</div>
              <div className="para1">
                    <li className="listPoint">Qualitative observation of Patient, Doctor, and NHM Admin features</li>
                    <li className="listPoint">Design and Usability of the design interfaces</li>
                    <li className="listPoint">Ease of CRUD operations over data by the respective owner(s) and authority</li>
                    <li className="listPoint">Scalability of the Architecture & System Design</li>
                    <li className="listPoint">Ease of deployment and development, emphasizing a large team of remote engineers (i.e.,
implementation of CI/CD, modular code design, etc.)</li>
                    <li className="listPoint">Technology decisions affecting network latency, deployment time, etc. For example, Inter-
microservice communication decisions among REST, GraphQL, gRPC, etc.</li>
                    <li className="listPoint">Monitoring, handling, and notifying about failures (partial or complete), availability, errors,
etc.</li>
              </div>

              <div className="note">
                Dataset : <a href='https://drive.google.com/drive/folders/1YEFUbOJXbcU8TzlrlzvQ8gFsfsAW2z9V' className='link' >Link to Dataset</a>
                </div>

                <div className="note">
                # You are free to use other open-source free-license data and images as required.
                </div>
                <div className="guidelineTitle">REFERENCES</div>

                <div className="para1">
                      <li  style={{listStyle:'none'}} className="listPoint">2. <a className='link' href="https://en.wikipedia.org/wiki/National_Digital_Health_Mission">https://en.wikipedia.org/wiki/National_Digital_Health_Mission</a></li>
                      <li  style={{listStyle:'none'}} className="listPoint">1. <a  target={'_blank'} rel="noreferrer" className='link' href="https://www.leadsquared.com/what-is-hospital-management-system/">https://www.leadsquared.com/what-is-hospital-management-system/</a></li>
                      <li  style={{listStyle:'none'}} className="listPoint">3. <a  target={'_blank'} rel="noreferrer" className='link' href="https://towardsdatascience.com/microservice-architecture-and-its-10-most-important-design-patterns-824952d7fa41"> https://towardsdatascience.com/microservice-architecture-and-its-10-most-important-design-patterns-824952d7fa41</a></li>
                      <li  style={{listStyle:'none'}} className="listPoint">4. <a  target={'_blank'} rel="noreferrer" className='link' href="https://aws.amazon.com/blogs/architecture/store-protect-optimize-your-healthcare-data-with-aws/"> https://aws.amazon.com/blogs/architecture/store-protect-optimize-your-healthcare-data-with-aws/</a></li>
                      <li  style={{listStyle:'none'}} className="listPoint">5. <a  target={'_blank'} rel="noreferrer" className='link' href="https://cloud.google.com/storage/docs/encryption">https://cloud.google.com/storage/docs/encryption</a></li>
                      <li  style={{listStyle:'none'}} className="listPoint">6. <a  target={'_blank'} rel="noreferrer" className='link' href="https://aws.amazon.com/docker/">https://aws.amazon.com/docker/</a></li>
                      <li  style={{listStyle:'none'}} className="listPoint">7. <a  target={'_blank'} rel="noreferrer" className='link' href="https://kubernetes.io/">https://kubernetes.io/</a></li>
                      <li  style={{listStyle:'none'}} className="listPoint">8. <a  target={'_blank'} rel="noreferrer" className='link' href="https://katalon.com/resources-center/blog/benefits-continuous-integration-delivery#:~:text=Continuous%20Integration%20(CI)%20allows%20you,continuously%20deliver%20it%20to%20production">https://katalon.com/resources-center/blog/benefits-continuous-integration-delivery</a></li>
                      <li  style={{listStyle:'none'}} className="listPoint">9. <a  target={'_blank'} rel="noreferrer" className='link' href="https://github.com/features/actions">https://github.com/features/actions</a></li>
                      <li  style={{listStyle:'none'}} className="listPoint">10. <a target={'_blank'} rel="noreferrer"  className='link' href="https://spinnaker.io/">https://spinnaker.io/</a></li>
                      <li  style={{listStyle:'none'}} className="listPoint">11. <a target={'_blank'} rel="noreferrer"  className='link' href="https://www.datadoghq.com/">https://www.datadoghq.com/</a></li>
                      <li  style={{listStyle:'none'}} className="listPoint">12. <a target={'_blank'} rel="noreferrer"  className='link' href="https://sentry.io/welcome/"> https://sentry.io/welcome/</a></li>
                      <li  style={{listStyle:'none'}} className="listPoint">13. <a target={'_blank'} rel="noreferrer"  className='link' href="https://www.techopedia.com/definition/16626/error-handling">https://www.techopedia.com/definition/16626/error-handling</a></li>
                      <li  style={{listStyle:'none'}} className="listPoint">14. <a target={'_blank'} rel="noreferrer"  className='link' href="https://bigsea.co/ideas/coding-etiquette-6-obvious-overlooked-best-practices/">https://bigsea.co/ideas/coding-etiquette-6-obvious-overlooked-best-practices/</a></li>
                      <li  style={{listStyle:'none'}} className="listPoint">15. <a target={'_blank'} rel="noreferrer"  className='link' href="https://techbeacon.com/app-dev-testing/top-5-software-architecture-patterns-how-make-right-choice">https://techbeacon.com/app-dev-testing/top-5-software-architecture-patterns-how-make-right-choice</a></li>
                      <li  style={{listStyle:'none'}} className="listPoint">16. <a target={'_blank'} rel="noreferrer"  className='link' href="https://www.ibm.com/cloud/learn/devsecops">https://www.ibm.com/cloud/learn/devsecops</a></li>
                      <li  style={{listStyle:'none'}} className="listPoint">17. <a target={'_blank'} rel="noreferrer"  className='link' href="https://engineering.linkedin.com/blog/2016/08/writing-maintainable-integration-tests">https://engineering.linkedin.com/blog/2016/08/writing-maintainable-integration-tests</a></li>
                      <li  style={{listStyle:'none'}} className="listPoint">18. <a target={'_blank'} rel="noreferrer"  className='link' href="https://charlieinden.github.io/System-Design/2021-01-25_Microservices--Designing-Highly-Scalable-Systems-55dbb6f64c94.html">https://charlieinden.github.io/System-Design/2021-01-25_Microservices--Designing-Highly-Scalable-Systems-55dbb6f64c94.html</a></li>
                      <li  style={{listStyle:'none'}} className="listPoint">19. <a target={'_blank'} rel="noreferrer"  className='link' href="https://www.fullstackpython.com/microservices.html">https://www.fullstackpython.com/microservices.html</a></li>
                      <li  style={{listStyle:'none'}} className="listPoint">20. <a target={'_blank'} rel="noreferrer"  className='link' href="http://highscalability.com/start-here/">http://highscalability.com/start-here/</a></li>
                      <li  style={{listStyle:'none'}} className="listPoint">21. <a target={'_blank'} rel="noreferrer"  className='link' href="https://github.com/mercari/mercari-microservices-example">https://github.com/mercari/mercari-microservices-example</a></li>
                      <li  style={{listStyle:'none'}} className="listPoint">22. <a target={'_blank'} rel="noreferrer"  className='link' href="https://engineering.mercari.com/en/blog/tag/microservices/">https://engineering.mercari.com/en/blog/tag/microservices/</a></li>
                </div>
                <div className="subtitle">
                Images/Data References used in the dataset:
                </div>
                <div className="para1">
                      <li className="listPoint"> <a className='link' href="https://github.com/tsg-iitkgp/inter-iit-tech">1.https://github.com/tsg-iitkgp/inter-iit-tech</a></li>
                </div>
        </div>
        </>
  )
}
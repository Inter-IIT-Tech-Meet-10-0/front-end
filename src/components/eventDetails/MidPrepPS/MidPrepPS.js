import React from 'react'
import Classes from './MidPrep.module.css';

export const ISRO=()=> {
  return (
    <>
    <div className={Classes.mainContainer}>
    <div className={Classes.pstitle}>PROBLEM STATEMENT</div>
      <div className={Classes.para1}>
      Build a stand-alone web-based application using open-source software(s) to identify and
categorize X-ray bursts. Given data will include long-duration X-ray light curves as well.
Parameters like the rise and decay time, peak flux, duration of bursts, etc., must be derived.
False detection should be minimum, and all bursts must be detected.

      </div>
      <div className={Classes.para1}>
      The problem can be broadly categorized into two parts:
      <ul className={''}>
          <li className={Classes.listPoint} style={{listStyle:'none'}}>1. Developing a statistical/machine learning model to cover the mentioned parameters</li>
          <li className={Classes.listPoint} style={{listStyle:'none'}}>2. Deploying it efficiently to a stand-alone application and web-based tool (no additional
APIs used).</li>
      </ul>
      The web-based tool should visualize the light curve data, feature a GUI for light curve
distribution visualization, analyze wavelets, display particular portions of distributions as time
series: confirming burst occurrence, etc.

      </div>
      <div className={Classes.subtitle}>
      Basic requirements
      </div>
      <div className={Classes.para1}>
      <ul className={''}>
          <li className={Classes.listPoint} >Light curves of X-ray source(s) will be provided, with many outbursts and systematic
variations in the background. The tool should be designed to accept any X-ray light curve
with a defined format. It should allow different input file formats – like ASCII, FITS, and XLS.
</li>
          <li className={Classes.listPoint}>
          The model should identify the bursts and their properties (as listed in the problem
statement) along with the time of occurrence. Classification of the bursts is to be done, and
the use of fit parameters should be justified. Classification criteria is open for innovation.
          </li>
          <li className={Classes.listPoint}>
          The tool should be developed completely using open source (Python/Perl etc.) software.
          </li>
          <li className={Classes.listPoint}>
          Additionally, the teams must use the available data and prove the efficiency of the system
w.r.t. minimal false alarms and maximal true signatures.
          </li>
          <li className={Classes.listPoint}>
          The teams must bring out the limitations of the method(s) used in the tool and possible
enhancement later through research.
          </li>
          
      </ul>
      </div>

      <div className={Classes.subtitle}>
      DAta Sources
      </div>
      <div className={Classes.para1}>
      ISRO's PRADAN website for Solar X-ray data: <a rel="noreferrer" className={Classes.link} href="https://pradan.issdc.gov.in/pradan/" target={'_blank'}>https://pradan.issdc.gov.in/pradan/</a> <br/>
 Register to get into the data archive of Chandrayaan-2 payload data. After registering and
logging in, go to XSM (X-ray Solar Monitor) where required data and manuals to read and use
the data are present. The lightcurve data of XSM is the required input for this analysis
      </div>
     <div className={Classes.subtitle}>
     Software specifications
     </div>
     <div className={Classes.para1}>
     <ul className={Classes.listPoints2}>
          <li className={Classes.listPoint}>Should be deployed as a web-based application and also as a stand-alone application.</li>
          <li className={Classes.listPoint}>The tool should be distributed under GPL or any other open source license.</li>
          <li className={Classes.listPoint}>Should use only open source, Python is desirable.</li>
      </ul>
     </div>
     <div className={Classes.guidelineTitle}>
       SUBMISSION
     </div>
     <div className={Classes.subtitle}>
     MId evaluation: CODEs AND DOCUMENTATION- 150 points
     </div>
     <div className={Classes.para1}>
     Teams will be required to submit their codes and documentation files (a detailed documentation
explaining the codes and instructions for code deployment) in a github repository.<br/>
<strong>Due Date - 18th March</strong>
     </div>
     <div className={Classes.subtitle}>
     Final Presentation
     </div>
     <div className={Classes.para1}>
     All participating teams would be required to give a 10 min presentation followed by a 5 min Q&A
session of their proposed solutions. Dates will be informed later.<br/>
The ppt for final presentation has to be submited by <strong>24th March, 11:59 pm.</strong>
     </div>
     <div className={Classes.guidelineTitle}>
     EVALUATION
     </div>
     <div className={Classes.subtitle}>
     Evaluation Criteria
     </div>
     <div className={Classes.note}>
     1. For statistical/machine learning model: (30%)
     </div>
     <div className={Classes.para1}>
     
          <li className={Classes.listPointal}>Detection of the maximum number of bursts with fewer false detections for a given duration</li>
          <li className={Classes.listPointal}>Identification and classification of the fit parameters alongwith their explanantions (like the
rise time, peak flux, decay time constant) and its accuracies: good accuracy and goodness of
fit for many bursts</li>
          <li className={Classes.listPointal}>A validation data set will be run for all the codes developed, and the results will be compared
with expected values along with time and space complexity</li>
     
     </div>
     <div className={Classes.note}>
     2. For the web-based/stand-alone application: (70%)
     </div>
     <div className={Classes.para1}>
          <li className={Classes.listPointal}>Ease of use of the GUI as well as the open-source codes developed</li>
          <li className={Classes.listPointal}>A good manual – ease of use by a third party not knowing computational aspects</li>
          <li className={Classes.listPointal}>Compatibility of the tool – should be able to install in all Linux environments without any
patch up</li>
          <li className={Classes.listPointal}>Adaptability to take any format input data (FITS, ASCII, CDF, etc.)</li>
          <li className={Classes.listPointal}>Concise and clear documentation, including inferences derived for the sample data, should be
available along with the codes for user demonstration</li>

      Note: Physical explanation for the use of fit parameters and the classification criteria will be
prioritized for final evaluation.

     </div>
     <div className={Classes.note}>
      Send your submissions at this email: <a rel="noreferrer" className={Classes.link} href="mailto:submissions@interiit-tech.org" target={'_blank'}>submissions@interiit-tech.org</a>
      </div>
      <div className={Classes.subtitle}>References:</div>
      <div className={Classes.references}>
        <div className={Classes.para3}>
        <ul className={''}>
          <li className={Classes.listPoint} style={{listStyle:'none'}}>1. Gryciuk et al., Solar Physics, 292, 77, 2017</li>
          <li className={Classes.listPoint} style={{listStyle:'none'}}>2. Aschwanden and Freeland, Astrophysical Journal, 754, 112, 2012</li>
      </ul>
        </div>
      </div>
    </div>
    </>
  )
}


export const DRDO=()=> {
    return (
      <>
      <div className={Classes.mainContainer}>
        <div className={Classes.pstitle}>
           PROBLEM STATEMENT
        </div>
        <div className={Classes.para1}>
        The problem statement is to map an area via UAV aerial imagery and aid a UGV in navigating a
complex static environment. This requires the team to map the mountain road in the worlds
using a UAV and guide a UGV through the area, navigating across various turns, altitudes, and
depth of terrain.
        </div>
        <div className={Classes.para1}>
        <ul className={Classes.listPoints}>
          <li className={Classes.listPoint}>The major components include vehicle consideration (sensors), computer vision
development, path planning, vehicle control, integration of multiple systems, and finally
the validation and testing of the algorithms in standardized environments.
</li>
          <li className={Classes.listPoint}>The UAV is tasked to map the area following which the original image overlay of the
terrain would be replaced with a plain overlay. The UGV then has to traverse the
mountain road with aid from the UAV.
</li>
          <li className={Classes.listPoint}>The UGV should traverse along the center of the road.</li>
          <li className={Classes.listPoint}>The UAV should not fly higher than 20m. The UAV is allowed the use of a downward-
facing RGBD-camera, IMU sensor, and GPS.</li>
          <li className={Classes.listPoint}>No sensors are allowed on the UGV.</li>
          <li className={Classes.listPoint}>The speed of the UGV should be limited to 35 km/hr.</li>
          <li className={Classes.listPoint}>The integration of all the algorithms is to be ensured for the program to efficiently gather
and process data to map and give the path planning information.
</li>
<li className={Classes.listPoint}>The task is considered to be completed when the UGV successfully navigates across the
terrain to the end of the road with aid from the UAV.</li>

      </ul>
        </div>
        <div className={Classes.guidelineTitle}>
        SOFTWARE SPECIFICATIONS
        </div>
        <ul className={Classes.listPoints}>
          <li className={Classes.listPoint}>Ubuntu 18.04</li>
          <li className={Classes.listPoint}>ROS Melodic</li>
          <li className={Classes.listPoint}>Gazebo 9</li>
          <li className={Classes.listPoint}>Python or C++</li>
          <li className={Classes.listPoint}>ArduPilot Firmware</li>
          <li className={Classes.listPoint}>Any extra library used must be specified in the documentation and must be open-source</li>

      </ul>
      <div className={Classes.para1}>
      The submission must conform to the aforementioned specifications for facilitating testing on
a standardized environment and computer system.
      </div>
      <div className={Classes.guidelineTitle}>
        GUIDELINES
      </div>
      <ul className={Classes.listPoints}>
        <li className={Classes.listPoint}>
        The task must be completed in simulation using ROS and Gazebo with ArduPilot Flight
Controller software.
        </li>
        <li className={Classes.listPoint}>
        Use Ubuntu 18.04, ROS Melodic and Gazebo 9 (any others will not be accepted).
        </li>
        <li className={Classes.listPoint}>
        Installation instructions (Ardupilot) will be provided alongside a package with the drone
model (with given sensors) and a UGV model.
        </li>
        <li className={Classes.listPoint}>
        3 Gazebo worlds will be provided to test the algorithm. They will be released in a phased
manner.
        </li>
        <li className={Classes.listPoint}>
        Teams are required to work on an algorithm that fits all the three worlds provided.
        </li>
        <li className={Classes.listPoint}>
        The final Gazebo worlds used for evaluation will be similar to the worlds given and will not
be shared.
        </li>
        <li className={Classes.listPoint}>
        The submission format must be a ROS package and everything needed to run must be
within a single bash script or a launch file.
        </li>
        <li className={Classes.listPoint}>
        If any extra dependencies or packages are needed for the simulation, proper
documentation to install the same must be provided. Only open-source packages are
allowed.
        </li>

      </ul>
      <div className={Classes.guidelineTitle}>
      RELEASE DATES
      </div>
      <ul className={Classes.listPoints}>
        <li className={Classes.listPoint}>World 1: 8th March, 2022</li>
        <li className={Classes.listPoint}>World 2: 12th March, 2022</li>
        <li className={Classes.listPoint}>World 3: 16th March, 2022</li>
      </ul>
      <div className={Classes.guidelineTitle}>
      EVALUATION CRITERIA
      </div>
      <div className={Classes.para1}>
      The evaluation will be done based on the ease of installation of the ROS package along with
dependent libraries, and concise documentation and presentation skills (100 Points). The
marking scheme is divided into 3 components :
      </div>
      <div className={Classes.note}>
      Note: If at any point the deviation of UGV from the mean path is more than 5m it will be
considered a failure and zero marks will be given for all three components of that particular
world.
      </div>
      <div className={Classes.subtitle}>
      COMPONENT 1
      </div>
      <div className={Classes.para1}>
      Deviation of the UGV from the mean path
      </div>
      <div className={Classes.tableContainer}>
       <div className={Classes.tableIndex}>
         <div className={Classes.tableIndexpart}>World</div>
         <div className={Classes.tableIndexpart}>M</div>
         <div className={Classes.tableIndexpart2}>Marks Alloted</div>
       </div>
       <div className={Classes.tableColumn}>
         <div className={Classes.tableColumnpart}>World1</div>
         <div className={Classes.tableColumnpart}>100</div>
         <div className={Classes.tableColumnpartend}>C*M</div>
       </div>
       <div className={Classes.tableColumn}>
         <div className={Classes.tableColumnpart}>World2</div>
         <div className={Classes.tableColumnpart}>200</div>
         <div className={Classes.tableColumnpartend}>C*M</div>
       </div>
       <div className={Classes.tableColumn}>
         <div className={Classes.tableColumnpartlast}>World3</div>
         <div className={Classes.tableColumnpartlast}>300</div>
         <div className={Classes.tableColumnpartlastend}>C*M</div>
       </div>
      </div>
      <div className={Classes.para1}>
      C: coefficient of deviation <br/>
      It is computed between the path taken by the UGV and the mean path.
      </div>
      <div className={Classes.subtitle}>
      COMPONENT 2
      </div>
      <li className={Classes.listPointal}>Time taken to traverse the path: For each world, the time taken by the UGV to traverse the
path will be noted (only for the teams who have completed the world).
</li>
     <div className={Classes.tableContainer}>
     <div className={Classes.tableIndex}>
         <div className={Classes.tableIndexpart}>Team</div>
         <div className={Classes.tableIndexpart}>TIME Taken to traverse
the Path</div>
         <div className={Classes.tableIndexpart2}>Marks Alloted</div>
       </div>
       <div className={Classes.tableColumn}>
         <div className={Classes.tableColumnpart}>Team 1</div>
         <div className={Classes.tableColumnpart}>T1</div>
         <div className={Classes.tableColumnpartend}>0.5 * (M)</div>
       </div>
       <div className={Classes.tableColumn}>
         <div className={Classes.tableColumnpart}>Team 2</div>
         <div className={Classes.tableColumnpart}>T2</div>
         <div className={Classes.tableColumnpartend}>0.4 * (M)</div>
       </div>
       <div className={Classes.tableColumn}>
         <div className={Classes.tableColumnpart}>Team 3</div>
         <div className={Classes.tableColumnpart}>T3</div>
         <div className={Classes.tableColumnpartend}>0.3 * (M)</div>
       </div>
       <div className={Classes.tableColumn}>
         <div className={Classes.tableColumnpart}>Team 4</div>
         <div className={Classes.tableColumnpart}>T4</div>
         <div className={Classes.tableColumnpartend}>0.2 * (M)</div>
       </div>
       <div className={Classes.tableColumn}>
         <div className={Classes.tableColumnpartlast}>Team 5</div>
         <div className={Classes.tableColumnpartlast}>T5</div>
         <div className={Classes.tableColumnpartlastend}>0.2 * (M)</div>
       </div>

     </div>

     <div className={Classes.guidelineTitle}>
     EVALUATION CRITERIA
     </div>
     <li className={Classes.listPointal}>0.1 * (M) for the rest of the teams who complete the task.</li>
     <li className={Classes.listPointal}>T1 &lt; T2 &lt; T3 &lt; T4 &lt; T5 </li>
     <li className={Classes.listPointal}>M : Max. marks allotted for particular World on completion</li>
     <li className={Classes.listPointal}>M = 100 for World 1 <br/>
     &nbsp;&nbsp;&nbsp;&nbsp; M = 200 for World 2 <br/>
     &nbsp;&nbsp;&nbsp;&nbsp; M = 300 for World 3</li>

     <div className={Classes.subtitle}>
       COMPONENT 3
     </div>
     <li className={Classes.listPointal}>
     The computational power used: lesser power implies better performance (Jetson TX2
Module is the upper limit).
     </li>
     <div className={Classes.tableContainer}>
     <div className={Classes.tableIndex}>
         <div className={Classes.tableIndexpart}>Team</div>
         <div className={Classes.tableIndexpart}>COMPUTATIONAL ELEMENT
UTILISED (CPU, GPU, RAM)</div>
         <div className={Classes.tableIndexpart2}>Marks Alloted</div>
       </div>
       <div className={Classes.tableColumn}>
         <div className={Classes.tableColumnpart}>Team 1</div>
         <div className={Classes.tableColumnpart}>F1</div>
         <div className={Classes.tableColumnpartend}>0.5 * (M)</div>
       </div>
       <div className={Classes.tableColumn}>
         <div className={Classes.tableColumnpart}>Team 2</div>
         <div className={Classes.tableColumnpart}>F2</div>
         <div className={Classes.tableColumnpartend}>0.4 * (M)</div>
       </div>
       <div className={Classes.tableColumn}>
         <div className={Classes.tableColumnpart}>Team 3</div>
         <div className={Classes.tableColumnpart}>F3</div>
         <div className={Classes.tableColumnpartend}>0.3 * (M)</div>
       </div>
       <div className={Classes.tableColumn}>
         <div className={Classes.tableColumnpart}>Team 4</div>
         <div className={Classes.tableColumnpart}>F4</div>
         <div className={Classes.tableColumnpartend}>0.2 * (M)</div>
       </div>
       <div className={Classes.tableColumn}>
         <div className={Classes.tableColumnpartlast}>Team 5</div>
         <div className={Classes.tableColumnpartlast}>F5</div>
         <div className={Classes.tableColumnpartlastend}>0.2 * (M)</div>
       </div>

     </div>
    
<li className={Classes.listPointal}>
0.1 * (M) for the rest of the teams who complete the world.
     </li>
     <li className={Classes.listPointal}>
     F1 &lt; F2 &lt; F3 &lt; F4 &lt; F5
     </li>
     <li className={Classes.listPointal}>
     M : Max. marks allotted for particular World on completion.
     </li>
     <li className={Classes.listPointal}>
     M = 100 for World 1<br/>
  &nbsp;&nbsp;&nbsp;&nbsp; M = 200 for World 2 <br/>
  &nbsp;&nbsp;&nbsp;&nbsp; M = 300 for World 3
     </li>
     <div className={Classes.subtitle}>
     TOTAL MAXIMUM POINT DISTRIBUTION PER TASK
     </div>
     <li className={Classes.listPointal}>WORLD 1 - 200</li>
     <li className={Classes.listPointal}>WORLD 2 - 400</li>
     <li className={Classes.listPointal}>WORLD 3 - 600</li>
     <div className={Classes.para1}>The sum of the total maximum points of the three worlds would be scaled down to 150 points</div>

     <div className={Classes.guidelineTitle}>
     SUBMISSIONS
     </div>
     <div className={Classes.subtitle}>
     ROS package and Documentation
     </div>
      <li className={Classes.listPointal}>
      The team has to submit their final ROS package along with proper documentation
for its installation. Documentation must also include working principles and
algorithm explanations. Only one final submission will be accepted
      </li>
      <li className={Classes.listPointal}>
      Due Date - 22nd March
      </li>
      <div className={Classes.subtitle}>
      Final TESTING AND Presentation
      </div>
      <li className={Classes.listPointal}>
      The team would be required to test their algorithm on the worlds provided during
the live-testing round of the evaluation. For the presentation round, the team would
be required to explain the logic and methodologies used, followed by a Q&A session.
      <br/>
      <br/>
      The final presentation has to be submitted by 24th March, 11:59 p.m.

      </li>
      <div className={Classes.note}>
      Please note that the Final presentation should wrap up within 15 minutes which will be
      followed by Q&A (5 min).
      </div>
      <div className={Classes.note}>
      Send your submissions at this email: <a rel="noreferrer" className={Classes.link} href="mailto:submissions@interiit-tech.org" target={'_blank'}>submissions@interiit-tech.org</a>
      </div>
      </div>
      </>
    )
}
  
export const Mudrex=()=> {
    return (
      <>
      <div className={Classes.mainContainer}>
        <div className={Classes.pstitle}>
          PROBLEM STATEMENT
        </div>
        <div className={Classes.subtitle}>
          Description
        </div>
        <div className={Classes.para1}>
        The goal of this competition is to create an automated trading bot, using the Mudrex
Visual Builder, that trades profitably on a set of below-mentioned crypto assets and
exchanges.
        </div>
        <div className={Classes.para1}>
       <strong> Assets</strong>: ETH-USDT / ADA-USDT / XRP-USDT<br/>
       <strong>Exchange</strong> : Binance, Spot  
        </div>
        <div className={Classes.para1}>
        All participating teams will be given access to Premium Mudrex Accounts on which they
will be able to access the visual builder, create strategies and backtest their bots.
        </div>
        <div className={Classes.para1}>
        Every team can submit up to five bots for testing. However, you can create as many as
you want on the platform using the historical data available. The bots submitted for
testing will be fed 10,000 hidden cases, and the results will be conveyed to the
respective teams. The final submission is exclusive of the five testing attempts made.
Testing and submission links will be shared in due course.
        </div>
        <div className={Classes.para1}>
        Participants are also required to make a short presentation to a panel of judges that will
cover every step that they have taken to reach the current model, including background
research, assumptions made, and edits done after testing attempts. Teams are also
required to mention why their model is performing poorly (if it is) and suggest
corrective measures. A discussion on the roadblocks faced and the future flow of
technology in the crypto arena keeping the problem statement in mind will also be
appreciated.
        </div>
        <div className={Classes.subtitle}>
        GUIDELINES
        </div>
        <div className={Classes.para1}>
        <ul className={Classes.listPoints}>
          <li className={Classes.listPoint}>1. Participants are encouraged to rigorously go through each point in their strategy and be ready with sound logical backing for the same.
</li>
          <li className={Classes.listPoint}>2. Presentation should not exceed 10 minutes.</li>
      </ul>
        </div>
        <div className={Classes.guidelineTitle}>
          SUBMISSION
        </div>
        <div className={Classes.para1}>
        The bots that are built will need to have a minimum Mudrex Performance Score of 7.

        </div>
        <div className={Classes.para1}>
        After building and testing the strategy, each team will have to submit their final bot on
20th March, for which submission link will be shared later.
        </div>
        <div className={Classes.para1}>
        Teams are allowed to submit up to <strong>three</strong> different bots (one for each of the specified
asset pairs). If a strategy is not for the asset pairs specified, it will not be evaluated.
        </div>
        <div className={Classes.para1}>
        Teams have to submit their presentations in PDF format on or before 24th March. The
presentation being made on the final day should match the one being submitted by 24th
March. Final presentation dates will be conveyed in due time.
        </div>
        <div className={Classes.guidelineTitle}>
          EVALUATION
        </div>
        <div className={Classes.para1}>
        Apart from general profitability on the above-mentioned assets, final submitted bots will
be run on a collection of over 100,000 hidden test cases to check for overfitting.
Every bot will be evaluated on the following metric over all test cases:
        </div>
        <div className={Classes.para1}>
        ‘sqrt(mean_return) * mean_performance_score’.
        </div>
        <div className={Classes.para1}>
        'mean_return' is the mean of returns across all of the test cases.<br/>
'mean_performance_score' is similarly the mean of performance scores across all test
cases.<br/>
The performance score for each test case is calculated as a linear combination of risk
terms like Sharpe, max drawdown among others.
        </div>
        <div className={Classes.para1}>
        The best performing strategy from the three submitted will be considered for final
evaluation.
        </div>
        <div className={Classes.para1}>
        The presentation will be judged on multiple fronts:
        <ul className={Classes.listPoints}>
          <li className={Classes.listPoint}>1. Explanation of how the current strategy has been obtained.
</li>
          <li className={Classes.listPoint}>2. Explanation of the working of the bot (use of specific technical indicators).</li>
<li className={Classes.listPoint}>3. Explanation of roadblocks, difficulties faced while constructing the bot.</li>
      </ul>
        </div>
        <div className={Classes.note}>
        Note - Teams are allowed to test their bots with 10,000 hidden tests between 12th-19th
March. Each team can check their strategy 7 times. This will help the teams further
improve their bots
        </div>
        <div className={Classes.note}>
      Send your submissions at this email: <a rel="noreferrer" className={Classes.link} href="mailto:submissions@interiit-tech.org" target={'_blank'}>submissions@interiit-tech.org</a>
      </div>
        <div className={Classes.para1}>
        Bot evaluation will carry 150 points, and presentation will carry 100 points.
        </div>
      </div>
      </>
    )
  
}

export const Bosch=()=> {
    return (
      <>
      <div className={Classes.mainContainer}>
        <div className={Classes.pstitle}>
        PROBLEM STATEMENT
        </div>
        <div className={Classes.subtitle}>
        DESCRIPTION
        </div>
        <div className={Classes.para1}>
        The scenes obtained from a surveillance video are usually with low resolution. Most of the
scenes captured by a static camera are with minimal change of background. Objects in outdoor
surveillance are often detected in far-fields. Most existing digital video surveillance systems rely
on human observers for detecting specific activities in a real-time video scene. However, there
are limitations in the human capability to monitor simultaneous events in surveillance displays.
Hence, human motion analysis in automated video surveillance has become one of the most
active and attractive research topics in the area of computer vision and pattern recognition.
        </div>
        <div className={Classes.subtitle}>
        Pain point
        </div>
        <div className={Classes.para1}>
        Despite the breakthroughs in accuracy and speed of single image super-resolution using faster
and deeper convolutional neural networks, one central problem remains largely unsolved: How
do we recover the finer texture details when we super-resolve at large upscaling factors? The
behavior of optimization-based super-resolution methods is principally driven by the choice of
the objective function. Recent work has largely focused on minimizing the mean squared
reconstruction error. The resulting estimates have high peak signal-to-noise ratios, but they are
often lacking high-frequency details and are perceptually unsatisfying in the sense that they fail
to match the fidelity expected at the higher resolution.
        </div>
        <div className={Classes.subtitle}>
         Problem Statement
        </div>
        <div className={Classes.para1}>
        Build a solution to estimate the gender and age of people from a surveillance video feed (like
mall, retail store, hospital etc.). Consider low resolution cameras as well as cameras put at a
height for surveillance.
Hint: Develop a pipeline to apply super resolution algorithms for people detected and then apply
gender/age estimation algorithms.
Problem approach:
      <ul className={Classes.listPoints}>
                <li className={Classes.listPoint}>1. Object Detection: SRGAN algorithms. </li>
                <li className={Classes.listPoint}>2.Classification and estimation: Deep learning and neural networks</li>
                <li className={Classes.listPoint}>( e.g. : <a className={Classes.link} target='_blank' rel="noreferrer" href='https://jonathan-hui.medium.com/gan-super-resolution-gan-srgan-b471da7270ec'>this link</a> )</li>
                <li className={Classes.listPoint}>Link for full paper: <a className={Classes.link} target='_blank' rel="noreferrer" href=': https://arxiv.org/pdf/1609.04802.pdf)'>link</a>  </li>
            </ul>
            Domains: Super Resolution GAN, DL, Image Processing
        </div>
        <div className={Classes.guidelineTitle}>
        GUIDELINES
        </div>
        <div className={Classes.para1}>
        <ul className={Classes.listPoints}>
                <li className={Classes.listPoint}>Participants can use any open-source dataset or create their own by recording videos (15-20
samples of 1-2 minute videos) and creating a pipeline for further processes. The quality of
videos can be manually degraded to mimic low-resolution CCTV footage. </li>
                <li className={Classes.listPoint}>All the data and algorithms used should be available for commercial usage.
</li>
                <li className={Classes.listPoint}>Any plagiarism will lead to direct disqualification.
</li>
            </ul>
        </div>

        <div className={Classes.guidelineTitle}>
          SUBMISSION
        </div>
        <div className={Classes.para1}>
        <ul className={Classes.listPoints}>
                <li className={Classes.listPoint}>GitHub link of the code with proper documentation along with the dataset used.
DEADLINE - 21st March 2022. </li>
                <li className={Classes.listPoint}>Submission of the final presentation link clearly explaining the idea utilized for coming up
with the solution and results. DEADLINE - 24th March 2022.

</li>
                <li className={Classes.listPoint}>The Final Presentation will take place in front of the panel. The date and timings for the same
will be conveyed later.
</li>
            </ul>
        </div>
        <div className={Classes.guidelineTitle}>
        EVALUATION
        </div>
         <div className={Classes.para1}>
         <ul className={Classes.listPoints}>
                <li className={Classes.listPoint}>The code will be run on our dataset and the accuracy will be evaluated (Weightage: 50%). </li>
                <li className={Classes.listPoint}>Novelty in the idea used for developing the data pipeline and the solution approach
(Weightage: 25%)
</li>
                <li className={Classes.listPoint}>Final Presentation (Weightage: 25%).
</li>
            </ul>
         </div>

         <div className={Classes.note}>
      Please note that the Final presentation should wrap up within 10 minutes which will be
      followed by Q&A (5 min).
      </div>
      <div className={Classes.note}>
      Send your submissions at this email: <a rel="noreferrer" className={Classes.link} href="mailto:submissions@interiit-tech.org" target={'_blank'}>submissions@interiit-tech.org</a>
      </div>
         
      </div>
      </>
    )
  }


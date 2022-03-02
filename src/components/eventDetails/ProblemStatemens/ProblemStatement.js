import React from 'react'
import Classes from './ProblemStatement.module.css';
import BlueYonderImg from '../../../images/blueyonderPS.png'

export const BoschModelExtraction =() => {
  return (
    <>
    <div className={Classes.mainContainer}>
      <div className={Classes.pstitle}>PROBLEM STATEMENT</div>
      <div className={Classes.para1}>
      Develop an efficient common strategy and relevant implementation to extract the videobased models in the black box and grey box setting across the following 2 problem
      statements.
      </div>

      <div className={Classes.subtitle}>
      1.Action Classification
      </div>
      <div className={Classes.para1}>
      Model Extraction for Swin-T Model for Action Classification on
      Kinetics-400 dataset.
      Download the model from <a rel="noreferrer" className={Classes.link} href="https://github.com/SwinTransformer/Video-Swin-Transformer" target={'_blank'}>here</a>
      </div>
      

      <div className={Classes.subtitle}>
      2.Video Classification
      </div>
      <div className={Classes.para1}>
      Model Extraction for MoViNet-A2-Base Model for Video Classification on Kinetics-600
      dataset
      Download the model from  <a rel="noreferrer" className={Classes.link} href="https://tfhub.dev/tensorflow/movinet/a2/base/kinetics-600/classification/3" target={'_blank'}>here</a>     
      </div>
     
      <div className={Classes.subtitle}>
      Blackbox Setting
      </div>
      <div className={Classes.para1}>
            Do not use any relevant data set available and use synthetic or generated data without using
      the Kinetics series dataset. Also, do not use the same model architecture as the original
      model to train the extracted model.    
      </div>
      <div className={Classes.subtitle}>
      Greybox Setting
      </div>
      <div className={Classes.para1}>
            You can use 5% of original data (balanced representation of classes) as a starting point to
      generate the attack dataset. Also, do not use the same model architecture as the original
      model to train the extracted model.      
      </div>
      <div className={Classes.guidelineTitle}>GUIDELINES</div>
      <ul className={Classes.guidelinePoints}>
                  <li className={Classes.guidelinePoint}>The competition will use a private leaderboard, and no results will be announced
        intermittently. (detailed mechanism will be contributed)</li>
                  <li className={Classes.guidelinePoint}>All teams will submit a score in the specified format and its sub-component (Px black/grey
        accuracy, no. of queries) at the end of week 3 and week 4</li>
          <li className={Classes.guidelinePoint}>After week 4, each team will also be asked to give a small presentation explaining their
          work.
          </li>
    <li className={Classes.guidelinePoint}> The top 5 teams (based on scores+presentation) will be asked to submit the artifacts to
    verify the stated evaluation metric. The verified result of the top 5 teams will be published.
    </li>
      </ul>

      <div className={Classes.guidelineTitle}>SUBMISSIONS</div>
      <div className={Classes.para1}>
      The evaluation will be conducted in three steps-   
      </div>
      <div className={Classes.subtitle}>
      Score Submission - 50 Points
      </div>
      <div className={Classes.para1}>
      Each team will have to submit their final score. The final scores will be evaluated. Due date:
      16th March 
      </div>

      <div className={Classes.subtitle}>
      Score And Documentation Submission - 150 Points
      </div>
      <div className={Classes.para1}>
            Each team will again have to submit their final score alongside a brief documentation. The
      scores will again be evaluated. The improvement in score will be judged along with the
      documentation. Due Date: 23rd March
      </div>

      <div className={Classes.subtitle}>
      Final Presentation - 200 Points
      </div>
      <div className={Classes.para1}>
      Every team will have to give a short presentation explaining their code, and justify their
      submitted scores. Due Date: 26th March
      </div>
      <div className={Classes.note}>
      Please note that the Final presentation should wrap up within 15 minutes which will be
      followed by Q&A (5 min).
      </div>
      <div className={Classes.note}>
      Send your submissions at this email: <a rel="noreferrer" className={Classes.link} href="mailto:submissions@interiit-tech.org" target={'_blank'}>submissions@interiit-tech.org</a>
      </div>
      
      <div className={Classes.guidelineTitle}>EVALUATION CRITERIA</div>
      <div className={Classes.para1}>
      The results of extraction will be measured using the following evaluation metric   
      </div>

      <ul className={Classes.guidelinePoints}>
        <li className={Classes.guidelinePoint}>Final Score = 0.5* P1 Score + 0.5* P2 Score</li>
        <li className={Classes.guidelinePoint}>P1 Score = 0.6* P1 Blackbox accuracy + 0.4*P1 Greybox accuracy</li>
        <li className={Classes.guidelinePoint}>P1 accuracy will be measured as Top 5 on randomly selected balanced 50% of Kinect-600
dataset</li>
        <li className={Classes.guidelinePoint}> Report no. of queries/dataset points used to achieve BlackBox accuracy and Greybox
    accuracy
</li>
<li className={Classes.guidelinePoint}>P2 Score = 0.6* P2 Blackbox accuracy + 0.4*P2 Greybox accuracy</li>
<li className={Classes.guidelinePoint}>P2 accuracy will be measured as Top 5 on randomly selected balanced 50% of Kinect-600
dataset</li>
<li className={Classes.guidelinePoint}>No. of queries will be used in case of a tiebreaker in case the Final Score of 2 teams is within
2% of the accuracy band. Lesser queries will help you win.</li>
      </ul>
      

    </div>
    
    </>
  )
}

export const DigitalAlpha =() => {
    return (
      <>
      <div className={Classes.mainContainer}>
      <div className={Classes.pstitle}>PROBLEM STATEMENT</div>
      <div className={Classes.subtitle}>
      CONTEXT
      </div>
      <div className={Classes.para1}>
      SaaS companies are customer-driven and are heavily dependent on their customer base. There
are a set of metrics that can showcase the health of the SaaS companies and their aspects. These
metrics and numbers are not readily available on publicly reported SEC Filings and need to be
chalked out from the available forms (10-K, 10-Q, 8-K, etc.). Accessing these metrics can be of
tremendous value to the right users.
Forms that are being filed are very detailed and take time to analyze. For analyzing a form, the
primary task is chalking out the key SaaS numbers. There is a need to have simplified dashboards
to have a quick overview of Key SaaS Goals.
      </div>
      <div className={Classes.subtitle}>
      FORMS FOR SaaS COMPANIES
      </div>
      <div className={Classes.para1}>
      10K: It is an annual report of the company. Footnotes in 10K forms can help to flag sketchy
accounting practices.
10Q: It is the company's quarterly report that reflects changes in inventory and working capital.
It can be used to draw comparisons between companies.
8K: Used for important announcements, like executive appointments, etc., between filings of a
majority of forms - investors will get non-financial inputs, for example, when TATA sons had a
management change or similar situations.
      </div>
      <div className={Classes.subtitle}>
      PROBLEM STATEMENT
      </div>
      <ul className={Classes.listPoints}>
          <li className={Classes.listPoint}>Create an interactive dashboard capable of analyzing SEC Filings of all US Listed SaaS
companies for all the available years of data.</li>
          <li className={Classes.listPoint}>The dashboard should be a Key SaaS goal analyzer for the user/client</li>
          <li className={Classes.listPoint}>With this dashboard, one should be able to pull up information and related statistics about
any SaaS company they are interested in and extract useful information with ease, rather
than reading voluminous filings that are often 50–100 thousand words in length.</li>
      </ul>
      <div className={Classes.subtitle}>
      SKILLS REQUIRED
      </div>
      <div className={Classes.para1}>
      Web Development & Deployment, Web Scraping, Machine Learning, UI/UX
      </div>
      <div className={Classes.note}>
      Note that you are responsible for complying with EDGAR’s access terms and
conditions.
      </div>
      <div className={Classes.guidelineTitle}>GUIDELINES</div>
      <ul className={Classes.listPoints}>
                  <li className={Classes.listPoint}>The dashboard should have a search bar to enter the required query by the user - company
name, date range, metrics, type, etc</li>
                  <li className={Classes.listPoint}>Key SaaS goal analyzer can be based on growth, profitability, potential, etc.
</li>
          <li className={Classes.listPoint}>The dashboard should showcase the drill-down map of the Key SaaS goals of the searched
company for the specified date range.
</li>
    <li className={Classes.listPoint}>For unavailable data, the participating team should choose appropriate alternative resources.
    </li>
    <li className={Classes.listPoint}>Table of Content: Break down the lengthy SEC filings into separate sections, each of which
deals with different aspects of a company's reporting, making it easy to navigate</li>
<li className={Classes.listPoint}>ML model to be trained and implemented in the web tool for any chosen usage - Example:
Analyze the Annual report for the given time frame to get the sentiment from the SEC filings to
assess the company's situation.</li>
<li className={Classes.listPoint}>Come up with a single call API that creates a dataset in a few lines of code for any duration of
time and numerous tickers. The extracted data frame must be written as a CSV file and
downloaded</li>
<li className={Classes.listPoint}>Graphs and charts to showcase the trends and changes in metrics for a given date range.
</li>
<li className={Classes.listPoint}>Metrics classification for SaaS companies- Good, bad, or neutral for each drill-down tab.</li>
<li className={Classes.listPoint}>Competitor comparison page - Dashboard with a feature to compare two or more companies
for the same date range with trend graph overlay and key SaaS goal drill-down overlay.
</li>
<li className={Classes.listPoint}>The web tool must be hosted using standard hosting solutions and databases only.</li>

      </ul>
      <div className={Classes.guidelineTitle}>EVALUATION</div>
      <ul className={Classes.listPoints}>
          <li className={Classes.listPoint}>Identification of Problem Statement and Solution architecture</li>
          <li className={Classes.listPoint}>Dashboard features - UI/UX, Ease of use, speed of execution of the drill-down overlay</li>
          <li className={Classes.listPoint}>Machine Learning model efficiency and analysis</li>
          <li className={Classes.listPoint}>Random test case passing (6 test cases) - Proper analysis of SaaS metrics</li>
          <li className={Classes.listPoint}>Accuracy of metrics classification for SaaS companies and accuracy of generated sentiments;
compared with actual data in forms and filings</li>
          <li className={Classes.listPoint}>Scalability and compatibility of web tool</li>
          <li className={Classes.listPoint}>Innovation in dashboard features</li>
          <li className={Classes.listPoint}>Presentation Skills</li>
          
      </ul>
      <div className={Classes.subtitle}>
      Brownie Points
      </div>
      <ul className={Classes.listPoints}>
          <li className={Classes.listPoint}>Extra points will be rewarded for including additional features and seeing the overall inclusivity
of the web tool</li>
          <li className={Classes.listPoint}>Show pros and cons of a company on the dashboard (somewhat like Ticker tape) - Smart
Narrative Note that you are responsible for complying with EDGAR's access terms and
conditions.</li>
      </ul>
      <div className={Classes.guidelineTitle}>SUBMISSIONS</div>
      <div className={Classes.para1}>
      The evaluation is to be conducted in 2 steps: (400 points)
      <ul className={''}>
          <li className={Classes.listPoint}>Report and Code Submission - 200 Points</li>
          <li className={Classes.listPoint}>Final Presentation - 200 Points</li>
      </ul>
      </div>
      <div className={Classes.subtitle}>
      Report and Code Submission - 22 March 2022
      </div>
      <div className={Classes.para1}>
      <ul className={''}>
          <li className={Classes.listPoint}>Github repository with well-defined documentation files</li>
          <li className={Classes.listPoint}>Report: Detailed web tool architecture, problem approach, key insights</li>
          <li className={Classes.listPoint}>Machine Learning Model Performance - Precision, Recall, and F1 Score</li>
      </ul>
      </div>
      
      <div className={Classes.para1}>
      An overall score would be computed which would be a simple average of the above three
metrics.
      </div>
      <div className={Classes.para1}>
      The report needs to be submitted in PDF format. It should not exceed 15 pages (excluding the
Cover Page).
      </div>
      <div className={Classes.subtitle}>
      Final Presentation - 26 March 2022
      </div>
      <div className={Classes.para1}>
      <ul className={''}>
          <li className={Classes.listPoint}>All participating teams would be required to give presentations of their proposed solution
on 26th March.</li>
      </ul>
      </div>
      <div className={Classes.note}>
      Please note that the Final presentation should wrap up within 15 minutes which will be
      followed by Q&A (5 min).
      </div>
      <div className={Classes.note}>
      Send your submissions at this email: <a rel="noreferrer" className={Classes.link} href="mailto:submissions@interiit-tech.org" target={'_blank'}>submissions@interiit-tech.org</a>
      </div>
      <div className={Classes.note}>
      List of target SaaS companies: <a rel="noreferrer" className={Classes.link} href="https://bit.ly/3ByDLc3" target={'_blank'}>https://bit.ly/3ByDLc3</a>
      </div>
      <div className={Classes.subtitle}>
      References
      </div>
      <div className={Classes.para1}>
      <a rel="noreferrer" className={Classes.link1} href="https://www.forentrepreneurs.com/saas-metrics/" target={'_blank'}>https://www.forentrepreneurs.com/saas-metrics/</a>
      <a rel="noreferrer" className={Classes.link1} href="https://edgar-online.com/data/EDGARPro_Brochure.pdf" target={'_blank'}>https://edgar-online.com/data/EDGARPro_Brochure.pdf</a>
      <a rel="noreferrer" className={Classes.link1} href="https://www.investopedia.com/articles/fundamental-analysis/08/sec-forms.asp" target={'_blank'}>https://www.investopedia.com/articles/fundamental-analysis/08/sec-forms.asp</a>
      </div>


      </div>
      </>
    )
  }

export const SiliconLabs=() => {
    return (
      <>
      <div className={Classes.mainContainer}>
      <div className={Classes.pstitle}>PROBLEM STATEMENT</div>
      <div className={Classes.para1}>
      SaaS companies are customer-driven and are heavily dependent on their customer base. There
are a set of metrics that can showcase the health of the SaaS companies and their aspects. These
metrics and numbers are not readily available on publicly reported SEC Filings and need to be
chalked out from the available forms (10-K, 10-Q, 8-K, etc.). Accessing these metrics can be of
tremendous value to the right users.
Forms that are being filed are very detailed and take time to analyze. For analyzing a form, the
primary task is chalking out the key SaaS numbers. There is a need to have simplified dashboards
to have a quick overview of Key SaaS Goals.
      </div>
      <div className={Classes.subtitle}>
      THINGS TO BE INCLUDED
      </div>
      <ul className={Classes.listPoints}>
          <li className={Classes.listPoint}>Define: Identify a problem, and describe a problem statement to be solved.</li>
          <li className={Classes.listPoint}>Design: Devise a scalable solution (a high-level design) to solve the above-defined problem
statement, supported by the implementation details for all the system blocks described in the
solution.</li>
          <li className={Classes.listPoint}>Develop: Consolidate a feasible working prototype that can be implemented. All the necessary
implementation files (schematics and designs) should be submitted.
</li>
          <li className={Classes.listPoint}> Detail: Put in place a complete business model of the pitched solution and explain how the
solution will scale and impact the target audience.</li>
          <li className={Classes.listPoint}>
          Defend: Create a 15-min presentation that guides the judging panel through your work
          </li>
      </ul>

      <div className={Classes.subtitle}>
      To be included in the final presentation:
      </div>
      <ul className={Classes.listPoints}>
          <li className={Classes.listPoint}>Solution validation and testing, its impact, and sustainability analysis.</li>
          <li className={Classes.listPoint}>Product Discovery:
              <div className={Classes.subpoints}>- Identifying the problem or challenge.</div>
              <div className={Classes.subpoints}>- Understanding competition: What makes this product or service unique?</div>
              <div className={Classes.subpoints}>- Mapping all the crucial stakeholders along the value chain.</div>
          </li>
          <li className={Classes.listPoint}>Proposed User Journey:
              <div className={Classes.subpoints}>- Defining customer segments targeted by the solution.</div>
              <div className={Classes.subpoints}>- Identifying the best delivery channels by customer.</div>
              <div className={Classes.subpoints}>- Defining the process for user acquisition and retention.</div>
          </li>
          <li className={Classes.listPoint}>Specifications for Minimum Viable Product (MVP).</li>
          <li className={Classes.listPoint}>Define a go-to-market plan along with potential milestones for the launch and adoption process.</li>
          <li className={Classes.listPoint}>Underlining the success metrics / KPIs and impact estimation.</li>
          <li className={Classes.listPoint}>Diligence to the commercialization aspect: Defining business model and viability, Revenue model
with cost analysis, and venture journey.</li>
          <li className={Classes.listPoint}>UI proposal for customer-centric IoT solutions.</li>
      </ul>

      <div className={Classes.guidelineTitle}>SUBMISSION</div>
      <div className={Classes.subtitle}>
      Mid-Evaluation (250 points)
      </div>
      <div className={Classes.para1}>
      The report needs to be submitted in PDF format. It should not exceed 15 pages (excluding the
Cover Page). It should cover the following:
       <ul className={''}>
          <li className={Classes.listPoint}>Description of the design steps.</li>
          <li className={Classes.listPoint}>An end-to-end working prototype of the solution - implementation of the solution.</li>
      </ul>
      The evaluation report, along with the implementation files should be submitted on or before 17th
March.
      </div>
      <div className={Classes.subtitle}>
      Final Evaluation (150 points)
      </div>
      <div className={Classes.para1}>
      The final presentation should explain the problem, solution, business model, and other related
aspects of the proposed solution. Dates of presentations will be conveyed in due course.
      </div>
      <div className={Classes.guidelineTitle}>
      EVALUATION
      </div>
      <div className={Classes.para1}>
      The goal is to identify unique problems and solve them using affordable and scalable engineering
solutions. The participants are expected to evaluate their designs and implementation against all
possible design goals and strive to reach a balance among all of them.
      </div>
      <div className={Classes.subtitle}>
      Evaluation Criteria:
      </div>
      <div className={Classes.para1}>
      The final scoring will be done considering the following:
      <ul className={''}>
          <li className={Classes.listPoint} style={{listStyle:'none'}}>1. 15% - Problem statement identification</li>
          <li className={Classes.listPoint} style={{listStyle:'none'}}>2. 25% - Innovative Solution</li>
          <li className={Classes.listPoint} style={{listStyle:'none'}}>3. 10% - Prototype design
</li>
          <li className={Classes.listPoint} style={{listStyle:'none'}}> 4. 15% - End-to-end implementation</li>
          <li className={Classes.listPoint} style={{listStyle:'none'}}>
          5. 25% - Business model analysis
          </li>
          <li className={Classes.listPoint} style={{listStyle:'none'}}>6. 10% - Presentation of Idea</li>
      </ul>
      </div>
      <div className={Classes.subtitle}>
      GUIDELINES
      </div>
      <div className={Classes.para1}>
      <ul className={''}>
          <li className={Classes.listPoint}>Strictly refrain from plagiarism. An improvement to an existing solution is encouraged</li>
          <li className={Classes.listPoint}>Teams are encouraged to use data to justify the research at every step.</li>
          <li className={Classes.listPoint}>The team would be awarded extra points if the proposed solution can also be used for other
focus areas, apart from the regions for which the solution was initially designed.</li>
      </ul>
      </div>
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

export const BlueYonder =() => {
    return (
      <>
      <div className={Classes.mainContainer}>
      <div className={Classes.pstitle}>INTRODUCTION</div>
      <div className={Classes.para1}>
      The impact of new supply chain models was discussed at the National Association of Wellknown Companies of India (NAWCI). The member corporations of NAWCI are large/ midsize corporations of India, e-market players, distributors, and retailers. They sell typical
consumer products ranging from food and beverages, personal care, health supplements,
paper and stationery, household supplies, and well-being products. There is rapid growth in
terms of overall footprint and YoY growth.
      </div>
      <div className={Classes.para1}>
      Over the years, there has been a gradual shift towards e-commerce channels, and it has
exploded due to multiple COVID-induced lockdowns in the last couple of years. All
companies have enhanced their direct-to-consumer sales. An internal task force found that
while customer satisfaction has increased, the carbon footprint has increased significantly
due to added packaging, last-mile logistics, and increased returns, directly impacting
distributors and retailers.
      </div>
      <div className={Classes.para1}>
      NAWCI members are concerned about the sustainability of these supply chain models. It
wants to improve its impact on the environment and sustainability significantly – a strategic
goal they have set for itself, putting them on a path to become one of the ‘greenest’
companies in the world.

      </div>
      <div className={Classes.para1}>
      To achieve this ambitious goal, NAWCI has set up an empowered task force led by
exceptionally talented Gen Z members to get innovative solutions to this problem. Your
objective is to arrive at a strategic plan broken down at the tactical level to reduce the
overall carbon footprint significantly while focusing on customer satisfaction.
      </div>
      
      <div className={Classes.pstitle}>PROBLEM STATEMENT</div>
      <div className={Classes.para2}>
          <div className={Classes.subpara}>
            NAWCI wants to lay out a comprehensive time-phased,
            5-year roadmap proposal with specific initiatives to
            achieve its end goal of significant carbon reduction.


            The proposal must be supported by relevant data and operate
            within contemporary real-life constraints, e.g., technological
            limitations. Highlight how the solution recommendation will
            help the government achieve the target of the COP26 summit
            and benefits for NAWCI (e.g., tax benefits).
           
          </div>
          <div className={Classes.imgbox}><img src={BlueYonderImg} alt="PS Img" className={Classes.img} /></div>
      </div>
      
      <div className={Classes.para3}>
      The initiatives should follow the MAQ framework:
      <ul className={Classes.listPoints2}>
          <li className={Classes.listPoint}>Measurable profitability and revenue impact</li>
          <li className={Classes.listPoint}>Actionable Initiatives</li>
          <li className={Classes.listPoint}>Quantifiable and predictable benefits</li>
      </ul>
      </div>
      
      <div className={Classes.para1}>
      For example, a proposed initiative to combine deliveries and pick-up should be supported by
expected returns, assessment of last-mile reductions, and, if applicable, the potential impact on
revenue in case of compromise on customer service.
      </div>
     <div className={Classes.guidelineTitle}>NETWORK SCOPE</div>
     <div className={Classes.para1}>
     NAWCI’s members can influence the following spans of control:
     </div>
     <div className={Classes.subtitle}>
     Warehousing
     </div>
     <div className={Classes.para1}>
     Each member may have one or several warehouses across the country. They receive products
from manufacturing plants and distribute them to customers. The mode of delivery can be via
own truck or third-party logistics(3 PL) services.
     </div>

     <div className={Classes.subtitle}>
     Transportation
     </div>
     <div className={Classes.para1}>
     The overall carbon footprint inherits the carbon impact of the entire supply chain:
transportation and logistics (own assets and 3 PL) from Plant to Distribution Centre (DC), DC to
Customer, Plant to Customer for forwarding distribution, and Customer to DC, Customer to
Vendor and returns.
     </div>

     <div className={Classes.subtitle}>
     Packaging
     </div>
     <div className={Classes.para1}>
     Manufactured products come with their packaging. Additional packaging may get added due to
the delivery mode (direct to consumer, ship to distributors, etc.):
      <ul className={''}>
          <li className={Classes.listPoint}>Product’s retail packaging</li>
          <li className={Classes.listPoint}>Larger boxes for transportation</li>
          <li className={Classes.listPoint}>Return boxes for returns of damaged/ rejected/ expired goods.</li>
      </ul>

      The production processes in plants are out of scope for this exercise, and the carbon footprint
to manufacture is fixed/ given for each product.


     </div>
    
     <div className={Classes.guidelineTitle}>
     EVALUATION AND SUBMISSION
     </div>
     <div className={Classes.para1}>
     The Evaluation process will be done in two parts :
     <ul className={''}>
          <li className={Classes.listPoint} style={{listStyle:'none'}}>1. Mid-Evaluation Submission: 100 pts</li>
          <li className={Classes.listPoint} style={{listStyle:'none'}}>2. Final Presentation: 300 pts</li>
      </ul>

      Points will be distributed on the basis of the following broad categories:
     
      <ul className={''}>
          <li className={Classes.listPoint} style={{listStyle:'none'}}>1. Actionability of the 5-year vision (mid and long-term opportunities) - 35%</li>
          <li className={Classes.listPoint} style={{listStyle:'none'}}>2. Net Negative Carbon Impact - 25% </li>
          <li className={Classes.listPoint} style={{listStyle:'none'}}>3. Cost Impact -20% </li>
          <li className={Classes.listPoint} style={{listStyle:'none'}}>4. Market Share and SLAs Impact -15% </li>
          <li className={Classes.listPoint} style={{listStyle:'none'}}>5. Model sustainability -5% </li>
         
      </ul>
     </div>

     <div className={Classes.bigSubtitle}>
     MID EVALUATION
     </div>
     <div className={Classes.para1}>
     The Mid- Evaluation report needs to be submitted in PDF format by 15th March. It should not
   exceed seven pages (excluding the cover page).
   The report should consist of the following details:
     </div>
     <div className={Classes.subtitle}>
     Identifying and analyzing the problem
     </div>
     <div className={Classes.para1}>
     The participants are expected to provide an overview of the currently existing supply chain
models, i.e., conduct extensive research on the various stages of the models and analyze the
current carbon footprint in each step.
     </div>

     <div className={Classes.subtitle}>
     Devising an implementation Strategy
     </div>
     <div className={Classes.para1}>
     After identifying and analyzing the current issues, provide a brief explanation of the
initiatives that you plan to undertake under the 5-year roadmap proposal. The initiatives
should be analyzed based on the impact and resources required. They should be data-centric
as well as integrable in the current models efficiently.
     </div>

     <div className={Classes.subtitle}>
     Impact of the proposal
     </div>
     <div className={Classes.para1}>
     An assessment of the proposal should be provided in terms of the carbon footprint it is
reducing by customizing or improving the various stages, the cost and revenue impact it
induces in the current model, and how well it is catering to the customers.
     </div>

     <div className={Classes.subtitle}>
     Strategic fit
     </div>
     <div className={Classes.para1}>
     Analysis of the on-ground implications of implementing the model, i.e., the feasibility analysis
of the model in real markets and assessing the adaptability and flexibility of the model.
     </div>

            <div className={Classes.bigSubtitle}>
            FINAL PRESENTATION
            </div>
            <div className={Classes.para1}>
            All participating teams would be required to give their final presentations of their proposed
            solution on 26th March.
            Please note that the Final presentation should wrap up within 15 minutes followed by Q&A (5
            min).

            </div>

       <div className={Classes.impnote}>
       Important Notes:
       </div>
       <div className={Classes.para1}>
       <ul className={''}>
          <li className={Classes.listPoint}>All the critical assumptions must be documented in the appendix of the proposal.</li>
          <li className={Classes.listPoint}>Any estimated carbon impact and cost impact must be supported by quantitative analysis
(refer to MAQ framework in Problem Statement section above)</li>
          <li className={Classes.listPoint}>Before proposing a solution, ask whether something similar has been attempted in real life,
analyzing the reasons for its success or failure. </li>
      
      </ul>
       </div>

       <div className={Classes.note}>
      Send your submissions at this email: <a rel="noreferrer" className={Classes.link} href="mailto:submissions@interiit-tech.org" target={'_blank'}>submissions@interiit-tech.org</a>
      </div>







      </div>
      </>
    )
}


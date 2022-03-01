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
          <li>Define: Identify a problem, and describe a problem statement to be solved.</li>
          <li>Design: Devise a scalable solution (a high-level design) to solve the above-defined problem
statement, supported by the implementation details for all the system blocks described in the
solution.</li>
          <li>Develop: Consolidate a feasible working prototype that can be implemented. All the necessary
implementation files (schematics and designs) should be submitted.
</li>
          <li> Detail: Put in place a complete business model of the pitched solution and explain how the
solution will scale and impact the target audience.</li>
          <li>
          Defend: Create a 15-min presentation that guides the judging panel through your work
          </li>
      </ul>

      <div className={Classes.subtitle}>
      To be included in the final presentation:
      </div>
      <ul className={Classes.listPoints}>
          <li>Solution validation and testing, its impact, and sustainability analysis.</li>
          <li>Product Discovery:
              <div className={Classes.subpoints}>- Identifying the problem or challenge.</div>
              <div className={Classes.subpoints}>- Understanding competition: What makes this product or service unique?</div>
              <div className={Classes.subpoints}>- Mapping all the crucial stakeholders along the value chain.</div>
          </li>
          <li>Proposed User Journey:
              <div className={Classes.subpoints}>- Defining customer segments targeted by the solution.</div>
              <div className={Classes.subpoints}>- Identifying the best delivery channels by customer.</div>
              <div className={Classes.subpoints}>- Defining the process for user acquisition and retention.</div>
          </li>
          <li>Specifications for Minimum Viable Product (MVP).</li>
          <li>Define a go-to-market plan along with potential milestones for the launch and adoption process.</li>
          <li>Underlining the success metrics / KPIs and impact estimation.</li>
          <li>Diligence to the commercialization aspect: Defining business model and viability, Revenue model
with cost analysis, and venture journey.</li>
          <li>UI proposal for customer-centric IoT solutions.</li>
      </ul>

      </div>

      </>
    )
}  

export const BlueYonder =() => {
    return (
      <>
      <div className={Classes.mainContainer}>
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


      </div>
      </>
    )
}


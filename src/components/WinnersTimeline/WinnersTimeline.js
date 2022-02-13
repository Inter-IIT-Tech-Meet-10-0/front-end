import React from 'react'
import Classes from './WinnersTimeline.module.css';

function WinnersTimeline() {
    return (
        <>
        <div className={Classes.container}>
            <div className={Classes.timeline}>
                <YearWinners year ={2020}/>
                <YearWinners year ={2019}/>
                <YearWinners year ={2018}/>
                <YearWinners year ={2017}/>
            </div>
        </div>
        </>
    )
}

const YearWinners =({year}) =>{
    return (
        <div className={Classes.winnersList}>
                    <div className={Classes.year}>{Math.floor(year/10)}<span className={Classes.gradient}>{year%10}</span></div>
                    <div className={Classes.winnerBox}>
                        <div className={Classes.imgbox}>
                            {/* <img src="" alt="" /> */}
                        </div>
                        <div className={Classes.imgbox}>
                            {/* <img src="" alt="" /> */}
                        </div>
                        <div className={Classes.imgbox}>
                            {/* <img src="" alt="" /> */}
                        </div>
                    </div>
                </div>
    )
}

export default WinnersTimeline

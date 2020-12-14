import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
    summer:{
        text: 'Summer is here',
        iconName: 'sun'
    },
    winter:{
        text: 'Its freezing outside',
        iconName: 'snowflake'
    }
}



const getSeason = (lat , month) => {
if(month>2 && month<9){
   return lat > 0 ? 'summer': 'winter';
}else {
   return lat > 0 ? 'winter' : 'summer';
} 
}


const SeasonDisplay = (props) => {
const season = getSeason(props.lat , new Date().getMonth());
const {text , iconName} = seasonConfig[season];
return ( <div className={`season-display ${season}`}>
<i className={`left-icon massive ${iconName} icon`} />
<h1 className="text">{text}</h1>
<i className={`right-icon massive ${iconName} icon`} />
</div>
);
};

export default SeasonDisplay;
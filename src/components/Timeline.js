import React from 'react';
import timeLineProjectData from '../data/ProjectData';
import TimelineItem from './TimelineItem';

const Timeline = () =>
    timeLineProjectData.length > 0 && (
        <div className="timeline-container">
            {timeLineProjectData.map((data, idx) => (
                <TimelineItem projectData={data} key={idx} />
            ))}
        </div>
    );

export default Timeline;

/*
- import data, give it a different name to keep code clean
- conditional operator to get data.
- map method to get data and index
- and get TimelineItem to add data and index to it.  */
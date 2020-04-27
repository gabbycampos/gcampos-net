import React from 'react';

const TimelineItem = ({ projectData }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: projectData.category.color }}>
                {projectData.category.tag}
            </span>
            <time>{projectData.date}</time>
            <p>{projectData.text}</p>
            {projectData.link && (<a href={projectData.link.url}
                target="_blank"
                rel="noopener noreferrer">
                {projectData.link.text}
            </a>
            )}
            <span className="circle"></span>
        </div>
    </div>
);

export default TimelineItem;

/*
- will take data from Timeline
- add html, inline styles
- place in values from data
- add link with conditional operator just in case I add a post with no data.
*/
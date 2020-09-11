import React from 'react';
import PropTypes from 'prop-types';

const Project = ({
  bgImage,
  bgClasses,
  title,
  description,
  tags,
  externalLink,
}) => (
  <div className="max-w-sm overflow-hidden grid-span-1 shadow-lg bg-white m-8 rounded-lg">
    <a href={externalLink} target="_blank" rel="noreferrer">
      <img className={`w-full h-48 ${bgClasses}`} src={bgImage} alt="" />
    </a>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-blue-900 text-center">
        {title}
      </div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      {tags.map((tag, key) => (
        <span
          key={`${title}tag_${key}`}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

Project.propTypes = {
  bgImage: PropTypes.string,
  bgClasses: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.object,
  tags: PropTypes.array,
  externalLink: PropTypes.string,
};

export default Project;

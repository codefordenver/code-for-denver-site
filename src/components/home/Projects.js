import React from 'react';

import ProjectsCarousel from './ProjectsCarousel';
import NonprofitPartnership from './NonprofitPartnership';

const projectsData = [
  {
    active: true,
    imgUrl: '/static/img/CutePetsDenver.png',
    name: 'CutePetsDenver',
    description: 'Twitter bot that posts adoptable pets in your city',
    partner: 'Denver Code for America Fellows',
    partnerUrl: 'https://www.codeforamerica.org/governments/denver/',
    projectUrl: 'https://twitter.com/cutepetsdenver',
    sourceLink: 'https://github.com/codeforamerica/cutepets'
  },
  {
    imgUrl: '/static/img/streetsweeping.png',
    name: 'Denver Street Sweeping',
    description: 'Find street sweeping information for an address in Denver',
    partner: 'Denver Code for America Fellows',
    partnerUrl: 'https://www.codeforamerica.org/governments/denver/',
    projectUrl: 'http://streetsweep.co',
    sourceLink: 'https://github.com/codeforamerica/denver-schedules'
  },
  {
    imgUrl: '/static/img/sparkhelp.png',
    name: 'SparkHelp',
    description: 'disaster relief made simple for people and groups',
    partner: 'Spark',
    partnerUrl: 'http://www.wearespark.org/',
    projectUrl: 'https://sparkhelp.org'
  },
  {
    imgUrl: '/static/img/sparktime.png',
    name: 'SparkTime',
    description: 'people and groups record volunteer time by text message',
    partner: 'Spark',
    partnerUrl: 'http://www.wearespark.org/',
    projectUrl: 'http://sparktime.org'
  },
  {
    imgUrl: '/static/img/sparkfund.png',
    name: 'SparkFund',
    description: 'a unified system for funding and reporting disaster recovery',
    partner: 'Spark',
    partnerUrl: 'http://www.wearespark.org/',
    projectUrl: 'http://spark.fund'
  }
];

const Projects = () => (
  <section id="projects" className="container content-section">
    <h2>Projects</h2>

    <ProjectsCarousel projects={projectsData}/>
    <br/>
    <br/>
    <NonprofitPartnership />
  </section>
);

export default Projects;

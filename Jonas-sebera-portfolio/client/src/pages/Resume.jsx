import React from 'react'
import { BiBookReader } from 'react-icons/bi'
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


const Resume = () => {
    return (
        <div className='main-container container mx-auto font-general-medium'>
        <header className='ml-3 md:mx-auto dark:text-blue-400  font-semibold text-3xl w-[3rem] border-b-[4px] rounded pb-4 border-blue-500 dark:border-blue-400 text-blue-500 mb-5'>
            Resume
        </header>
            <section>
                <div className='flex items-center gap-[1rem] pl-3'>
                    <div className='p-[.5rem] shadow-lg dark:shadow-[none] bg-blue-500 text-white text-2xl rounded-lg'>
                        <BiBookReader />
                    </div>
                    <h3 className='text-2xl text-primary-dark dark:text-ternary-light font-bold font-general-medium'>Education</h3>
                </div>
                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                    }}
                    className='mt-5'
                >
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <li className="timeline-item flex flex-col gap-1">

                                <h4 className="h4 timeline-item-title text-lg text-primary-dark font-general-medium dark:text-ternary-light font-semibold">Rwanda Coding Academy</h4>

                                <span className='text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium'>2022 — Present</span>

                                <p className="timeline-text  text-primary-dark dark:text-ternary-light font-medium font-general-medium">
                                    At Rwanda Coding Academy, I am currently studying software engineering and embedded systems. The academy provides a comprehensive curriculum and hands-on training to develop my skills in coding and programming. I am learning various programming languages, software development methodologies, and techniques to build robust and efficient software solutions.
                                </p>

                            </li>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <li className="timeline-item flex flex-col gap-1">

                                <h4 className="h4 font-general-medium timeline-item-title text-lg text-primary-dark dark:text-ternary-light font-semibold">Ecole Des Sciences Byimana</h4>

                                <span className='text-lg font-general-medium text-blue-400 font-semibold'>2019 — 2022</span>

                                <p className="timeline-text font-general-medium  text-primary-dark dark:text-ternary-light font-medium">
                                    During my time at Ecole Des Sciences Byimana, I completed my ordinary level education with a focus on sciences. The school offered a well-rounded curriculum that included subjects such as mathematics, physics, chemistry, and biology. I gained a solid foundation in scientific principles and problem-solving skills during this period.
                                </p>

                            </li>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent>
                            <li className="timeline-item flex flex-col gap-1">

                                <h4 className="h4 font-general-medium timeline-item-title text-lg text-primary-dark dark:text-ternary-light font-semibold">Ecole Le Petit Prince</h4>

                                <span className='text-lg font-general-medium text-blue-400 font-semibold'>2013 — 2018</span>

                                <p className="timeline-text font-general-medium  text-primary-dark dark:text-ternary-light font-medium">
                                    At Ecole Le Petit Prince, I completed my primary education. This school provided a nurturing environment for learning and personal growth. Throughout my time there, I gained a solid understanding of various subjects, including languages, mathematics, social sciences, and natural sciences. It was a foundational period in my educational journey.
                                </p>

                            </li>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </section>
            <section className='mt-10'>
                <div className='flex items-center gap-[1rem] pl-3'>
                    <div className='p-[.5rem] shadow-lg dark:shadow-[none] bg-blue-500 text-white text-2xl rounded-lg'>
                        <BiBookReader />
                    </div>
                    <h3 className='text-2xl text-primary-dark dark:text-ternary-light font-bold font-general-medium'>Experience</h3>
                </div>
                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                    }}
                    className='mt-5'
                >
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <li className="timeline-item flex flex-col gap-1">

                                <h4 className="h4 font-general-medium timeline-item-title text-lg text-primary-dark dark:text-ternary-light font-semibold">Frontend Develper At Italos</h4>

                                <span className='text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium'>2021 — 2023</span>

                                <p className="timeline-text font-general-medium  text-primary-dark dark:text-ternary-light font-medium">
                                    At Italos, I worked as a frontend developer. My role involvedcreating and implementing user interface components and designing engaging and user-friendly web interfaces. I utilized various frontend technologies such as React and Bootstrap to build interactive and responsive websites. I collaborated with the design and development teams to ensure a seamless user experience.
                                </p>

                            </li>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <li className="timeline-item flex flex-col gap-1">

                                <h4 className="h4 font-general-medium timeline-item-title text-lg text-primary-dark dark:text-ternary-light font-semibold">Fullstack Develper At Akashi</h4>

                                <span className='text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium'>2020 — 2021</span>

                                <p className="timeline-text font-general-medium  text-primary-dark dark:text-ternary-light font-medium">
                                    At Akashi, I was employed as a fullstack developer. In this role, I was responsible for both frontend and backend development. I worked with a range of technologies, frameworks, and programming languages to build robust and scalable web applications. I collaborated with cross-functional teams to design, develop, and deploy innovative software solutions.
                                </p>

                            </li>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <li className="timeline-item flex flex-col gap-1">

                                <h4 className="h4 font-general-medium timeline-item-title text-lg text-primary-dark dark:text-ternary-light font-semibold">Project Leader</h4>

                                <span className='text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium'>2022 — Present</span>

                                <p className="timeline-text font-general-medium  text-primary-dark dark:text-ternary-light font-medium">
                                    In my role as a project leader, I oversee and manage various software development projects. I coordinate with team members, set project goals and timelines, and ensure successful project execution. I am responsible for resource allocation, task delegation, and ensuring effective communication within the team. I monitor project progress, mitigate risks, and ensure timely delivery of high-quality software solutions.
                                </p>

                            </li>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <li className="timeline-item flex flex-col gap-1">

                                <h4 className="h4 font-general-medium timeline-item-title text-lg text-primary-dark dark:text-ternary-light font-semibold">Web Designer</h4>

                                <span className='text-lg text-blue-500 dark:text-blue-400 font-semibold font-general-medium'>2018 — Present</span>

                                <p className="timeline-text font-general-medium  text-primary-dark dark:text-ternary-light font-medium">
                                    As a web designer, I am involved in creating visually appealing and intuitive website designs. I combine my knowledge of design principles, user experience, and frontend technologies to craft engaging web interfaces. I collaborate with clients and stakeholders to understand their requirements and translate them into visually stunning and functional websites. I also work closely with developers to ensure seamless implementation of the designs.
                                </p>

                            </li>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>

            </section>
        </div>
    )
}

export default Resume
import React from 'react';
import star from '@/assets/star.png';
import interfaceClass from '@/assets/user-interface.png';
import jane from '@/assets/jane-cooper.png';
import jenny from '@/assets/jenny-wilson.png';
import esther from '@/assets/esther-howard.png';
import shoaib from '@/assets/shoaib.png';
import design from '@/assets/figma-course.png';
import arrowUp from '@/assets/arrowUpRight.png';


const classes = [
    {
        image: design,
        // timing: '',
        section: 'Design',
        title: 'Figma UI UX Design..',
        arrowUp: arrowUp,
        text: 'Use Figma to get a job in UI Design, User Interface, User Experience design.',
        rating: {
            rating: '4.3',
            stars: star,
            suscribers: '(16,325)'
        },
        cost: {
            image: jane,
            name: 'Jane Cooper',
            year: '2001 Enrolled',
            price: 17.84
        }

    },
    {
        image: shoaib,
        // timing: '',
        section: 'Design',
        title: 'Learn With Shoaib',
        arrowUp: arrowUp,
        text: 'Design Web Sites and Mobile Apps that Your Users Love and Return to Again.',
        rating: {
            rating: '3.9',
            stars: star,
            suscribers: '(832)'
        },
        cost: {
            image: jenny,
            name: 'Jenny Wilson',
            year: '2001 Enrolled',
            price: 8.99,
        }

    },
    {
        image: interfaceClass,
        // timing: '',
        section: 'Design',
        title: 'Building User Interface..',
        arrowUp: arrowUp,
        text: 'Learn how to apply User Experience (UX) principles to your website designs.',
        rating: {
            rating: '4.2',
            stars: star,
            suscribers: '(125)'
        },
        cost: {
            image: esther,
            name: 'Esther Howard',
            year: '2001 Enrolled',
            price: 11.70
        }

    },
    {
        image: design,
        // timing: '',
        section: 'Design',
        title: 'Building User Interface..',
        arrowUp: arrowUp,
        text: 'Learn how to apply User Experience (UX) principles to your website designs.',
        rating: {
            rating: '4.2',
            stars: star,
            suscribers: '(125)'
        },
        cost: {
            image: esther,
            name: 'Esther Howard',
            year: '2001 Enrolled',
            price: 11.70
        }

    },
    {
        image: interfaceClass,
        // timing: '',
        section: 'Design',
        title: 'Building User Interface..',
        arrowUp: arrowUp,
        text: 'Learn how to apply User Experience (UX) principles to your website designs.',
        rating: {
            rating: '4.2',
            stars: star,
            suscribers: '(125)'
        },
        cost: {
            image: esther,
            name: 'Esther Howard',
            year: '2001 Enrolled',
            price: 11.70
        }

    },


]

const Courses = () => {
    return (
        <section className="p-4 sm:p-6 md:p-10 bg-gray-50">
            <h2 className="text-4xl font-bold mb-6 text-center">Our Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {classes.map((course, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
                        <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                        <div className="p-4 flex-1 flex flex-col justify-between">
                            <div>
                                <p className="text-sm text-purple-600 font-semibold mb-1">{course.section}</p>
                                <h3 className="text-lg font-bold mb-2 flex items-center justify-between">
                                    {course.title}
                                    <img src={course.arrowUp} alt="arrow" className="w-4 h-4" />
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">{course.text}</p>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center space-x-2">
                                    <img src={course.rating.stars} alt="stars" className="w-4 h-4" />
                                    <span>{course.rating.rating}</span>
                                    <span className="text-gray-500">{course.rating.suscribers}</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center space-x-2">
                                    <img src={course.cost.image} alt={course.cost.name} className="w-8 h-8 rounded-full" />
                                    <div>
                                        <p className="text-sm font-medium">{course.cost.name}</p>
                                        <p className="text-xs text-gray-500">{course.cost.year}</p>
                                    </div>
                                </div>
                                <span className="text-purple-600 font-semibold text-sm">${course.cost.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Courses


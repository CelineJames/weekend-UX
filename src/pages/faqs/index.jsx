import { useState } from 'react';

const faqs = [
    {
        question: 'What is Weekend UX all about?',
        answer:
            'Weekend UX is a digital skills school that trains individuals in high-demand areas like UX/UI design, frontend development, data analytics, Agile methodology, and more — all delivered in an engaging weekend-based format.',
    },
    {
        question: 'Who can benefit from Weekend UX programs?',
        answer:
            'Students, career switchers, tech enthusiasts, and working professionals looking to gain practical digital skills or pivot into tech roles will find our weekend-focused courses highly beneficial.',
    },
    {
        question: 'How long do the training programs last?',
        answer:
            'Our programs are structured to run over weekends to suit busy schedules. Each course varies in length, typically spanning a few weekends, depending on the content and depth.',
    },
    {
        question: 'Is the training remote or in-person?',
        answer:
            'All our programs are fully remote. We use platforms like Zoom, Figma, Notion, and Google Classroom to deliver lessons and foster collaboration.',
    },
    {
        question: 'How can I enroll or get more information?',
        answer:
            'You can reach us through the contact form on our website or send an email to kaytorah55@gmail.com. We’re happy to provide all the details you need.',
    },
];


export default function Faqs() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="bg-gray-50 py-20 px-6">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-semibold text-center text-primary underline mb-10">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border bg-white rounded-md shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-primary/10 transition"
                            >
                                <span>{faq.question}</span>
                                <span className="text-primary text-xl">
                                    {activeIndex === index ? '-' : '+'}
                                </span>
                            </button>
                            {activeIndex === index && (
                                <div className="p-4 pt-4 text-sm text-gray-600">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

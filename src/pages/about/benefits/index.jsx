const benefits = [
    {
        number: '01',
        heading: 'Standardization',
        text: 'When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ... Read More'
    },
    {
        number: '02',
        heading: 'Reduced Costs',
        text: 'With Weekend UX, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning ... Read More'
    },
    {
        number: '03',
        heading: 'More Customization',
        text: 'ust like learners aren’t one-size-fits-all, learning is not a one-size-fits-all experience. By using different ... Read More'
    },
    {
        number: '04',
        heading: 'Affordable Pricing',
        text: 'With Weekend UX, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning ... Read More'
    },
    {
        number: '05',
        heading: 'Learner Satisfaction',
        text: 'If you really want students to retain what they learn, you’ll need to aim for high satisfaction rates. Bad ... Read More'
    },
    {
        number: '06',
        heading: 'Multimedia Materials',
        text: 'One of the main reasons why custom eLearning is effective is that it’s the perfect delivery method for ... Read More'
    },
]


export default function Benefits() {
    return (
        <div className="w-full max-w-full my-24 px-6 md:px-20">
            {/* Header */}
            <div data-aos="fade-up" className="max-w-2xl mx-auto text-center mb-14">
                <p className="text-primary font-bold text-lg mb-4">Our Benefits</p>
                <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                    By Joining WEEKEND UX Platform, One Can Avail a Lot Of Benefits.
                </h2>
                <p className="text-gray-600">
                    Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best.
                </p>
            </div>

            {/* Grid of Benefits */}
            <div  data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-lg shadow-sm transition duration-300 ${index % 2 === 0 ? 'bg-greenlight' : 'bg-white'
                            }`}
                    >
                        <div className="text-primary font-bold text-xl mb-2">{benefit.number}</div>
                        <h3 className="text-lg font-semibold mb-2">{benefit.heading}</h3>
                        <p className="text-gray-700">
                            {benefit.text.split('Read More')[0]}
                            <span className="font-bold text-primary cursor-pointer hover:opacity-80">
                                Read More
                            </span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

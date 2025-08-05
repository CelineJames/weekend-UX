import bulbs from '@/assets/bulbs.png';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function Features() {
    return (
        <div  className="max-w-full w-full mt-28 mb-10 flex justify-between items-start gap-8 px-14">
            <div  data-aos="slide-right" className="flex-1 pl-6">
                <div className="w-[474px] h-[474px] bg-gray4 backdrop-blur-md relative rounded-lg">
                    <img src={bulbs} alt='pictures of light-bulbs' className='absolute -bottom-8 left-5' />
                </div>
            </div>

            <div data-aos="fade-up" className="flex-1">
                <span className='text-xl font-bold text-primary block mb-3'>Features</span>
                <h2 className='text-black text-3xl font-[500] mb-4 w-[70%]'>We are always working to provide you best of the features in all aspects.</h2>
                <p className='font-extralight mb-16 pr-12'>
                    At WEEKENDUX the chief determination is to clear the minds of our students about their goals,
                    while making them consistent in their ambitions and pushing them to be confident for their journey
                    towards the course of time.
                </p>
                <p className='font-extralight mb-10 pr-12'>
                    You will find every little thing on the internet in just a click of hand, but here we admire that without
                    knowledge and practice the internet may even also fail you in your life.
                </p>

                <button className="mt-4 px-4 py-3 rounded-3xl text-sm bg-primary text-white flex items-center gap-1 group">
                    Learn More
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRightIcon className="w-4 h-4" />
                    </span>
                </button>

            </div>

        </div>
    );
}
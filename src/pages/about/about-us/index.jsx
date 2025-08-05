import laptopImage from '@/assets/laptop-image.png';
import officeCorridor from '@/assets/office-corridor.png'
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function AboutUs() {
    return (
        <div data-aos="fade-down" className="max-w-full w-full mt-24 mb-10 flex justify-between items-start gap-8 px-14">
            <div  className="flex-1 mt-8">
                <h1 className='text-5xl font-bold text-primarygreen mb-4'>About Us</h1>
                <h2 className='text-black text-3xl font-semibold mb-6 w-[70%]'><span className='text-orange'>WEEKEND UX</span> Providing The Best Opportunities To The Students Around The Glob.</h2>
                <p>Weekend UX, is a UI/UX Design Academy in Delhi involved in User Experience and User Interface Training and Consulting.
                    It was started in 2023 and passionate towards User Interface Design/ User Experience Design, Human Computer Interaction Design.
                    Humanoid is gushing towards competence to acquire knowledge and have a wide understanding towards the sphere through the foremost
                    courses in the area of UI/UX Design, by strengthening up your skills, for your golden future
                </p>

                <button className="mt-8 px-4 py-3 rounded-3xl text-sm bg-primary text-white flex items-center gap-1 group">
                    Join Us
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRightIcon className="w-4 h-4" />
                    </span>
                </button>

            </div>
            <div className="flex-1 flex justify-end items-center pr-16">
                <div className="w-[474px] h-[474px] bg-gray4 backdrop-blur-md relative rounded-lg">
                    <img src={officeCorridor} alt='' className='absolute -top-4 -right-10' />
                    <img src={laptopImage} alt='' className='absolute -bottom-4 -left-10' />
                </div>
            </div>
        </div>
    );
}
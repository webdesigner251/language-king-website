import BannerBg from '../assets/ebook/e-book-bg.png'
import NewTipsImage from '../assets/ebook/new-tips.png'
import avatar from '../assets/avatar-img.png';
import CheckmarkYellow from "../assets/icons/checkmark-yellow.svg";
import Book1 from '../assets/ebook/book1.png'
import Book2 from '../assets/ebook/book2.png'
import Book3 from '../assets/ebook/book3.png'
import Book4 from '../assets/ebook/book4.png'

const FreeEBook = () => {
    return (
        <>
            <section className="sm:pt-[160px] pt-[60px] sm:pb-[60px] pb-[40px] relative flex flex-column justify-center items-center">
                <img src={BannerBg} alt="BannerBg" className="absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover" />
                <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] w-full z-10 relative ">
                    <div className="flex gap-x-[190px]">
                        <div className='w-[20%]'>
                            <img src={NewTipsImage} alt="NewTipsImage" className='h-auto max-w-[290px]' />
                            <span className='uppercase font-semibold text-white/50'>LEARN FROM THE EXPERT + MORE:</span>
                            <div className="sm:flex items-center gap-3 mt-[32px] hidden">
                                <img src={avatar} alt="avatar" className="w-[50px] h-[50px] rounded-full border-4 border-white/10" />
                                <div>
                                    <span className="text-white text-lg font-semibold">Abhishek</span>
                                    <h3 className="text-base font-light text-white/60 leading-[1.2]">PTE Master Trainer</h3>
                                </div>
                            </div>
                        </div>
                        <div className="w-[80%]">
                            <div className='flex flex-col justify-between h-full'>
                                <div>
                                    <div className="flex justify-between md:pe-[30px]">
                                        <div className='max-w-[810px]'>
                                            <h1 className='text-white main-heading font-bold'>PTE Reading Blanks <span className='text-[#F1CD5A] block'>Free E-book</span></h1>
                                            <p className='font-light text-xl text-white'>Learn how to solve PTE Reading Blanks with confidence, master linkers, starters, and connectors, test your skills with an interactive quiz, and boost your score effortlessly</p>
                                        </div>
                                        <div className='max-w-[252px]'>
                                            <h2 className='text-white text-lg font-bold my-[25px]'>YOU’LL LEARN HOW TO:</h2>
                                            <ul className="">
                                                <li className="flex items-center sm:leading-[1.5] leading-[1.4] sm:text-base text-sm text-white sm:gap-7 gap-4 py-2">
                                                    <img
                                                        src={CheckmarkYellow}
                                                        alt="CheckmarkYellow"
                                                        className="w-4"
                                                    />
                                                    Attempt R&W blanks
                                                </li>
                                                <li className="flex items-center sm:leading-[1.5] leading-[1.4] sm:text-base text-sm text-white sm:gap-7 gap-4 py-2">
                                                    <img
                                                        src={CheckmarkYellow}
                                                        alt="CheckmarkYellow"
                                                        className="w-4"
                                                    />
                                                    Difference b/w linkers, <br /> starters and <br /> connectors
                                                </li>
                                                <li className="flex items-center sm:leading-[1.5] leading-[1.4] sm:text-base text-sm text-white sm:gap-7 gap-4 py-2">
                                                    <img
                                                        src={CheckmarkYellow}
                                                        alt="CheckmarkYellow"
                                                        className="w-4"
                                                    />
                                                    Quiz to test your learning
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='flex max-w-[900px] gap-[40px] mt-[80px]'>
                                        <div className="relative rounded-lg">
                                            <a
                                                href="#"
                                                className="align-middle inline-flex items-center justify-center text-center primary-btn bg-gradient-primary text-black px-3 sm:py-3 py-[14px] sm:font-semibold font-bold sm:text-xl text-lg relative z-10 sm:min-w-[292px] rounded-lg "
                                            >
                                                Start 7-Day Trial
                                            </a>
                                        </div>
                                        <div>
                                            <h4 className='text-[#F1CD5A] text-xl font-semibold'>Save $33 by using AI Portal + Prediction File + 6 Books</h4>
                                            <span className='uppercase font-semibold text-white/50 mt-[5px]'>LEARN FROM THE EXPERT + MORE:</span>

                                        </div>
                                    </div>
                                </div>
                                <div className="flex mt-[120px]">
                                    <div className='w-[25%]'>
                                        <span className="text-white text-lg font-semibold">Other Books</span>
                                        <h3 className="text-base font-light text-white/60 leading-[1.2]">PTE Study Material</h3>
                                    </div>
                                    <div className="grid grid-cols-4 justify-between gap-">
                                        <img src={Book1} alt="Book1" className='w-full h-auto' />
                                        <img src={Book2} alt="Book2" className='w-full h-auto' />
                                        <img src={Book3} alt="Book3" className='w-full h-auto' />
                                        <img src={Book4} alt="Book4" className='w-full h-auto' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FreeEBook;

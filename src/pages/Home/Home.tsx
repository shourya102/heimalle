import {animate, motion, useMotionValue} from "framer-motion";
import "./Home.css"
import {IoIosRocket} from "react-icons/io";
import ImageCard from "../../components/ImageCard/ImageCard.tsx";
import useMeasure from "react-use-measure";
import {useEffect} from "react";
import {PiNumberCircleFour, PiNumberCircleOne, PiNumberCircleThree, PiNumberCircleTwo} from "react-icons/pi";
import ProductCard from "../../components/ProductCard/ProductCard.tsx";
import CityButton from "../../components/CityButton/CityButton.tsx";

const Home = () => {
    const images: string[] = [
        "/images/default-image (5).jpg",
        "/images/default-image (6).jpg",
        "/images/default-image (7).jpg",
        "/images/default-image (8).jpg",
        "/images/default-image (9).jpg",
        "/images/default-image (10).jpg",
        "/images/default-image (1).jpg",
        "/images/default-image (2).jpg",
    ];
    interface ProductImage {
        image: string,
        title: string,
        description: string
    }
    const productImages: ProductImage[] = [
        {
            image: "/images/default-image (1).jpg",
            title: "3 BHK, NEAR RAJPATH",
            description: "Fully furnished, good neighbourhood"
        },
        {
            image: "/images/default-image (2).jpg",
            title: "2 BHK, NEAR SAKET",
            description: "Fully furnished, posh neighbourhood"
        },
        {
            image: "/images/default-image (3).jpg",
            title: "3 BHK, NEAR SHANTI NIKETAN",
            description: "Fully furnished, good neighbourhood"
        },
        {
            image: "/images/default-image (4).jpg",
            title: "3 BHK, NEAR MALVIYA NAGAR",
            description: "Fully furnished, good neighbourhood"
        }
    ];
    interface City{
        city: string,
    }
    const cities: City[] = [
        {
            city: "New Delhi",
        },
        {
            city: "Mumbai"
        },
        {
            city: "Kolkata"
        },
        {
            city: "Chennai"
        },
        {
            city: "Bangalore"
        },
        {
            city: "Hyderabad"
        },
        {
            city: "Pune"
        },
        {
            city: "Ahmedabad"
        },
        {
            city: "Jaipur"
        },
        {
            city: "Lucknow"
        },
        {
            city: "Kanpur"
        },
        {
            city: "Nagpur"
        },
        {
            city: "Indore"
        },
        {
            city: "Bhopal"
        },
        {
            city: "Patna"
        },
        {
            city: "Raipur"
       },
       {
           city: "Agra"
       },
       {
           city: "Vadodara"
       },
       {
           city: "Coimbatore"
       },
       {
           city: "Thiruvananthapuram"
       },
       {
           city: "Vishakhapatnam"
       },
       {
           city: "Ranchi"
       },
       {
           city: "Surat"
       },
       {
           city: "Mysore"
       },
    ]
    const [ref, {width}] = useMeasure();
    const xTranslation = useMotionValue(0);

    useEffect(() => {
        const finalPosition = -width/2;
        const controls = animate(xTranslation, [0, finalPosition], {
            ease: "linear",
            repeat: Infinity,
            duration: 25,
            repeatDelay: 0,
            repeatType: "loop"
        })
        return controls.stop
    }, [width, xTranslation]);

    return (
        <div className="w-full h-fit bg-primary-1 xl:px-50 px-20">
            <div className="h-[80svh] p-10 flex justify-center items-center md:items-start md:justify-between">
                <div className="z-10 hidden md:block">
                    <div className="text-hero text-secondary-1">
                        <div>Explore<span className="text-quaternary-4">.</span></div>
                        <div>Book<span className="text-quaternary-4">.</span></div>
                        <div>Stay<span className="text-quaternary-4">.</span></div>
                    </div>
                </div>
                <div className="w-[30rem] h-[38rem] p-20 gap-30 bg-secondary-1 red-shadow-solid text-primary-1 z-10">
                    <div className="text-heading4 font-medium flex justify-between items-center p-5">
                        <span>Where will you stay next?</span>
                        <span className="text-heading2"><IoIosRocket/></span>
                    </div>
                    <div className="p-10 gap-40 flex flex-col">
                        <div className="flex flex-col gap-20">
                            <input type="text" placeholder="Landmark" className="bg-primary-1 focus:border focus:border-tertiary-3 text-secondary-1 p-2 border border-primary-3 text-paragraph4"/>
                            <input type="text" placeholder="Locality" className="bg-primary-1 focus:border focus:border-tertiary-3 text-secondary-1 p-2 border border-primary-3 text-paragraph4"/>
                            <input type="text" placeholder="City" className="bg-primary-1 focus:border focus:border-tertiary-3 text-secondary-1 p-2 border border-primary-3 text-paragraph4"/>
                        </div>
                        <button className="p-10 bg-tertiary-3 w-full text-paragraph3 border border-tertiary-2">Search</button>
                    </div>
                </div>
                <div className="absolute md:translate-x-1/3 xl:translate-x-1/2 z-0">
                    <img className="w-[50rem]" src="/svgs/asset-svg (1).svg" alt="hero-art"/>
                </div>
            </div>
            <div className="h-[110svh] bg-quaternary-5 py-50 flex flex-col text-secondary-1">
                <div className="gap-10 px-30 flex flex-col flex-grow h-[100%] justify-center">
                        <div className="text-heading3">Cheap. Comfortable. Maybe even <span
                            className="text-tertiary-3">extravagant?</span></div>
                        <div className="text-paragraph1">Explore a multitude of properties and rooms at your leisure
                        </div>
                </div>
                <div className="flex flex-grow h-[100%] overflow-clip">
                    <motion.div className="flex" ref={ref} style={{x: xTranslation}}>
                        {[...images, ...images].map((image, index) => (
                            <ImageCard image={image} key={index}/>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="min-h-svh relative from-quaternary-5 to-quaternary-4 bg-gradient-to-b text-secondary-1">
                <div className="flex flex-col flex-grow justify-center items-end  px-30 py-50 gap-10">
                    <div className="text-heading3">No more running laps, just <span
                        className="text-tertiary-3">4 steps</span></div>
                    <div className="text-paragraph1">Follow 4 steps to complete the process, fast and simple</div>
                </div>
                <div className="flex w-full items-center px-30 md:px-40 lg:px-50 xl:px-60 gap-20">
                    <div className="flex flex-col flex-grow justify-center items-start gap-50">
                        <div>
                            <img className="w-[25rem]" src="/svgs/asset-svg (5).svg" alt="svg-1"/>
                            <div className="text-paragraph2 gap-10 flex items-center justify-center">
                                <span><PiNumberCircleOne/></span>
                                <span>Search</span>
                            </div>
                        </div>
                        <div>
                            <img className="w-[25rem]" src="/svgs/asset-svg (4).svg" alt="svg-2"/>
                            <div className="text-paragraph2 gap-10 flex items-center justify-center">
                                <span><PiNumberCircleTwo/></span>
                                <span>Compare</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-grow justify-center items-end gap-50">
                        <div>
                            <img className="w-[25rem]" src="/svgs/asset-svg (3).svg" alt="svg-3"/>
                            <div className="text-paragraph2 gap-10 flex items-center justify-center">
                                <span><PiNumberCircleThree/></span>
                                <span>Check Out</span>
                            </div>
                        </div>
                        <div>
                            <img className="w-[25rem]" src="/svgs/asset-svg (2).svg" alt="svg-4"/>
                            <div className="text-paragraph2 gap-10 flex items-center justify-center">
                                <span><PiNumberCircleFour/></span>
                                <span>Move In</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute hidden md:flex w-full h-full justify-center inset-0 top-[47%] z-20">
                    <img className="w-[50rem]" src="/svgs/asset-svg (7).svg" alt="phone-svg"/>
                </div>
            </div>
            <div className="min-h-svh relative text-secondary-1 z-40">
                <div className="flex flex-grow pt-130 pb-30 justify-center items-end">
                    <div className="text-tertiary-4 font-semibold text-heading3">Check out rooms near you!</div>
                </div>
                <div className="flex gap-130 min-w-full justify-center">
                    {productImages.map((product, index) => (
                        <ProductCard title={product.title} description={product.description} image={product.image} key={index}/>
                    ))}
                </div>
                <div className="absolute inset-0 -z-10 top-[40%] h-[20rem] bg-tertiary-4 w-full"></div>
            </div>
            <div className="py-100 px-50 gap-50 flex flex-col items-center">
                <div className="text-tertiary-3 font-semibold text-heading3">And more across hundreds of cities!</div>
                <div className="flex flex-wrap justify-center gap-15 px-50 pb-80">
                    {[...cities].map((city, index) => (
                        <CityButton city={city.city} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
const Footer = () => {
    return (
        <div
            className="flex justify-center w-full gap-80 py-50 h-[21.5rem] bg-tertiary-3 text-primary-1 text-paragraph4">
            <div className="gap-10 flex flex-col">
                <div className="p-5 bg-primary-1"><img className="w-[10rem]" src="/svgs/asset-svg (8).svg"
                                                       alt="logo"/></div>
                <div>Twitter</div>
                <div>Facebook</div>
                <div>Instagram</div>
            </div>
            <div className="flex flex-col gap-10">
                <div>Search Listings</div>
                <div>Become a Host</div>
                <div>About Us</div>
                <div>Contact Us</div>
                <div>FAQ</div>
            </div>
            <div className="flex flex-col gap-10">
                <div>Terms of Service</div>
                <div>Privacy Policy</div>
                <div>Cancellation Policy</div>
                <div>Cookie Policy</div>
                <div>Customer Support</div>
            </div>
            <div className="flex flex-col items-end gap-20">
                <div className="font-semibold">Subscribe for Exclusive Deals and Updates</div>
                <input type="text" className="w-full p-10 text-secondary-1 border border-quaternary-4 text-end" placeholder="Email"/>
                <button className="p-10 drop-shadow-2xl bg-primary-1 text-tertiary-3 w-fit">Subscribe</button>
            </div>
        </div>
    );
};

export default Footer;
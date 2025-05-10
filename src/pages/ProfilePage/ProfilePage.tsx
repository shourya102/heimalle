import {IoIosCopy, IoMdCloudUpload, IoMdTrash} from "react-icons/io";
import React, {useState} from "react";
import ProfilePersonalInformation from "../../components/ProfilePersonalInformation/ProfilePersonalInformation.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import {AnimatePresence, motion} from "framer-motion";
import {useDeleteProfilePictureMutation, useUpdateProfilePictureMutation} from "../../services/authService.ts";
import HostingDashboard from "../../components/HostingDashboard/HostingDashboard.tsx";

const ProfilePage = () => {
    const [currentlySelected, setCurrentlySelected] = useState<React.ReactNode>("User");
    const {userInfo} = useSelector((state: RootState) => state.auth);
    const [mouseOnProfilePicture, setMouseOnProfilePicture] = useState<boolean>(false);
    const [updateProfilePicture] = useUpdateProfilePictureMutation();
    const [deleteProfilePicture] = useDeleteProfilePictureMutation();

    interface Menu {
        key: number,
        name: string,
        displayComponent?: React.ReactNode,
    }

    const menuList: Menu[] = [
        {
            key: 0,
            name: "User",
            displayComponent: <ProfilePersonalInformation/>
        },
        {
            key: 1,
            name: "Account Settings",
        },
        {
            key: 2,
            name: "Hosting Dashboard",
            displayComponent: <HostingDashboard/>
        },
        {
            key: 3,
            name: "Booking History",
        },
        {
            key: 4,
            name: "Saved Properties",
        },
        {
            key: 5,
            name: "Reviews",
        },
        {
            key: 6,
            name: "Logout",
        },];

    const handleUpdatePicture = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = (e.currentTarget as HTMLInputElement).files;
        if (file) {
            try {
                const payload = await updateProfilePicture(file[0]).unwrap();
                console.log('fulfilled', payload);
                window.location.reload();
            } catch (error) {
                console.log('rejected', error);
            }
        }
    }

    const handleDeletePicture = async () => {
        try {
            const payload = await deleteProfilePicture({}).unwrap();
            console.log('fulfilled', payload);
            window.location.reload();
        } catch (error) {
            console.log('rejected', error);
        }
    }

    const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCurrentlySelected(e.currentTarget.name);
    }

    return (
        <div className="flex md:px-50 md:py-20">
            <div className="bg-tertiary-3 sticky hidden md:flex  flex-col px-10 py-20 gap-30">
                <div className="flex gap-20 p-20 items-center justify-center border-b border-quaternary-5">
                    <div onMouseOver={() => setMouseOnProfilePicture(true)}
                         onMouseLeave={() => setMouseOnProfilePicture(false)}
                         className="relative overflow-clip h-[120px] w-[120px] rounded-full">
                        <div
                            className="bg-secondary-1 text-quaternary-3 uppercase text-heading1 w-full h-full flex justify-center items-center">
                            {userInfo && (userInfo.pic ?
                                <img className="object-cover h-full w-full" src={userInfo.pic}
                                     alt={userInfo.pic}/> : userInfo.displayName[0])}
                        </div>
                        <AnimatePresence>
                            {mouseOnProfilePicture && <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                className="absolute flex flex-col justify-center items-center text-tertiary-3 inset-0 bg-white bg-opacity-20">
                                <button id="imageDelete" onClick={handleDeletePicture}
                                        className="p-10 transition-colors duration-300 hover:text-tertiary-2 border-b border-tertiary-3">
                                    <IoMdTrash size={36}/></button>
                                <label htmlFor="imageUpload" id="imageUploadLabel"
                                       className="p-10 transition-colors duration-300 cursor-pointer hover:text-tertiary-2 "><IoMdCloudUpload
                                    size={36}/></label>
                            </motion.div>}
                        </AnimatePresence>
                        <input type="file" accept="image/*" id="imageUpload" name="imageUpload"
                               onChange={handleUpdatePicture} className="hidden"
                               alt="imageUpload"/>
                    </div>
                    <div className="flex flex-col gap-10 text-heading5 text-primary-1">
                        <div className="font-semibold">
                            {userInfo && userInfo.displayName}
                        </div>
                        <div className="flex gap-10 items-center text-tertiary-5">
                            <span>@{userInfo?.username}</span>
                            <button onClick={() => navigator.clipboard.writeText(userInfo ? userInfo.username : "")}
                                    className="hover:text-tertiary-4"><IoIosCopy/></button>
                        </div>
                        <div>
                            Joined 2025
                        </div>
                    </div>
                </div>
                <div className="gap-20 flex flex-col text-paragraph2 text-nowrap">
                    {menuList.map((item, index) => (
                        <button onClick={handleMenuClick} key={index} name={item.name}
                                className={`${item.name === currentlySelected ? 'bg-primary-1 text-tertiary-3' : 'text-primary-1 hover:text-tertiary-5'} transition-colors duration-300 px-50 text-start`}>
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
            {menuList.filter((item) => item.name === currentlySelected)[0].displayComponent}
        </div>
    );
};

export default ProfilePage;
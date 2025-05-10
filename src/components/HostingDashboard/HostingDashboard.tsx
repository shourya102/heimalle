import {IoIosAdd, IoIosClose, IoMdAdd, IoMdMap} from "react-icons/io";
import "./HostingDashboard.css";
import image from "/images/default-image (7).jpg"
import Tag from "../Tag/Tag.tsx";
import {useState} from "react";
import Form from "../Form/Form.tsx";
import FormSection from "../FormSection/FormSection.tsx";
import FormSubsection from "../FormSubsection/FormSubsection.tsx";
import Input from "../Input/Input.tsx";
import RadioButton from "../RadioButton/RadioButton.tsx";
import TagInput from "../TagInput/TagInput.tsx";
import TextArea from "../TextArea/TextArea.tsx";
import Button from "../Button/Button.tsx";
import TickToggle from "../TickToggle/TickToggle.tsx";
import MultiImageUpload from "../MultiImageUpload/MultiImageUpload.tsx";

const HostingDashboard = () => {
    interface Room {
        roomNumber: number;
    }

    interface Floor {
        rooms: Room[];
        floorNumber: number;
    }

    const [showCreateListings, setShowCreateListings] = useState<boolean>(false);
    const [tags, setTags] = useState<string[]>([]);
    const [files, setFiles] = useState<File[]>([]);
    const [floors, setFloors] = useState<Floor[]>([]);
    const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
    const [selectedFloor, setSelectedFloor] = useState<Floor | null>(null);

    const handleCreateListings = () => {
        setShowCreateListings(!showCreateListings);
    }

    const handleAddRoom = () => {
        setSelectedFloor(prevState => {
            if (prevState) {
                const newRoom = { roomNumber: prevState.rooms.length + 1 };
                return { ...prevState, rooms: [...prevState.rooms, newRoom] };
            }
            return prevState;
        });
        setSelectedRoom(selectedFloor ? selectedFloor.rooms[selectedFloor.rooms.length - 1] : null);
    }

    const handleAddFloor = () => {
        setFloors([...floors, {floorNumber: floors.length + 1, rooms: []}]);
        setSelectedFloor(floors[floors.length - 1]);
    }

    return (
        <>
            {!showCreateListings && <div className="px-50 py-20 flex flex-col gap-20 w-full">
                <div className="flex justify-between items-center">
                    <h1 className="text-heading4 font-semibold text-secondary-1">Your Listings</h1>
                    <button onClick={handleCreateListings}
                            className="p-10 rounded-2xl flex items-center justify-center gap-5 hover:bg-quaternary-5 transition-colors duration-300 border border-dashed border-secondary-1 text-secondary-1 text-heading5">
                        <span><IoIosAdd size={32}/></span>
                        <span>Create New Listing</span>
                    </button>
                </div>
                <div className="grid grid-cols-1 gap-20">
                    <div className="gap-30">
                        <img src={image} className="w-full h-[114px] object-cover" alt="cover"/>
                        <div className="p-20 flex flex-col gap-10 bg-tertiary-3">
                            <div className="grid grid-cols-2 gap-10">
                                <div className="grid grid-cols-1 gap-5">
                                    <div className="flex gap-5">
                                        <Tag>Rent varies</Tag>
                                        <Tag>Posh neighbourhood</Tag>
                                    </div>
                                    <div>
                                        <h1 className="text-heading5 font-semibold text-primary-1">Anant Guesthouse, in
                                            posh area</h1>
                                        <h2 className="text-paragraph4 text-tertiary-5">in Naya Bazar, Sri Raam Colony,
                                            South Delhi, Delhi</h2>
                                    </div>
                                    <div className="text-paragraph4 text-secondary-1">
                                        <span className="bg-tertiary-5 p-5">From <span
                                            className="text-tertiary-3 font-semibold">₹5000</span> to <span
                                            className="text-tertiary-3 font-semibold">₹13000</span></span>
                                    </div>
                                </div>
                                <div className="py-10 flex flex-col items-end">
                                    <div
                                        className="flex gap-5 items-center float-right text-primary-1 text-paragraph4 font-semibold">
                                        <span className="text-paragraph3 text-tertiary-5">24</span> Vacant Rooms
                                    </div>
                                    <div
                                        className="flex gap-5 items-center float-right text-primary-1 text-paragraph4 font-semibold">
                                        <span className="text-paragraph3 text-tertiary-5">5</span> Tenants
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end gap-10">
                                <button
                                    className="px-10 py-5 bg-primary-1 transition-colors duration-300 hover:bg-quaternary-5 text-secondary-1 text-paragraph4">Edit
                                </button>
                                <button
                                    className="px-10 py-5 bg-secondary-1 transition-colors duration-300 hover:bg-secondary-2 text-primary-1 text-paragraph4">Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            {showCreateListings &&
                <Form>
                    <div className="flex justify-between items-center">
                        <h1 className="text-heading4 font-semibold text-secondary-1">New Listing</h1>
                        <button onClick={handleCreateListings}
                                className="p-10 rounded-2xl flex items-center justify-center gap-5 hover:text-secondary-2 transition-colors duration-300 text-secondary-1 text-heading5">
                            <span><IoIosClose size={32}/></span>
                        </button>
                    </div>
                    <FormSection title="General Information">
                        <FormSubsection title="Title">
                            <Input/>
                        </FormSubsection>
                        <FormSubsection title="Type">
                            <RadioButton value={"For Rent"} choices={["For Rent", "For Lease", "Shared Housing"]}/>
                        </FormSubsection>
                        <FormSubsection title="Availablity Status">
                            <RadioButton value={"Available Now"} choices={["Available Now", "Not Available"]}/>
                        </FormSubsection>
                        <FormSubsection title="Target Tenants">
                            <RadioButton value={"Families"} choices={["Families", "Students", "Professionals", "Unrestricted"]}/>
                        </FormSubsection>
                        <FormSubsection title="Pet Policy">
                            <RadioButton value={"Not Allowed"} choices={["Pets Allowed", "Not Allowed", "Restrictions Apply"]}/>
                        </FormSubsection>
                        <FormSubsection title="Smoking Policy">
                        <RadioButton value={"Not Allowed"} choices={["Smoking Allowed", "Not Allowed"]}/>
                        </FormSubsection>
                        <FormSubsection title="Tags">
                            <TagInput tags={tags} setTags={setTags} placeholder="Enter a tag"/>
                        </FormSubsection>
                        <FormSubsection title="Additional Notes">
                            <TextArea/>
                        </FormSubsection>
                    </FormSection>
                    <FormSection title="Building Information">
                        <FormSubsection title="Building Name">
                            <Input/>
                        </FormSubsection>
                        <FormSubsection title="Building Type">
                            <RadioButton value={"Apartment"} choices={["Apartment", "House", "Villa", "Commercial Space"]}/>
                        </FormSubsection>
                        <FormSubsection title="Address 1">
                            <Input name="addressLine1" placeholder="e.g., 123 Main Street"/>
                        </FormSubsection>
                        <FormSubsection title="Address 2">
                            <Input name="addressLine2" placeholder="e.g., 123 Main Street"/>
                        </FormSubsection>
                        <FormSubsection title="Landmark">
                            <Input name="landmark" placeholder="e.g., 123 Main Street"/>
                        </FormSubsection>
                        <div className="grid grid-cols-2 gap-10">
                            <FormSubsection title="City">
                                <Input name="addressLine2" placeholder="e.g., 123 Main Street"/>
                            </FormSubsection>
                            <FormSubsection title="State">
                                <Input name="addressLine2" placeholder="e.g., 123 Main Street"/>
                            </FormSubsection>
                        </div>
                        <FormSubsection title="Pincode">
                            <Input name="addressLine2" placeholder="e.g., 123 Main Street"/>
                        </FormSubsection>
                        <FormSubsection title="Country">
                            <Input name="addressLine2" placeholder="e.g., 123 Main Street"/>
                        </FormSubsection>
                        <FormSubsection title="Location">
                            <Input name="addressLine2" placeholder="e.g., 123 Main Street"/>
                            <Button onClick={() => {}}>Map <IoMdMap/></Button>
                        </FormSubsection>
                        <FormSubsection title="Year Built">
                            <Input name="addressLine2" placeholder="e.g., 123 Main Street"/>
                        </FormSubsection>
                        <FormSubsection title="Amenities">
                            <div className="grid grid-cols-2 w-full border border-quaternary-2 divide-x divide-quaternary-2">
                                <div className="grid grid-cols-1 gap-10">
                                    <TickToggle enabled={true}>Wi-fi</TickToggle>
                                    <TickToggle enabled={true}>Parking</TickToggle>
                                    <TickToggle enabled={true}>Pool</TickToggle>
                                </div>
                                <div className="grid grid-cols-1 gap-10">
                                    <TickToggle enabled={true}>Elevator</TickToggle>
                                    <TickToggle enabled={true}>Gym</TickToggle>
                                    <TickToggle enabled={true}>Lift</TickToggle>
                                </div>
                            </div>
                        </FormSubsection>
                        <FormSubsection title="Images & Videos">
                            <MultiImageUpload value={files} setValue={setFiles}/>
                        </FormSubsection>
                    </FormSection>
                    <FormSection title="Room Details">
                        <div className="bg-quaternary-5 gap-10 flex flex-col">
                            <div>
                                <div className="p-10 gap-10 flex bg-tertiary-3">
                                    {floors.map((floor, index) => (
                                        <button onClick={() => setSelectedFloor(floor)} className={`${selectedFloor && selectedFloor.floorNumber === floor.floorNumber ? 'bg-primary-1 text-tertiary-3' : 'text-primary-1'} font-semibold rounded-lg px-10 text-paragraph4`} key={index}>Floor {floor.floorNumber}</button>
                                    ))}
                                    <button onClick={handleAddFloor} className="bg-secondary-1 text-paragraph4 font-semibold items-center flex gap-10 px-10 rounded-lg text-primary-1"><span>New</span><span><IoMdAdd/></span></button>
                                </div>
                                <div className="p-10 gap-10 flex bg-secondary-1">
                                    {selectedFloor?.rooms.map((room, index) => (
                                        <button  onClick={() => setSelectedRoom(room)} className={`${selectedRoom && selectedRoom.roomNumber === room.roomNumber ? 'bg-tertiary-3 text-primary-1' : 'text-primary-1'} font-semibold rounded-lg px-10 text-paragraph4`} key={index}>Room {room.roomNumber}</button>
                                    ))}
                                    <button onClick={handleAddRoom} className="bg-primary-1 text-paragraph4 font-semibold flex items-center gap-10 px-10 rounded-lg text-tertiary-3"><span>New</span><span><IoMdAdd/></span></button>
                                </div>
                            </div>
                        </div>
                    </FormSection>
                </Form>
            }
        </>
    );
};

export default HostingDashboard;
import FormSection from "../FormSection/FormSection.tsx";
import FormSubsection from "../FormSubsection/FormSubsection.tsx";
import Input from "../Input/Input.tsx";
import Button from "../Button/Button.tsx";
import {IoIosPhonePortrait, IoMdAt, IoMdCheckmark} from "react-icons/io";
import PhoneNumberInput from "../PhoneNumberInput/PhoneNumberInput.tsx";
import RadioButton from "../RadioButton/RadioButton.tsx";
import Form from "../Form/Form.tsx";
import TextArea from "../TextArea/TextArea.tsx";
import SocialsInput from "../SocialsInput/SocialsInput.tsx";
import TagInput from "../TagInput/TagInput.tsx";
import React, {useEffect, useState} from "react";
import {Profile, useUpdateUserMutation} from "../../services/authService.ts";
import {CgSpinner} from "react-icons/cg";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";

const ProfilePersonalInformation = () => {
    const {userInfo} = useSelector((state: RootState) => state.auth);
    const [profile, setProfile] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        username: "",
        email: "",
        phoneNo: "",
        displayName: "",
        addressLine1: "",
        addressLine2: "",
        landmark: "",
        city: "",
        state: "",
        pinCode: "",
        country: "",
        aboutMe: "",
        x: "",
        instagram: "",
        faceBook: "",
    });
    const [gender, setGender] = useState<string>("Male");
    const [languages, setLanguages] = useState<string[]>([]);
    const [updateUser] = useUpdateUserMutation();
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: value
        }));
    };

    const handleVerifyEmail = () => {

    }

    const handleVerifyPhoneNumber = () => {

    }

    const handleSubmit = async () => {
        const profileData: Profile = {
            ...profile, gender, languages
        };
        setLoading(true);
        try {
            const payload = await updateUser(profileData).unwrap();
            console.log('fulfilled', payload);
        } catch (error) {
            console.log('rejected', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (userInfo) {
            setProfile({
                firstName: userInfo.firstName || "",
                middleName: userInfo.middleName || "",
                lastName: userInfo.lastName || "",
                username: userInfo.username || "",
                email: userInfo.email || "",
                phoneNo: userInfo.phoneNo || "",
                displayName: userInfo.displayName || "",
                addressLine1: userInfo.addressLine1 || "",
                addressLine2: userInfo.addressLine2 || "",
                landmark: userInfo.landmark || "",
                city: userInfo.city || "",
                state: userInfo.state || "",
                pinCode: userInfo.pinCode || "",
                country: userInfo.country || "",
                aboutMe: userInfo.aboutMe || "",
                x: userInfo.x || "",
                instagram: userInfo.instagram || "",
                faceBook: userInfo.faceBook || "",
            });
            setGender(userInfo.gender || "Male");
            setLanguages(userInfo.languages || []);
        }
    }, [userInfo]);

    return (
        <Form>
            <FormSection title="Personal Information">
                <FormSubsection title="Name">
                    <Input name="firstName" placeholder="e.g., John" value={profile.firstName} onChange={handleChange}/>
                    <Input name="middleName" placeholder="Optional" value={profile.middleName} onChange={handleChange}/>
                    <Input name="lastName" placeholder="e.g., Doe" value={profile.lastName} onChange={handleChange}/>
                </FormSubsection>
                <FormSubsection title="Username">
                    <Input name="username" placeholder="e.g., john_doe123" value={profile.username}
                           onChange={handleChange}/>
                </FormSubsection>
                <FormSubsection title="Email">
                    <Input name="email" placeholder="e.g., john.doe@example.com" value={profile.email}
                           onChange={handleChange}/>
                    <Button onClick={handleVerifyEmail}>Verify <IoMdAt/></Button>
                </FormSubsection>
                <FormSubsection title="Phone Number">
                    <PhoneNumberInput name="phoneNo" placeholder="e.g., 9876543210" value={profile.phoneNo}
                                      onChange={handleChange}/>
                    <Button onClick={handleVerifyPhoneNumber}>Verify <IoIosPhonePortrait/></Button>
                </FormSubsection>
                <FormSubsection title="Display Name">
                    <Input name="displayName" placeholder="e.g., Johnny" value={profile.displayName}
                           onChange={handleChange}/>
                </FormSubsection>
                <FormSubsection title="Gender">
                    <RadioButton choices={['Male', 'Female', 'Prefer not to say']} value={gender}
                                 setValue={setGender}/>
                </FormSubsection>
            </FormSection>
            <FormSection title="Address">
                <FormSubsection title="Address 1">
                    <Input name="addressLine1" placeholder="e.g., 123 Main Street" value={profile.addressLine1}
                           onChange={handleChange}/>
                </FormSubsection>
                <FormSubsection title="Address 2">
                    <Input name="addressLine2" placeholder="e.g., Apt 4B" value={profile.addressLine2}
                           onChange={handleChange}/>
                </FormSubsection>
                <FormSubsection title="Landmark">
                    <Input name="landmark" placeholder="e.g., Near Central Park" value={profile.landmark}
                           onChange={handleChange}/>
                </FormSubsection>
                <div className="grid grid-cols-2 gap-10">
                    <FormSubsection title="City">
                        <Input name="city" placeholder="e.g., New York" value={profile.city} onChange={handleChange}/>
                    </FormSubsection>
                    <FormSubsection title="State">
                        <Input name="state" placeholder="e.g., NY" value={profile.state} onChange={handleChange}/>
                    </FormSubsection>
                </div>
                <FormSubsection title="Pincode">
                    <Input name="pinCode" placeholder="e.g., 10001" value={profile.pinCode} onChange={handleChange}/>
                </FormSubsection>
                <FormSubsection title="Country">
                    <Input name="country" placeholder="e.g., United States" value={profile.country}
                           onChange={handleChange}/>
                </FormSubsection>
            </FormSection>
            <FormSection title="User Details">
                <FormSubsection title="About Me">
                    <TextArea name="aboutMe" placeholder="Tell us a little about yourself..." value={profile.aboutMe}
                              onChange={handleChange}/>
                </FormSubsection>
                <FormSubsection title="Socials">
                    <SocialsInput name="x" type="Twitter" value={profile.x} onChange={handleChange}/>
                    <SocialsInput name="instagram" type="Instagram" value={profile.instagram} onChange={handleChange}/>
                    <SocialsInput name="faceBook" type="Facebook" value={profile.faceBook} onChange={handleChange}/>
                </FormSubsection>
                <FormSubsection title="Languages">
                    <TagInput tags={languages} setTags={setLanguages}/>
                </FormSubsection>
            </FormSection>
            <div className="flex justify-end py-20">
                <Button onClick={handleSubmit}>
                    {loading ? <span className="animate-spin"><CgSpinner size={28}/></span> :
                        <span className="flex gap-10">Update <IoMdCheckmark/></span>}
                </Button>
            </div>
        </Form>
    );
};

export default ProfilePersonalInformation;
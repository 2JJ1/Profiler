import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AddProfile(props){

    var placeholderProfileData = {
        firstName: "john",
        lastName: "doe",
        phoneNumber: "888-888-8888",
        address: "888 S Dermain",
        email: "",
        birthday: "",
    }

    const [isNewProfile, setIsNewProfile] = useState(false)
    const [profileName, setProfileName] = useState()
    const [profileData, setProfileData] = useState(placeholderProfileData)

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setProfileName(urlParams.get('new'))
        setIsNewProfile(true)
    })

    return (
        <div>
            <p>{isNewProfile && "Create new profile for "}{profileName}</p>
            <br/>
            <div>
                <p>First Name</p>
                <input
                value={profileData.firstName} 
                onChange={e => setProfileData({...profileData, firstName: e.target.value})}
                />
            </div>
            <br/>
            <div>
                <p>Last Name</p>
                <input
                value={profileData.lastName} 
                onChange={e => setProfileData({...profileData, lastName: e.target.value})}
                />
            </div>
            <br/>
            <div>
                <p>Phone Number</p>
                <input
                value={profileData.phoneNumber} 
                onChange={e => setProfileData({...profileData, phoneNumber: e.target.value})}
                />
            </div>
            <br/>
            <div>
                <p>Address</p>
                <input
                value={profileData.address} 
                onChange={e => setProfileData({...profileData, address: e.target.value})}
                />
            </div>
            <br/>
            <div>
                <p>Email</p>
                <input
                value={profileData.email} 
                onChange={e => setProfileData({...profileData, email: e.target.value})}
                />
            </div>
            <br/>
            <div>
                <p>Birthday</p>
                <input
                value={profileData.birthday} 
                onChange={e => setProfileData({...profileData, birthday: e.target.value})}
                />
            </div>
            <br/>
            <div>
                <button onClick={SaveData}>Save</button>
                <Link href="/"><button>Cancel</button></Link>
            </div>
        </div>
    )

    function SaveData(){
        console.log(profileData)
    }
}
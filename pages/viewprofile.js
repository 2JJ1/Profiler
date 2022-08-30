import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AddProfile(props){
    const [isNewProfile, setIsNewProfile] = useState(false)
    const [profileName, setProfileName] = useState()

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setProfileName(urlParams.get('new'))
        setIsNewProfile(true)
    })

    function RedirectHome(){
        
    }

    return (
        <div>
            <p>{isNewProfile && "Create new profile for "}{profileName}</p>
            <br/>
            <Link href="/">Cancel</Link>
        </div>
    )
}
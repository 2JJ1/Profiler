import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'

function Profile(props){
	return (
		<div className="button">
			<p>* {props.username}</p>

			<style jsx>{`
				.button{
					border-bottom: 1px solid gray;
					cursor: pointer;
					margin-bottom: 12px;
				}

				.button:last-of-type{
					border: none;
				}
			`}</style>
		</div>
	)
}

export default function Home() {
	const router = useRouter()

	//To be updated by fetching from cache/database
	const [profiles, setProfiles] = useState(["jon", "joe", "jose", "joseph", "jeremy"])
	const [filteredProfiles, setFilteredProfiles] = useState(profiles)
	const [filterName, setFilterName] = useState("")

	function filterNameState(e){
		setFilterName(e.target.value)
		setFilteredProfiles(profiles.filter(profile => profile.includes(e.target.value)))
	}

	function addProfile(e){
		setProfiles([...profiles, filterName])
		router.push(`viewprofile?new=${filterName}`)
	}

	return (
		<div className="container">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div className="filters">
					<div>
						<input type="text" placeholder="Search" onChange={filterNameState}/>
					</div>
					<button className="addProfile" onClick={addProfile}>+</button>
				</div>
				<br/>
				<div>
					<p>Profiles...</p>
					<br/>
					{filteredProfiles.length ? 
						filteredProfiles.map(profile => <Profile username={profile}/>)
						:
						<p>No profiles</p>
					}
				</div>
			</main>

			<style jsx>{`
				.filters{
					display: flex;
					align-items: center;
				}

				.filters .addProfile{
					margin-left: 12px;
				}
			`}</style>
		</div>
	)
}

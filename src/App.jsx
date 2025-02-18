import { useEffect, useState } from "react";
import "./App.css";

export const App = () => {
	const [information, setInformation] = useState("Getting data...");
	const [userinfo, setUserinfo] = useState(null);

	useEffect(() => {
		fetch("https://codeforces.com/api/user.info?handles=urparvezali;turzo06").then(res => res.json()).then(data => setUserinfo(data.result[0])).catch(err => console.log(err));
	}, []);

	return (
		<div>
			{userinfo ? (
				<div>
					<img src={"https://media.licdn.com/dms/image/v2/D5603AQHwv3vQRLSXqw/profile-displayphoto-shrink_400_400/B56ZO5TgJfGcAk-/0/1733980719487?e=1745452800&v=beta&t=9E4Kd2_-dx0ffvsKGP2-gcsQ1IesZbf0Ob9YCIfJvYQ"} alt="Title Photo" width="200" />
					<h2>{userinfo.handle}</h2>
					<p>Name: {userinfo.firstName} {userinfo.lastName}</p>
					<p>Country: {userinfo.country}</p>
					<p>City: {userinfo.city}</p>
					<p>Rank: {userinfo.rank} (Max: {userinfo.maxRank})</p>
					<p>Rating: {userinfo.rating} (Max: {userinfo.maxRating})</p>
					<p>Contribution: {userinfo.contribution}</p>
					<p>Friends: {userinfo.friendOfCount}</p>
					<p>Organization: {userinfo.organization}</p>
				</div>
			) : (
				<p>Loading user info...</p>
			)}
		</div>
	);
};

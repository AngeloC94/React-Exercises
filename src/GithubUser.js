import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function GitHubUser({ username = 'AngeloC94' }) {
	const url = `https://api.github.com/users/${username}`;
	const [ data, setData ] = useState([]);

	const getData = async () => {
		const response = await axios.get(url);
		console.log(response);
		setData(response.data);
	};

	useEffect(
		() => {
			getData();
		},
		[ username ]
	);

	return (
		<div>
			<img src={data.avatar_url} alt="user" className="avatar" />
			<h2>{data.name}</h2>
			<p>{data.html_url}</p>
		</div>
	);
}
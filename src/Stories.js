import React, { useEffect, useState } from 'react';

const Stories = () => {
	const [stories, setStories] = useState([]);

	useEffect(() => {
		fetch('https://news-proxy-server.appspot.com/topstories')
			.then((res) => res.json())
			.then((json) => setStories(json));
	}, []);

	console.log(stories.slice(0, 3));
	return (
		<div className='Stories'>
			<h3>Stories</h3>
			{stories.slice(0, 3).map((story, idx) => {
				const { by, title, url, time } = story;
				return (
					<div key={idx}>
						<a href={url}>{title}</a>
						<div>
							{by} - {new Date(time * 1000).toLocaleString()}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Stories;

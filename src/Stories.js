import React from 'react';
import { useFetch } from './hooks';

const Stories = () => {
	const stories = useFetch('https://news-proxy-server.appspot.com/topstories', []);

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

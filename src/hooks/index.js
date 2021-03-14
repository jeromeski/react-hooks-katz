import { useEffect, useState } from 'react';

export const useFetch = (source, initValue) => {
	const [result, setResult] = useState(initValue);

	useEffect(() => {
		fetch(source)
			.then((res) => res.json())
			.then((json) => setResult(json));
	}, [source]);
	return result;
};

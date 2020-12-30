/** @format */

import React, { useEffect, useRef, useState } from "react";

const Cubes = () => {
	const pathRef = useRef();
	const [offset, setOffset] = useState(null);
	console.log(offset);

	useEffect(() => {
		setOffset(pathRef.current.getTotalLength());
	}, []);

	return (
		<div>
			<svg height={1000} width={1000}>
				<circle
					strokeWidth='3'
					cx='100'
					cy='100'
					r='50'
					stroke='black'
					fill='none'
					ref={pathRef}
				/>
			</svg>
		</div>
	);
};

export default Cubes;

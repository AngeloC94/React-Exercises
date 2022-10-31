import React, { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export default function Counter({initialValue = 0, incrementInterval = 1000, incrementAmount = 1 }) {
	const [count, setCount] = useState(initialValue);

	useEffect(
		() => {
			const timer = setInterval(() => {
				setCount((c) => c + incrementAmount);
			}, incrementInterval);

			return () => {
				clearInterval(timer);
			};
		},
		[count, incrementAmount, incrementInterval]
	);

	return (
		<React.Fragment>
			<CounterDisplay count={count} />
		</React.Fragment>
	);
}

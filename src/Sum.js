import React from 'react'

export function Sum({ numbers=[3, 6, 9] }) {
	const total = numbers.reduce((a, b) => a + b);
	return (
		<div>
			<h1>
				{numbers[0]} + {numbers[1]} + {numbers[2]} = {total}
			</h1>
		</div>
	);
}

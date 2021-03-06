import React from 'react';
import { css } from 'emotion';

const resultCard = css`
	overflow: hidden;
	img {
		height: 250px;
		display: block;
		margin: 0 auto 10px;
		@media (max-width: 768px) {
			img {
				height: 180px;
			}
		}
	}
	h1 {
		margin: 0 auto 10px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		text-align: center;
		font-size: 1em;
		color: #262626;
	}
`;

const ResultCard = props => {
	const {
		result: { _id, _source },
	} = props;
	return (
		<div className={resultCard} key={_id}>
			<img src={_source.image} alt={_source.title} />
			<h1>{_source.title}</h1>
		</div>
	);
};

export default ResultCard;

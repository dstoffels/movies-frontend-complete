const MovieInfo = ({ title, runningTime, genre }) => {
	return (
		<div>
			<h4>{title}</h4>
			<div>
				<span>Running Time</span>
				<span>{runningTime}</span>
			</div>
			<div>
				<span>Genre</span>
				<span>{genre}</span>
			</div>
		</div>
	);
};

export default MovieInfo;
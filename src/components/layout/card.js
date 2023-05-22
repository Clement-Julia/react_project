const Card = ({ id, className, titre, children }) => {
	return (
		<div id={id} className={className}>
			<div className='card-header'>
				<h4>{titre}</h4>
			</div>
			<div className='card-body'>
				<blockquote className='blockquote mb-0'>
					{children}
					{/* <footer className='blockquote-footer'>
						Someone famous in <cite title='Source Title'>Source Title</cite>
					</footer> */}
				</blockquote>
			</div>
		</div>
	)
}

export default Card

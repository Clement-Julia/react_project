const Card = ({ id, className, titre, children }) => {
	return (
		<div id={id} className={className}>
			<div className='card-header header-red d-flex justify-content-center'>
				<h4>{titre}</h4>
			</div>
			<div className='card-body body-grey'>
				<blockquote className='blockquote mb-0'>
					{children}
				</blockquote>
			</div>
		</div>
	)
}

export default Card

const Projet = ({nom, img, lien}) => {
    return ( 
        <div>
            <h2>Je suis le projet :</h2>
            <img src={img} alt={nom} style={{ width: '200px', height: 'auto' }}/>
            <a href={lien}>
                Redirection vers le projet
            </a>
        </div>
    );
}
 
export default Projet;
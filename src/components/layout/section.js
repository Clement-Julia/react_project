const Section = ({className, titre, children}) => {
    return ( 
        <section className={className}>
            <h1>{titre}</h1>
            <div>
                {children}
            </div>
        </section>
    );
}
 
export default Section;
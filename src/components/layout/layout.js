const Layout = ({children}) => {
    return (
        <>
            <header>
                <p>Je suis le header</p>
            </header> 
            <main>
                {children}
            </main>
            <footer>Clément Julia 2023</footer>
        </>
    );
}
 
export default Layout;
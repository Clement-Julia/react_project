const Header = ({logo}) => {
    return (
        <div className="d-flex flex-column align-items-center">
            <img src={logo} style={{ maxWidth: '150px', maxHeight: 'auto' }} />
            <h1 className="txt-font"><span className="text-black">Clément</span> <span className="text-red">Julia</span></h1>
        </div>
    );
}
 
export default Header;
import './Footer.css'

function Footer(){
    const colors = [
        "blue",
        "purple",
        "#1DA1F2",
        "#FF0000",
        "#FFFC00",
        "#0077B5",
      ];
    return(
        <>
        <div className="footer">
            <div className="footer-container">
                <div className="footer-1">
                    <a href="/">Home</a>
                    <a href="/AdoptPet">Find Pet</a>
                    <a href="/Donate">Donate</a>
                    <a href="/Help">Help</a>
                </div>
                <div className="footer-2">
                God has entrusted animals to our care. They have no one else but us. Often, they suffer from illness, cruelty from humans, and even the harshness of nature. Despite these struggles, they remain loyal and faithful. Once they consider you a friend, they will never leave you, even when humans might. Let's be their voice, offer our help, and show them love.
                </div>
                <div className="footer-3">
                    <a href="" style={{color: colors[0]}}><i className="fa-brands fa-facebook"></i></a>
                    <a href="" style={{color: colors[1]}}><i className="fa-brands fa-instagram"></i></a>
                    <a href="" style={{color: colors[2]}}><i className="fa-brands fa-twitter"></i></a>
                    <a href="" style={{color: colors[3]}}><i className="fa-brands fa-youtube"></i></a>
                    <a href="" style={{color: colors[4]}}><i className="fa-brands fa-snapchat"></i></a>
                    <a href="" style={{color: colors[5]}}><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            </div>
        </>
    )
}

export default Footer
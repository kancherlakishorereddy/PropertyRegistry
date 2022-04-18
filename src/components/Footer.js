import { Container } from "react-bootstrap";

function Footer () {
    
    return(
        <>
        <div className="flex-grow-1"/>
        <footer className="mt-aut py-3 bg-dark">
            <Container className="text-center">
                <p className="text-muted my-0"> Developed by <span className="text-primary">Kishorereddy</span></p>
            </Container>
        </footer>
        </>
    )
}

export default Footer;
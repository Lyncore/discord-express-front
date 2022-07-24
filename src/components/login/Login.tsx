import { Component, ReactNode } from "react";
import { Button, Row , Image} from "react-bootstrap";
import logo from '../../resources/dsexpress.png'

export default class Login extends Component{
    render(): ReactNode {
        return(
            <Row>
                <Image src={logo} width="64"/>
                <Button>Авторизоавться через Discord</Button>
            </Row>
        )
    }
}
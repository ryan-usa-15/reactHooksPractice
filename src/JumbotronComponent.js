import React from 'react';
import { ToastHeader, Button} from 'react-bootstrap';


function JumbotronComponent(props) {


    return (

        <div>
            <ToastHeader>
                <h1>Hello, world!</h1>
                <p> This is a .....

                    {props.children}
                    </p>
                <p>
                    <Button variant="primary">
                    Learn more </Button>
                </p>

            </ToastHeader>
        </div>




    );




}


export default JumbotronComponent; 







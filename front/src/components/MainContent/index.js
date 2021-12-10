import { Description } from "components/Description";
import { Form } from "components/Form";

import './styles.css';

export const MainContent = () => {
    return (
        <div className='main-content'>
            <Description />
            <Form />
        </div>
    );
};
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go home</Link> {/*pro interni prolinkovaní*/}
    </div>
);

export default NotFoundPage;
import React from 'react';

function Error404() {
    return (
        <div className="d-flex flex-row gap-3 justify-content-center align-items-center">
            <img src="Frown.svg" height="300" width="300" alt="Kaylee Chan pixel avatar smiling" />
            <h1>Page Not Found</h1>
            <img src="Frown.svg" height="300" width="300" className="h-flip" alt="Kaylee Chan pixel avatar smiling" />
        </div>

    );
}

export default Error404;
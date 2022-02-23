'use strict';
function internalError (error_name, error_message) {
    const error = new Error();
    error.name = error_name;
    error.message = error_message;
    throw error;
}
export default internalError;
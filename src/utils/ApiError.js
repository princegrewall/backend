class ApiError extends Error {
    constructor(
        statuscode,
        message ="somthing went wrong",
        error=[],
        statck=""
    )
    {
        super(message);
        this.statuscode = statuscode;
        this.error = error;
        this.data=null;
        this.success=false;
        this.statck = statck;
    }
}


export {ApiError};
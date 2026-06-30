const errorHandler = (err, req, res, next) => {

    console.log(err.response?.data);

    res.status(err.response?.status || 500).json({

        success: false,

        message: err.response?.data || err.message

    });

};

export default errorHandler;
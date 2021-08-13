const validateResource = (req, res, next) => {
    const { resource_name } = req.body;
    if (!resource_name || !resource_name.trim()) {
        next({
            status: 400,
            message: "The resource name is require"
        })
    } else {
        next();
    }
}

module.exports = {
    validateResource
}
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/esportesbjerg/'
        : '/',
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/styles/_variables.scss";`
            }
        }
    }
};
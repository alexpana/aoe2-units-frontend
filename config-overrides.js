module.exports = function override(config, env) {
    const postcss_rule = {
        test: /\.css$/,
        use: ['postcss-loader']
    };

    config['module']['rules'].push(postcss_rule);

    return config;
};
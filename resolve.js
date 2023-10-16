const { resolve } = require('path');

module.exports = {
    resolve: {
        symlinks  : false,
        extensions: ['.js', '.ts', '.tsx', '.json', '.pcss'],
        alias     : {
            'src'      : resolve(__dirname, '..', 'src'),
            'store'    : resolve(__dirname, '..', 'src', 'store'),
        }
    }
};

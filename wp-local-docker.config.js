/**
 * The project name.
 *
 * @type {string}
 */
exports.name = "WooCommerce Test";

/**
 * The primary hostname or array of hostnames to use in the project.
 * If multiple domains are neeeded, use array of strings where the first
 * domain is considered as primary.
 *
 * @type {string|string[]}
 */
exports.domain = ["woo.test", "subsite.woo.test"];

/**
 * The media proxy URL. If media proxy isn't needed, set it to FALSE.
 *
 * @type {string|boolean}
 */
exports.mediaProxy = false;

/**
 * The PHP version to use for the project. Available options are 7.4, 7.3,
 * 7.2, 7.1, 7.0 and 5.6.
 *
 * @type {string}
 */
exports.php = "7.3";

/**
 * Whether or not to use elasticsearch for the project. If elasticsearch
 * is need set TRUE, otherwise FALSE.
 *
 * @type {boolean}
 */
exports.elasticsearch = true;

/**
 * WordPress configuration.
 *
 * @type {Object}
 */
exports.wordpress = {
    type: "subdirectory",
    title: "WooCommerce",
    username: "admin",
    password: "password",
    email: "admin@example.com",
    https: true,
    purify: true,
};

/**
 * The snapshot id to use for the project. If multiple snaphots are available,
 * use array of strings.
 *
 * @type {string|string[]}
 */
exports.snapshot = "";

/**
 * Where to move the project in WordPress directory tree.
 *
 * @type {string}
 */
exports.mountPoint = "/wp-content/plugins/woocommerce";

/**
 * Optional. The callback function to modify docker-compose.yml file. Set FALSE
 * if it is not needed.
 *
 * @type {function}
 */
exports.dockerCompose = function( baseConfig ) {
    const config = { ...baseConfig };

    // add redis service
    config.services.phpfpm.depends_on.push( 'redis' );
    config.services.redis = {
        image: 'redis:latest',
    };

    return config;
};

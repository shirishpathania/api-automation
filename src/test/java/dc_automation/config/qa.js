function(config) {

    //URL
    config['baseURL'] = 'https://jsonplaceholder.typicode.com';

    config['request_token'] = karate.callSingle('classpath:dc_automation/utils/token/token.feature')

    return config;
}
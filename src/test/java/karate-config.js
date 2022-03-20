function() {

  var env = 'qa';//karate.env;
  var project = 'dc_automation';//karate.project;
  var config = {
  javaLib: {}
  }

  config = karate.callSingle('classpath:dc_automation/config/' + env + '.js', config);

  karate.configure('logPrettyRequest', true);
  karate.configure('logPrettyResponse', true);

  return config;

}
const { ServiceBroker } = require('moleculer');
const MongoDbAdapter = require('moleculer-db-adapter-mongo');
const express = require('express');
const {
  ActivityService,
  OutboxService,
  InboxService,
  FollowService,
  MongoDbCollectionService,
  ActorService,
  ObjectService
} = require('@semapps/activitypub');

const FormService = require('./services/form');
const ApiService = require('./services/api');
const MatchBotService = require('./services/match-bot');
const MailerService = require('./services/mailer');
const ThemeService = require('./services/theme');
const CONFIG = require('./config');

const context = {
  '@vocab': 'https://www.w3.org/ns/activitystreams#',
  pair: 'http://virtual-assembly.org/ontologies/pair#'
};

const broker = new ServiceBroker();

broker.createService(MongoDbCollectionService, {
  adapter: new MongoDbAdapter(CONFIG.MONGODB_URL),
  settings: {
    context
  }
});
broker.createService(ActorService, {
  adapter: new MongoDbAdapter(CONFIG.MONGODB_URL),
  settings: {
    containerUri: CONFIG.HOME_URL + 'users/',
    context
  }
});
broker.createService(ActivityService, {
  adapter: new MongoDbAdapter(CONFIG.MONGODB_URL),
  settings: {
    containerUri: CONFIG.HOME_URL + 'activities/',
    context
  }
});
broker.createService(ObjectService, {
  adapter: new MongoDbAdapter(CONFIG.MONGODB_URL),
  settings: {
    containerUri: CONFIG.HOME_URL + 'objects/',
    context
  }
});
broker.createService(FollowService);
broker.createService(InboxService);
broker.createService(OutboxService);

broker.createService(ThemeService, {
  adapter: new MongoDbAdapter(CONFIG.MONGODB_URL),
  settings: {
    containerUri: CONFIG.HOME_URL + 'themes/',
    themes: [
      'Agriculture & alimentation',
      'Economie locale',
      'Démocratie',
      'Arts & culture',
      'Education',
      'Habitat & oasis',
      'Energie',
      'Transport',
      'Bien-être',
      'Autre'
    ]
  }
});

broker.createService(FormService);
broker.createService(MailerService);
broker.createService(MatchBotService);
const apiService = broker.createService(ApiService);

const app = express();
app.use(apiService.express());
app.use(express.static('public'));

broker.start().then(() => {
  app.listen(process.env.NODE_PORT || 3000, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('Listening on port ' + process.env.NODE_PORT || 3000);
    }
  });
});

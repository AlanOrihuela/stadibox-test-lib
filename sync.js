#! /usr/local/bin/node
const i18n = require('./models/i18n'),
    timezone = require('./models/timezone'),
    user = require('./models/user'),
    store = require('./models/store'),
    session = require('./models/session');

const syncAll = async () => {
    await i18n.sync();
    await timezone.sync();
    await user.sync();
    await session.sync();
    await store.sync();
};

syncAll()
    .then(() => console.log('Synced all tables'))
    .catch(error => console.error(error));

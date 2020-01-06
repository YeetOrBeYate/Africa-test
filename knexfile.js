// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      host:'localhost',
      database: 'africa',
      user: 'africa',
      password: 'africa'
    },
    migrations:{
      directory: "./data/migrations"
    },
    seeds:{
      directory:"./data/seeds"
    }
  }
};

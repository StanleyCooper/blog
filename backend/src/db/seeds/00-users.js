exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          user_username: "ADMIN_TEST",
          user_password: "password",
          user_nickname: "admin",
          user_email: "admin@fake.com",
        }
      ]);
    });
};

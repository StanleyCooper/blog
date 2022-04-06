exports.up = function(knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments("user_id").primary(); // Sets user_id as the primary key
        table.string("user_username");
        table.string("user_password");
        table.string("user_nickname");
        table.string("user_email");
        table.timestamps(true, true); // Adds created_at and updated_at columns
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("users");
  };
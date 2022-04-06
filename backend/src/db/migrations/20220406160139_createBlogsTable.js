
exports.up = function(knex) {
    return knex.schema.createTable("blogs", (table) => {
        table.increments("blog_id").primary(); // Sets 'blog_id' as the primary key
        table.string("blog_title");
        table.string("blog_content");
        table.integer("blog_likes");
        table.integer("user_id").unsigned().notNullable();
        table
          .foreign("user_id")
          .references("user_id")
          .inTable("users")
          .onDelete("cascade");
        table.timestamps(true, true);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("blogs");
  };
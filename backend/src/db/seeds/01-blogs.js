
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('blogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('blogs').insert([
        {
          blog_title: "test blog #1",
          blog_content: "This is the content of my very cool test blog! Isn't this neat? Lorem Ipsum and all that good stuff",
          blog_likes: 5,
          user_id: 1,
        },
        {
          blog_title: "test blog #2",
          blog_content: "This is the content of my very cool test blog #2! Isn't this neat? Lorem Ipsum and all that good stuff",
          blog_likes: 12,
          user_id: 1,
        },
      ]);
    });
};

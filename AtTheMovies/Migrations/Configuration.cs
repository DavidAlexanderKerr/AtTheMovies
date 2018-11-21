namespace AtTheMovies.Migrations
{
    using AtTheMovies.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<AtTheMovies.Models.MovieDB>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(AtTheMovies.Models.MovieDB context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data.
            context.Movies.AddOrUpdate(new Movie
            {
                Title = "Star Wars",
                ReleaseYear=1977,
                Runtime=121
            },
            new Movie
            {
                Title="Inception",
                ReleaseYear=2010,
                Runtime=148
            },
            new Movie
            {
                Title="Toy Story",
                ReleaseYear=1995,
                Runtime=81
            });
        }
    }
}

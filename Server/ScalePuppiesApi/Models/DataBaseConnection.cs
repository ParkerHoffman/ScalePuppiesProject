using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore;


namespace ScalePuppiesApi.Models
{
    public class DataBaseConnection : DbContext
    {
        public DataBaseConnection(DbContextOptions<DataBaseConnection> options) : base(options) { }

        public DbSet<User> User { get; set; }
        public DbSet<Cow> Cow   { get; set; }
        public DbSet<Herd> Herd { get; set; }


    }
}

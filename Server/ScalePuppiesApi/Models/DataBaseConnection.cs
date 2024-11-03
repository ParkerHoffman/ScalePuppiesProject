using Microsoft.EntityFrameworkCore;


namespace ScalePuppiesApi.Models
{
    public class DataBaseConnection : DbContext
    {
        public DataBaseConnection(DbContextOptions<DataBaseConnection> options) : base(options) { }



    }
}

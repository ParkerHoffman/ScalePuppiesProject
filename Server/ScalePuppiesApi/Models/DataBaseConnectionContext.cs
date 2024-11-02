using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;


namespace ScalePuppiesApi.Models
{
    public partial class DataBaseConnectionContext : DbContext
    {
        private readonly IConfiguration _configuration;

        public DataBaseConnectionContext(IConfiguration configuration)
        {
            _configuration = configuration;
                }

        public DataBaseConnectionContext(DbContextOptions<DataBaseConnectionContext> options, IConfiguration configuration) : base(options)
        {
            _configuration = configuration;
        }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
                var connectionString = _configuration.GetConnectionString("DefaultConnection");
            optionsBuilder.UseSqlServer(connectionString);
        }
    }

    }
}

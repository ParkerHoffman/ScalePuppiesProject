using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using ScalePuppiesApi.Models;
using Pomelo.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Server.Kestrel.Https;
using System.Security.Cryptography.X509Certificates;
using MySql.Data.MySqlClient;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<DataBaseConnection>(options => {

    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

    var connString = new MySqlConnectionStringBuilder(connectionString)
    {
        SslCert = "Certificates/DigiCertGlobalRootCA.crt.pem",
        SslMode = MySqlSslMode.Required
    };

    options.UseMySql(connString.ConnectionString, new MySqlServerVersion(new Version(8, 0, 21)));
    });

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

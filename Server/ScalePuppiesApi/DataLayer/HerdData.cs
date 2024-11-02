using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Storage.Json;
using ScalePuppiesApi.Extensions;
using ScalePuppiesApi.Models;
using System.Data;
using System.Runtime.CompilerServices;
using Microsoft.Data.SqlClient;
using Pomelo.EntityFrameworkCore;
using MySqlConnector;
using static System.Net.Mime.MediaTypeNames;

namespace ScalePuppiesApi.DataLayer
{
    public static class HerdData
    {

        public static JsonResult testCol1(this DataBaseConnection context)
        {
            
                DataSet ds = context.DoQuery("Select Name from User where USerID = 2;");

                List<string> nameList = new List<string>();

                Console.BackgroundColor = ConsoleColor.Magenta;
                foreach (DataTable table in ds.Tables)
                {
                    foreach (DataRow row in table.Rows)
                    {

                        Console.WriteLine("Hitting for");
                        if (row.Table.Columns.Contains("Name"))
                        {
                            nameList.Add(row["Name"].ToString());
                        }
                    }
                }

                string[] nameArray = nameList.ToArray();

                
            
            Console.WriteLine("Yes");

            context.DoQuery("Insert into User (Name, Password) Values (@a, @b);", new MySqlParameter("@a", "NateTesting"), new MySqlParameter("@b", "This does"));


            return new JsonResult(nameArray);
        }

        public static JsonResult CreateFarm()
        {
            return new JsonResult("");
        }
    }
}

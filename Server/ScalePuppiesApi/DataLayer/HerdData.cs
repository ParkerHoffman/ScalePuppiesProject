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

        public static JsonResult loginValidation(this DataBaseConnection context, string FarmUser, string user, string pass )
        {
            DataSet ds = context.DoQuery(@"
Select  UserID from user u
left join farm f on f.FarmId = u.FarmID
where u.Name = @user and u.Password = @pass and f.UserName = @farm;
", new MySqlParameter("@user", user)
, new MySqlParameter("@pass", pass)
, new MySqlParameter("@farm", FarmUser)
);
            int userID = -1;
            foreach (DataTable table in ds.Tables)
            {
                foreach (DataRow row in table.Rows)
                {

                    if (row.Table.Columns.Contains("Description"))
                    {
                        userID = int.Parse(row["UserID"].ToString());
                    }
                }
            }

            bool valid = userID > 0;

           

            return new JsonResult(new { success=valid, UserID = userID});
        }



        public static JsonResult CreateFarm()
        {
            return new JsonResult("");
        }
    }
}

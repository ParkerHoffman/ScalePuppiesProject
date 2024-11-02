using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Storage.Json;
using ScalePuppiesApi.Extensions;
using ScalePuppiesApi.Models;
using System.Data;
using System.Runtime.CompilerServices;
using Microsoft.Data.SqlClient;

namespace ScalePuppiesApi.DataLayer
{
    public static class HerdData
    {

        public static JsonResult testCol1(this DataBaseConnection context)
        {
            DataSet ds = context.DoQuery("Select Name from User where USerID = 2;");

            List<string> nameList = new List<string>();

            foreach (DataTable table in ds.Tables)
            {
                foreach (DataRow row in table.Rows)
                {
                    if (row.Table.Columns.Contains("Name"))
                    {
                        nameList.Add(row["Name"].ToString());
                    }
                }
            }

            context.DoQuery("Insert into User (Name, Password) Values (@a, @b);", new SqlParameter("@a", "NateTesting"), new SqlParameter("@b", "This does"));

            string[] nameArray = nameList.ToArray();

            return new JsonResult(nameArray);

        }
    }
}

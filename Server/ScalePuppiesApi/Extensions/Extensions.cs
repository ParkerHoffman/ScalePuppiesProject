using System.Data;
using System.Data.Common;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using ScalePuppiesApi.Models;

namespace ScalePuppiesApi.Extensions
{
    public static class Extensions
    {


        public static DataSet doQuery(this DataBaseConnectionContext context, string SQLQuery, params SqlParameter[] paramList)
        {
            DataSet dataSet = new DataSet();

            using (DbCommand command = context.GetDbConnection.CreateCommand()) 
            {
                command.CommandText = SQLQuery;
                command.CommandTimeout = 500;
            }


            return dataSet;
        }







    }
}

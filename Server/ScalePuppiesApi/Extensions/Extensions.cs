using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using ScalePuppiesApi.Models;
using System.Data;
using System.Data.Common;

namespace ScalePuppiesApi.Extensions
{
    public static class Extensions
    {

        public static DataSet DoQuery(this DataBaseConnection context, string query, params SqlParameter[] sqlParameters)
        {
            //Declare the Dataset
            DataSet dataSet = new DataSet();

            //Declare a temporary zone, will be disposed of after we are finished using it
            using (DbCommand command = context.Database.GetDbConnection().CreateCommand())
            {
                //Set the query terms
                command.CommandText = query;
                //Timeout after 500 ms
                command.CommandTimeout = 500;

                //Add all of the provided parameters
                foreach (SqlParameter sqlParameter in sqlParameters)
                {
                    command.Parameters.Add(sqlParameter);
                }

                //Open a connection with the DB
                context.Database.OpenConnection();

                //Run the command with a temporary zone
                using (var datadapter = new SqlDataAdapter(command as SqlCommand))
                {
                    datadapter.Fill(dataSet);
                }

                //Close the command
                context.Database.CloseConnection();
                
            }


            return dataSet;
        }
    }
}

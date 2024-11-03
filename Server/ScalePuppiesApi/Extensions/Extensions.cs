using Microsoft.EntityFrameworkCore;
using MySqlConnector;
using ScalePuppiesApi.Models;
using System.Data;
using System.Data.Common;


namespace ScalePuppiesApi.Extensions
{
    public static class Extensions
    {

        public static DataSet DoQuery(this DataBaseConnection context, string query, params MySqlParameter[] sqlParameters)
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
                foreach (MySqlParameter sqlParameter in sqlParameters)
                {
                    command.Parameters.Add(sqlParameter);
                }

                //Open a connection with the DB
                context.Database.OpenConnection();

                //Run the command with a temporary zone
                using (var datadapter = new MySqlDataAdapter(command as MySqlCommand))
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

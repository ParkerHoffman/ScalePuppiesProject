using Microsoft.EntityFrameworkCore;
using MySqlConnector;
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

using Microsoft.AspNetCore.Mvc;
using MySqlConnector;
using ScalePuppiesApi.Extensions;
using ScalePuppiesApi.Models;
using System.Data;

namespace ScalePuppiesApi.DataLayer
{
    public static class AuthData
    {
        public static JsonResult loginValidation(this DataBaseConnection context, string FarmUser, string user, string pass)
        {
            DataSet ds = context.DoQuery(@"
Select  u.FarmID, u.isOwner, u.isSuperuser from user u
left join farm f on f.FarmId = u.FarmID
where u.Name = @user and u.Password = @pass and f.UserName = @farm;
", new MySqlParameter("@user", user)
, new MySqlParameter("@pass", pass)
, new MySqlParameter("@farm", FarmUser)
);
            int FarmID = -1;
            bool isOwner = false;
            bool isSuperUser = false;
            foreach (DataTable table in ds.Tables)
            {
                foreach (DataRow row in table.Rows)
                {

                    if (row.Table.Columns.Contains("FarmID"))
                    {
                        FarmID = int.Parse(row["FarmID"].ToString());
                    }
                    if (row.Table.Columns.Contains("isOwner"))
                    {
                        isOwner = bool.Parse(row["isOwner"].ToString());
                    }
                    if (row.Table.Columns.Contains("isSuperuser"))
                    {
                        isSuperUser = bool.Parse(row["isSuperuser"].ToString());
                    }

                }
            }

            bool valid = FarmID > 0;



            return new JsonResult(new { success = valid, UserID = FarmID, Owner = isOwner, SuperUser = isSuperUser });
        }
        public static JsonResult CreateFarm(this DataBaseConnection context, string FarmUserName, string FarmName, string UserName, string UserPassword)
        {
            bool valid = false;
            try
            {
                context.DoQuery(@"
insert into farm(Name, Username) values (@fn, @fu);
set @newID = last_insert_id();
insert into user(Name, Password, isSuperuser, isOwner, FarmID) values (@un, @up, 1, 1, @newID);
", new MySqlParameter("@fn", FarmName)
, new MySqlParameter("@fu", FarmUserName)
, new MySqlParameter("@un", UserName)
, new MySqlParameter("@up", UserPassword));
                valid = true;
            }
            catch (Exception e) { Console.WriteLine(e.Message); }

            return new JsonResult(valid);
        }

        public static JsonResult CreateNewUser(this DataBaseConnection context, string UserName, string UserPassword, bool isSuperUser, int FarmID)
        {
            context.DoQuery(@"
insert into user (Name, Password, isSuperuser, isOwner, FarmID) values (@un, @up, @su, false, @f);
", new MySqlParameter("@un", UserName)
, new MySqlParameter("@up", UserPassword)
, new MySqlParameter("@su", isSuperUser)
, new MySqlParameter("@f", FarmID));
            return new JsonResult("");
        }



        public static JsonResult GetUserList(this DataBaseConnection context, int FarmID)
        {
            DataSet ds = context.DoQuery("select UserID, Name, password, isOwner from user where FarmID = @Farm", new MySqlParameter("@Farm", FarmID));

            List<object> users = new List<object>();

            foreach (DataTable table in ds.Tables)
            {
                foreach (DataRow row in table.Rows)
                {

                    int userID = -1;
                    string user = "";
                    string password = "";
                    bool isOwner = false;

                    if (row.Table.Columns.Contains("UserID"))
                    {
                        userID = int.Parse(row["UserID"].ToString());
                    }
                    if (row.Table.Columns.Contains("Name"))
                    {
                        user = row["Name"].ToString();
                    }
                    if (row.Table.Columns.Contains("Password"))
                    {
                        password = row["Password"].ToString();
                    }
                    if (row.Table.Columns.Contains("isOwner"))
                    {
                        isOwner = bool.Parse(row["isOwner"].ToString());
                    }

                    users.Add(new { user = user, password = password, ID = userID, owner = isOwner });

                }

            }
            return new JsonResult(users);

        }

    }



}

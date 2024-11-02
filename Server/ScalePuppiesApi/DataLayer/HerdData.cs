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
        


        public static JsonResult GetHerdList(this DataBaseConnection context, int FarmID)
        {
            
            DataSet ds = context.DoQuery(@"
                Select 
            ", new MySqlParameter("@ID", FarmID));
            
            return new JsonResult(new { success = true });
        }


        public static JsonResult GetIndividualCow(this DataBaseConnection context, int CowID)
        {
            DataSet ds = context.DoQuery(@"
                Select SireID, DameID, DoB, PurchaseDate, BuyingPrice, Breed
                , CurrentWeight, BirthWeight, WeaningWeight, SellingWeight
                , MedicalHistory,geneticMarker, LastBullInteraction, Gestation, PricePerPound, g.Description as 'CowType'
                    From Cow left join Gender_Type g on cow.GenderTypeID = g.GenderTypeID
                    Where CowID = @cowID;"
            , new MySqlParameter("@cowID", CowID));


            int sireID = -1;
            int damID = -1;
            double buyingPrice = -1.0;
            string breed = "";
            double currentWeight = -1.0;
            double birthWeight = -1.0;
            double weanWeight = -1.0;
            double sellWeight = -1.0;
            string medHistory = "";
            string genMarker = "";
            string CowType = "";
            int gestPeriod = -1;
            double pricePerPound = -1.0;
            DateOnly birthDate = new DateOnly();
            DateOnly purchaseDate = new DateOnly();
            DateOnly lastBullInter = new DateOnly();

            

            foreach (DataTable table in ds.Tables)
            {
                foreach (DataRow row in table.Rows)
                {

                    if (row.Table.Columns.Contains("SireID"))
                    {
                        sireID = int.Parse(row["SireID"].ToString());
                    }
                    if (row.Table.Columns.Contains("DameID"))
                    {
                        damID = int.Parse(row["DameID"].ToString());
                    }
                    if (row.Table.Columns.Contains("BuyingPrice"))
                    {
                        buyingPrice = double.Parse(row["BuyingPrice"].ToString());
                    }
                    if (row.Table.Columns.Contains("Breed"))
                    {
                        breed = row["Breed"].ToString();
                    }
                    if (row.Table.Columns.Contains("CurrentWeight"))
                    {
                        currentWeight = double.Parse(row["CurrentWeight"].ToString());
                    }
                    if (row.Table.Columns.Contains("BirthWeight"))
                    {
                        birthWeight = double.Parse(row["BirthWeight"].ToString());
                    }
                    if (row.Table.Columns.Contains("WeaningWeight"))
                    {
                        weanWeight = double.Parse(row["WeaningWeight"].ToString());
                    }
                    if (row.Table.Columns.Contains("SellingWeight"))
                    {
                        sellWeight = double.Parse(row["SellingWeight"].ToString());
                    }
                    if (row.Table.Columns.Contains("MedicalHistory"))
                    {
                        medHistory = row["MedicalHistory"].ToString();
                    }
                    if (row.Table.Columns.Contains("geneticMarker"))
                    {

                        genMarker = row["geneticMarker"].ToString();
                    }
                    if (row.Table.Columns.Contains("Gestation"))
                    {
                        gestPeriod = int.Parse(row["Gestation"].ToString());
                    }
                    if (row.Table.Columns.Contains("PricePerPound"))
                    {
                        pricePerPound = double.Parse(row["PricePerPound"].ToString());
                    }
                    if (row.Table.Columns.Contains("CowType"))
                    {
                        CowType = row["CowType"].ToString();
                    }
                    if (row.Table.Columns.Contains("DoB"))
                    {
                        birthDate = DateOnly.Parse(row["DoB"].ToString());
                    }
                    if (row.Table.Columns.Contains("PurchaseDate"))
                    {
                        purchaseDate = DateOnly.Parse(row["PurchaseDate"].ToString());
                    }
                    if (row.Table.Columns.Contains("LastBullInteraction"))
                    {
                        lastBullInter = DateOnly.Parse(row["LastBullInteraction"].ToString());
                    }
                }
            }

            // Uses subracts currentDate from birthDate for age; if birthDate hasn't occured this year, decrement to compensate
            DateOnly currentDate = DateOnly.FromDateTime(DateTime.Now);
            int age = currentDate.Year - birthDate.Year;
            if (currentDate.DayOfYear < birthDate.DayOfYear) { age--; }

            return new JsonResult(new { sucess = true, cowAge = age, LastBullInteraction = lastBullInter, PurchaseDate = purchaseDate, BirthDate = birthDate, CowType = CowType, PricePerPound = pricePerPound, GestationPeriod = gestPeriod , GeneticMarker = genMarker,  MedicalHistory = medHistory, SellingWeight = sellWeight, WeaningWeight = weanWeight, BirthWeight = birthWeight, CurrentWeight = currentWeight, Breed = breed, BuyingPrice = buyingPrice, DameID = damID, SireID = sireID });


        }
    }
}
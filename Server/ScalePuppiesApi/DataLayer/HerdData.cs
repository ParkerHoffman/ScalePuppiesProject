using Microsoft.AspNetCore.Mvc;
using MySqlConnector;
using ScalePuppiesApi.Extensions;
using ScalePuppiesApi.Models;
using System.Data;

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



        public static object GetHerdList(this DataBaseConnection context, int FarmID)
        {

            DataSet ds = context.DoQuery(@"
                select herd.*, f.Name
                from herd left join farm f on herd.FarmID = f.FarmID
                where herd.FarmID = @ID;
            ", new MySqlParameter("@ID", FarmID));

            string farmName = "";

            DataTable herdInfo = ds.Tables[0];
            List<object> herdList = new List<object>();
            foreach (DataRow row in herdInfo.Rows)
            {
                if (row.Table.Columns.Contains("HerdID"))
                {
                    herdList.Add(context.GetIndividualHerd(int.Parse(row["HerdID"].ToString())));
                }
                if (row.Table.Columns.Contains("Name"))
                {
                    farmName = row["Name"].ToString();
                }
            }

            return new JsonResult(new { success = true });
        }

        public static object GetIndividualHerd(this DataBaseConnection context, int HerdID)
        {
            DataSet ds = context.DoQuery(@"
                select herd.*, t.Description
                from herd left join herd_type t on herd.HerdTypeID = t.HerdTypeID
                where HerdID = @ID;

                select h.CowID
                from herd 
                left join history h on herd.HerdID = h.HerdID
                where herd.HerdID = @ID and (h.EndDate is null or h.EndDate < curdate());
            ", new MySqlParameter("@ID", HerdID));

            DataTable herdInfo = ds.Tables[0];
            DataTable cowInfo = ds.Tables[1];

            int herdID = 0;
            string loc = "";
            string com = "";
            string herdType = "";

            foreach (DataRow row in herdInfo.Rows)
            {
                if (row.Table.Columns.Contains("HerdID"))
                {
                    herdID = int.Parse(row["HerdID"].ToString());
                }
                if (row.Table.Columns.Contains("Location"))
                {
                    loc = row["Location"].ToString();
                }
                if (row.Table.Columns.Contains("Comment"))
                {
                    com = row["Comment"].ToString();
                }
                if (row.Table.Columns.Contains("Description"))
                {
                    herdType = row["Description"].ToString();
                }
            }


            List<object> cowList = new List<object>();
            foreach (DataRow row in cowInfo.Rows)
            {
                if (row.Table.Columns.Contains("CowID"))
                {
                    cowList.Add(context.GetIndividualCow(int.Parse(row["CowID"].ToString())));
                }
            }

            return new { success = true, HerdID = herdID, Location = loc, Comment = com, HerdType = herdType, CowInfo = cowInfo, };
        }

        public static int CreateNewCow(this DataBaseConnection context, int herdID, Cow moo)
        {
            int returner = 0;

            DataSet ds = context.DoQuery(@"
insert into cow(SireId, DameID, BuyingPrice, Breed, CurrentWeight, BirthWeight, WeaningWeight, SellingWeight, MedicalHistory, GeneticMarker, GenderTypeID, Gestation, PricePerPound, CowTag, DoB, PurchaseDate, LastBullInteraction)
values (@sire, @dame, @age, @b$, @breed, @curWeight, @birWeight, @weaWeight, @selWeight, @medHis, @genMark, @cowType, @gesTime, @$perLb, @cowTag, @bDate, @pDate, @bulInter);
set @newID = last_insert_id();
select @newID as 'CowID';
", new MySqlParameter("@sire", moo.SireID)
, new MySqlParameter("@dame", moo.DameID)
, new MySqlParameter("@age", moo.age)
, new MySqlParameter("@b$", moo.buyingPrice)
, new MySqlParameter("@breed", moo.breed)
, new MySqlParameter("@curWeight", moo.currentWeight)
, new MySqlParameter("@birWeight", moo.birthWeight)
, new MySqlParameter("@weaWeight", moo.weanWeight)
, new MySqlParameter("@selWeight", moo.sellWeight)
, new MySqlParameter("@medHis", moo.medHistory)
, new MySqlParameter("@genMark", moo.genMarker)
, new MySqlParameter("@cowType", moo.CowType)
, new MySqlParameter("@gesTime", moo.gestPeriod)
, new MySqlParameter("@$perLb", moo.pricePerPound)
, new MySqlParameter("@cowTag", moo.cowTag)
, new MySqlParameter("@bDate", moo.birthDate)
, new MySqlParameter("@pDate", moo.purchaseDate)
, new MySqlParameter("@bulInter", moo.lastBullInter));

            foreach (DataTable table in ds.Tables)
            {
                foreach (DataRow row in table.Rows)
                {
                    if (row.Table.Rows.Contains("CowID"))
                    {
                        returner = int.Parse(row["CowID"].ToString());
                    }
                }
            }

            return returner;
        }

        public static JsonResult CreateCowForHerd(this DataBaseConnection context, int herdID, Cow moo)
        {
            try
            {
                int cowID = context.CreateNewCow(herdID, moo);
                DateOnly today = DateOnly.FromDateTime(DateTime.Now);

                DataSet ds = context.DoQuery(@"
insert into history(StartDate, HerdID, CowID) values (@curDate, @hID, @cID);
", new MySqlParameter("@curDate", today)
    , new MySqlParameter("@hID", herdID)
    , new MySqlParameter("@cID", cowID));
                return new JsonResult(true);
            }
            catch (Exception ex)
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine(ex.Message);
                Console.ForegroundColor = ConsoleColor.White;
                return new JsonResult(false);
            }
        }

        public static object GetIndividualCow(this DataBaseConnection context, int CowID)
        {
            DataSet ds = context.DoQuery(@"
                Select SireID, DameID, DoB, PurchaseDate, BuyingPrice, Breed
                , CurrentWeight, BirthWeight, WeaningWeight, SellingWeight
                , MedicalHistory,geneticMarker, LastBullInteraction, Gestation, PricePerPound, CowTag, g.Description as 'CowType'
                    From Cow left join Gender_Type g on cow.GenderTypeID = g.GenderTypeID
                    Where CowID = @cowID;"
            , new MySqlParameter("@cowID", CowID));


            int? sireID = -1;
            int? damID = -1;
            int? age = -1;
            double? buyingPrice = -1.0;
            string? breed = "";
            double? currentWeight = -1.0;
            double? birthWeight = -1.0;
            double? weanWeight = -1.0;
            double? sellWeight = -1.0;
            string? medHistory = "";
            string? genMarker = "";
            string CowType = "";
            int? gestPeriod = -1;
            double? pricePerPound = -1.0;
            string? cowTag = "";
            DateOnly? birthDate = new DateOnly();
            DateOnly? purchaseDate = new DateOnly();
            DateOnly? lastBullInter = new DateOnly();



            foreach (DataTable table in ds.Tables)
            {
                foreach (DataRow row in table.Rows)
                {
                    if (row.Table.Columns.Contains("SireID"))
                    {
                        int.TryParse(row["SireID"].ToString(), out int tempSireID);
                        sireID = tempSireID;
                    }
                    if (row.Table.Columns.Contains("DameID"))
                    {
                        int.TryParse(row["DameID"].ToString(), out int tempDamID);
                        damID = tempDamID;
                    }
                    if (row.Table.Columns.Contains("BuyingPrice"))
                    {
                        double.TryParse(row["BuyingPrice"].ToString(), out double tempBuyingPrice);
                        buyingPrice = tempBuyingPrice;
                    }
                    if (row.Table.Columns.Contains("Breed"))
                    {
                        breed = row["Breed"].ToString();
                    }
                    if (row.Table.Columns.Contains("CurrentWeight"))
                    {
                        double.TryParse(row["CurrentWeight"].ToString(), out double tempCurrentWeight);
                        currentWeight = tempCurrentWeight;
                    }
                    if (row.Table.Columns.Contains("BirthWeight"))
                    {
                        double.TryParse(row["BirthWeight"].ToString(), out double tempBirthWeight);
                        birthWeight = tempBirthWeight;
                    }
                    if (row.Table.Columns.Contains("WeaningWeight"))
                    {
                        double.TryParse(row["WeaningWeight"].ToString(), out double tempWeanWeight);
                        weanWeight = tempWeanWeight;
                    }
                    if (row.Table.Columns.Contains("SellingWeight"))
                    {
                        double.TryParse(row["SellingWeight"].ToString(), out double tempSellWeight);
                        sellWeight = tempSellWeight;
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
                        int.TryParse(row["Gestation"].ToString(), out int tempGestPeriod);
                        gestPeriod = tempGestPeriod;
                    }
                    if (row.Table.Columns.Contains("PricePerPound"))
                    {
                        double.TryParse(row["PricePerPound"].ToString(), out double tempPricePerPound);
                        pricePerPound = tempPricePerPound;
                    }
                    if (row.Table.Columns.Contains("CowType"))
                    {
                        CowType = row["CowType"].ToString();
                    }
                    if (row.Table.Columns.Contains("DoB"))
                    {
                        DateOnly.TryParse(row["DoB"].ToString(), out DateOnly tempBirthDate);
                        birthDate = tempBirthDate;
                    }
                    if (row.Table.Columns.Contains("PurchaseDate"))
                    {
                        DateOnly.TryParse(row["PurchaseDate"].ToString(), out DateOnly tempPurchaseDate);
                        purchaseDate = tempPurchaseDate;
                    }
                    if (row.Table.Columns.Contains("LastBullInteraction"))
                    {
                        DateOnly.TryParse(row["LastBullInteraction"].ToString(), out DateOnly tempLastBullInter);
                        lastBullInter = tempLastBullInter;
                    }
                    if (row.Table.Columns.Contains("CowTag"))
                    {
                        cowTag = row["CowTag"].ToString();
                    }
                }
            }


            // Uses subracts currentDate from birthDate for age; if birthDate hasn't occured this year, decrement to compensate
            DateOnly currentDate = DateOnly.FromDateTime(DateTime.Now);
            if (birthDate.HasValue)
            {
                DateOnly holder = birthDate.Value;
                age = currentDate.Year - holder.Year;
                if (currentDate.DayOfYear < holder.DayOfYear) { age--; }
            }

            return new { success = true, cowAge = age, LastBullInteraction = lastBullInter, PurchaseDate = purchaseDate, BirthDate = birthDate, CowType = CowType, PricePerPound = pricePerPound, GestationPeriod = gestPeriod, GeneticMarker = genMarker, MedicalHistory = medHistory, SellingWeight = sellWeight, WeaningWeight = weanWeight, BirthWeight = birthWeight, CurrentWeight = currentWeight, Breed = breed, BuyingPrice = buyingPrice, DameID = damID, SireID = sireID, CowTag = cowTag };
        }


    }
}

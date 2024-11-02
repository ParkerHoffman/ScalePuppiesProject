using Microsoft.EntityFrameworkCore.Storage;
using ScalePuppiesApi.Models;

namespace ScalePuppiesApi.BussinessLogic
{
    public static class HerdBussiness
    {

        public static string GetLogin()
        {
            return "Initial success";
        }


        public static string TestData(this DataBaseConnectionContext context)
        {
            return "success";
        }

    }
}

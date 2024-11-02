using Microsoft.AspNetCore.Mvc;
using ScalePuppiesApi.BussinessLogic;
using ScalePuppiesApi.Models;

namespace ScalePuppiesApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HerdController : ControllerBase
    {

        private readonly DataBaseConnectionContext context;


        public HerdController(DataBaseConnectionContext _context)
        {
            context = _context;
        }

        [HttpGet]
        [Route("GetLogin")]
        public JsonResult GetLogin()
        {
            string result = context.TestData();
            return new JsonResult(result);
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using ScalePuppiesApi.DataLayer;
using ScalePuppiesApi.Models;

namespace ScalePuppiesApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HerdController : ControllerBase
    {

        private readonly DataBaseConnection context;

        public HerdController(DataBaseConnection _context)
        {
            context = _context;
        }


        [HttpGet]
        [Route("Get")]



        [HttpGet]
        [Route("GetHerds")]
        public async Task<JsonResult> GetHerdList([FromQuery] int FarmID)
        {
            return new JsonResult(context.GetHerdList(FarmID));
        }

        [HttpGet]
        [Route("GetHerd/{HerdID}")]
        public async Task<JsonResult> GetIndividualHerd([FromRoute] int HerdID)
        {
            return new JsonResult(context.GetIndividualHerd(HerdID));
        }

        [HttpGet]
        [Route("GetLogin")]
        public JsonResult GetLogin()
        {
            return new JsonResult(context.GetIndividualCow(CowID));
        }

    }
}

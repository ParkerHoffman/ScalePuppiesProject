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


        [HttpPost]
        [Route("CreateCow")]
        public async Task<JsonResult> CreateNewCow([FromQuery] int herdID, [FromBody] Cow moo)
        {
            return context.CreateCowForHerd(herdID, moo);
        }



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
        [Route("GetCow/{CowID}")]
        public async Task<JsonResult> GetIndividualCow([FromRoute] int CowID)
        {
            return new JsonResult(context.GetIndividualCow(CowID));
        }

    }
}

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
            [Route("GetHerds")]
            public async Task<JsonResult> GetHerdList([FromQuery] int FarmID)
            {
            return context.GetHerdList(FarmID);
            }
        }
    }

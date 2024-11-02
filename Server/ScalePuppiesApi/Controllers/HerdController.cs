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
        [Route("TestingCall")]
        public JsonResult Testing()
        {
            return new JsonResult("Success");
        }

        [HttpGet("print-column1")]
        public async Task<JsonResult> PrintColumn1()
        {
            
            return context.testCol1();
        }

        }
    }

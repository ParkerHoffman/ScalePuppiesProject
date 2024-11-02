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
            Console.WriteLine("Hit Controller");
            return context.testCol1();
        }

        /*
        [HttpPost]
        [Route("CreateFarm")]
        public async Task<JsonResult> CreateFarm([FromBody] FarmCreationDTO data)
        {
            return context.CreateFarm(data.FarmUserName, data.FarmName, data.Username, data.Password);
        }

        */


        }


    //The custom DTO to create a new farm and superuser
    public class FarmCreationDTO
    {
        public string FarmName { get; set; }
        public string FarmUserName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

    }
    }

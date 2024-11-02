using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        public async Task<IActionResult> PrintColumn1()
        {
            var users = await context.User.Select(u => u.Name).ToListAsync(); // Assuming 'Name' is the column you want to print

            foreach (var user in users)
            {
                Console.WriteLine(user);
            }

            return Ok("Data printed to console.");
        }

        }
    }

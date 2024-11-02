using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ScalePuppiesApi.Models;
using ScalePuppiesApi.DataLayer;
using ScalePuppiesApi.DataTransferObjects;

namespace ScalePuppiesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly DataBaseConnection context;

        public AuthController(DataBaseConnection _context)
        {
            context = _context;
        }

        [HttpGet]
        [Route("login")]
        public async Task<JsonResult> Login([FromQuery] string FarmUsername, [FromQuery] string Username, [FromQuery] string password)
        {

            return context.loginValidation(FarmUsername, Username, password);
        }

        
        [HttpPost]
        [Route("CreateFarm")]
        public async Task<JsonResult> CreateFarm([FromBody] FarmCreationDTO data)
        {
            return context.CreateFarm(data.FarmUserName, data.FarmName, data.Username, data.Password);
        }

        [HttpPost]
        [Route("{FarmID}/createNewUser")]
        public async Task<JsonResult> CreateNewUser([FromRoute] int FarmID, [FromBody] UserCreationDTO data)
        {
            return context.CreateNewUser(data.UserName, data.UserPassword, data.isSuperUser, FarmID);
        }

    }
}

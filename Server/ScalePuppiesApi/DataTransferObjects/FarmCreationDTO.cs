using Newtonsoft.Json;

namespace ScalePuppiesApi.DataTransferObjects

{
    public class FarmCreationDTO
    {
        [JsonProperty("farmName")]
        public string FarmName { get; set; }
        [JsonProperty("farmUserName")]
        public string FarmUserName { get; set; }
        [JsonProperty("username")]
        public string Username { get; set; }
        [JsonProperty("password")]
        public string Password { get; set; }


    }
}

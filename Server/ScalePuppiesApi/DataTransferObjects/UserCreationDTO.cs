namespace ScalePuppiesApi.DataTransferObjects
{
    public class UserCreationDTO
    {
        public string UserName { get; set; }
        public string UserPassword { get; set; }
        public bool isSuperUser { get; set; } = false;
    }
}

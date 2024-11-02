namespace ScalePuppiesApi.Models
{
    public class Cow
    {
        public int CowID { get; set; }
        public int HerdID {  get; set; }
        public int? SireID { get; set; } = null;
        public int? DameID { get; set; } = null;
    }
}

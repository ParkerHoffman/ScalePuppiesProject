namespace ScalePuppiesApi.Models
{
    public class Cow
    {
        public int? SireID { get; set; } = null;
        public int? DameID { get; set; } = null;
        public int? age { get; set; } = null;
        public double? buyingPrice { get; set; } = null;
        public string? breed { get; set; } = null;
        public double? currentWeight { get; set; } = null;
        public double? birthWeight { get; set; } = null;
        public double? weanWeight { get; set; } = null;
        public double? sellWeight { get; set; } = null;
        public string? medHistory { get; set; } = null;
        public string? genMarker { get; set; } = null;
        public int CowType { get; set; }
        public int? gestPeriod { get; set; } = null;
        public double? pricePerPound { get; set; } = null;
        public string? cowTag { get; set; }
        public DateOnly? birthDate { get; set; } = null;
        public DateOnly? purchaseDate { get; set; } = null;
        public DateOnly? lastBullInter { get; set; } = null;
    }
}

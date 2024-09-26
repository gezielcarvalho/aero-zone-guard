namespace AeroZoneGuard.Server.Models
{
    public partial class SubmissionDocument
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        public DateTime SubmissionDate { get; set; }
        public DateTime LastUpdated { get; set; }
    }
}

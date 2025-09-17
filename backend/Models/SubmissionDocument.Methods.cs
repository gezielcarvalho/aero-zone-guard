namespace AeroZoneGuard.Server.Models
{
    public partial class SubmissionDocument
    {
        public void UpdateStatus(string newStatus)
        {
            Status = newStatus;
            LastUpdated = DateTime.Now;
        }

        public bool IsSubmittedRecently()
        {
            return (DateTime.Now - SubmissionDate).TotalDays <= 7;
        }
    }
}

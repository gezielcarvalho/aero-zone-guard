using System.ComponentModel.DataAnnotations;

namespace AeroZoneGuard.Server.Models
{
    public partial class SubmissionDocument
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "User is required")]
        public int UserId { get; set; }
        [Required(ErrorMessage = "Title is required")]
        public string Title { get; set; }
        [Required(ErrorMessage = "Description is required")]
        public string Description { get; set; }
        public string Status { get; set; }
        public DateTime SubmissionDate { get; set; }
        public DateTime LastUpdated { get; set; }
    }
}

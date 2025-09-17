using AeroZoneGuard.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace AeroZoneGuard.Server.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<SubmissionDocument> SubmissionDocuments { get; set; }

    }
}

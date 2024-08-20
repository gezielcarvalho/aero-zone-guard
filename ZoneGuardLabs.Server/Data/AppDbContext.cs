using Microsoft.EntityFrameworkCore;
using ZoneGuardLabs.Server.Models;

namespace ZoneGuardLabs.Server.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<SubmissionDocument> SubmissionDocuments { get; set; }

    }
}

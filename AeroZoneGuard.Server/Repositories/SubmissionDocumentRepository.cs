using AeroZoneGuard.Server.Data;
using AeroZoneGuard.Server.Interfaces;
using AeroZoneGuard.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace AeroZoneGuard.Server.Repositories
{
    public class SubmissionDocumentRepository(AppDbContext context) : ISubmissionDocumentRepository
    {
        public async Task<IEnumerable<SubmissionDocument>> GetAll()
        {
            return await context.SubmissionDocuments.ToListAsync();
        }

        public async Task<SubmissionDocument> Create(SubmissionDocument entity)
        {
            entity.Id = 0;
            var newEntity = await context.SubmissionDocuments.AddAsync(entity);
            await context.SaveChangesAsync();
            return newEntity.Entity;
        }

        public async Task<bool> Delete(int id)
        {
            var entity = await context.SubmissionDocuments.FindAsync(id);
            if (entity == null)
            {
                return false;
            }
            context.SubmissionDocuments.Remove(entity);
            await context.SaveChangesAsync();
            return true;
        }

        public async Task<SubmissionDocument> GetById(int id)
        {
            return await context.SubmissionDocuments.FindAsync(id) ?? throw new KeyNotFoundException();
        }

        public async Task<SubmissionDocument> Update(int id, SubmissionDocument entity)
        {
            if (id != entity.Id)
            {
                throw new ArgumentException();
            }
            context.Entry(entity).State = EntityState.Modified;
            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SubmissionDocumentExists(id))
                {
                    throw new KeyNotFoundException();
                }
                throw;
            }
            return entity;
        }

        private bool SubmissionDocumentExists(int id)
        {
            return context.SubmissionDocuments.Any(e => e.Id == id);
        }
    }
}

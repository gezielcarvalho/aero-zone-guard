using AeroZoneGuard.Server.Data;
using AeroZoneGuard.Server.Interfaces;
using AeroZoneGuard.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AeroZoneGuard.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubmissionDocumentsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly ISubmissionDocumentRepository _repository;

        public SubmissionDocumentsController(AppDbContext context, ISubmissionDocumentRepository repository)
        {
            _context = context;
            _repository = repository;
        }

        // GET: api/SubmissionDocuments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SubmissionDocument>>> GetSubmissionDocuments()
        {
            return await _context.SubmissionDocuments.ToListAsync();
        }

        // GET: api/SubmissionDocuments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SubmissionDocument>> GetSubmissionDocument(int id)
        {
            var submissionDocument = await _context.SubmissionDocuments.FindAsync(id);

            if (submissionDocument == null)
            {
                return NotFound();
            }

            return submissionDocument;
        }

        // PUT: api/SubmissionDocuments/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSubmissionDocument(int id, SubmissionDocument submissionDocument)
        {
            if (id != submissionDocument.Id)
            {
                return BadRequest();
            }

            _context.Entry(submissionDocument).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SubmissionDocumentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/SubmissionDocuments
        [HttpPost]
        public async Task<ActionResult<SubmissionDocument>> PostSubmissionDocument(SubmissionDocument submissionDocument)
        {
            await _repository.Create(submissionDocument);
            return CreatedAtAction("GetSubmissionDocument", new { id = submissionDocument.Id }, submissionDocument);
        }

        // DELETE: api/SubmissionDocuments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSubmissionDocument(int id)
        {
            var submissionDocument = await _context.SubmissionDocuments.FindAsync(id);
            if (submissionDocument == null)
            {
                return NotFound();
            }

            _context.SubmissionDocuments.Remove(submissionDocument);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SubmissionDocumentExists(int id)
        {
            return _context.SubmissionDocuments.Any(e => e.Id == id);
        }
    }
}

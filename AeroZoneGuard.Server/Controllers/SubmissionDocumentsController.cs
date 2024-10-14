using AeroZoneGuard.Server.Interfaces;
using AeroZoneGuard.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace AeroZoneGuard.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubmissionDocumentsController(ISubmissionDocumentRepository repository) : ControllerBase
    {

        // GET: api/SubmissionDocuments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SubmissionDocument>>> GetSubmissionDocuments()
        {
            return Ok(await repository.GetAll());
        }

        // GET: api/SubmissionDocuments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SubmissionDocument>> GetSubmissionDocument(int id)
        {
            var submissionDocument = await repository.GetById(id);

            if (submissionDocument == null)
            {
                return NotFound();
            }

            return Ok(submissionDocument);
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

            try
            {
                await repository.Update(id, submissionDocument);
            }
            catch (KeyNotFoundException)
            {
                return NotFound();
            }

            return NoContent();
        }

        // POST: api/SubmissionDocuments
        [HttpPost]
        public async Task<ActionResult<SubmissionDocument>> PostSubmissionDocument(SubmissionDocument submissionDocument)
        {
            await repository.Create(submissionDocument);
            return CreatedAtAction(nameof(GetSubmissionDocument), new { id = submissionDocument.Id }, submissionDocument);
        }

        // DELETE: api/SubmissionDocuments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSubmissionDocument(int id)
        {
            if (!await repository.Delete(id))
            {
                return NotFound();
            }
            return NoContent();
        }

    }
}

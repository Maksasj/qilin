using Microsoft.EntityFrameworkCore;
using Qilin.Service.Controllers;
using Qilin.Service.Data;
using Qilin.Service.Models;

namespace Qilin.Service.Repository
{
    public class TagRepository : ITagRepository
    {
        private readonly ILogger<TagsController> _logger;
        private readonly QilinDbContext _context;

        public TagRepository(ILogger<TagsController> logger, QilinDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IEnumerable<Tag> GetTags()
        {
            return _context.Tags.ToList();
        }

        public async Task<bool> AddTag(Tag tag)
        {
            _context.Tags.Add(tag);
            var saveResult = await _context.SaveChangesAsync();

            return saveResult == 1;
        }
    }
}

using Microsoft.EntityFrameworkCore;
using Qilin.Service.Controllers;
using Qilin.Service.Data;
using Qilin.Service.Models;

namespace Qilin.Service.Repository
{
    public class TagRepository : ITagRepository
    {
        private readonly ILogger<TagRepository> _logger;
        private readonly QilinDbContext _context;

        public TagRepository(ILogger<TagRepository> logger, QilinDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        public async Task<bool> CreateTagAsync(Tag tag)
        {
            _context.Tags.Add(tag);
            
            var saveResult = await _context.SaveChangesAsync();
            return !(saveResult == 1);
        }

        public async Task<Tag> GetTagAsync(Guid tagId)
        {
            var query = _context.Tags.Where(tag => tag.Id.Equals(tagId));

            if (!query.Any())
                return null;

            return query.First();
        }

        public async Task<bool> DeleteTagAsync(Guid tagId)
        {
            var tag = await GetTagAsync(tagId);

            if (tag == null)
                return false;

            _context.Tags.RemoveRange(tag);

            var saveResult = await _context.SaveChangesAsync();

            return !(saveResult == 1);
        }

        public bool HasTag(Guid tagId)
        {
            var query = _context.Tags.Where(tag => tag.Id.Equals(tagId));

            return query.Any();
        }

        public IEnumerable<Tag> GetTags()
        {
            return _context.Tags;
        }

        public async Task<bool> DeleteTagsAsync(IEnumerable<Tag> tags)
        {
            _context.Tags.RemoveRange(tags);

            var saveResult = await _context.SaveChangesAsync();
            return !(saveResult == 1);
        }
    }
}

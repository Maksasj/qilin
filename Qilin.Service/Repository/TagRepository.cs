using Microsoft.EntityFrameworkCore;
using Qilin.Service.Controllers;
using Qilin.Service.Data;
using Qilin.Service.Models;

namespace Qilin.Service.Repository
{
    public class TagRepository : ITagRepository
    {
        private readonly QilinDbContext _context;

        public TagRepository(QilinDbContext context) => _context = context;

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

        public async Task<Tag> GetTagByTitleAsync(string title)
        {
            var query = _context.Tags.Where(tag => tag.Title.Equals(title));

            if (!query.Any())
                return null;

            return query.First();
        }

        public async Task<bool> DeleteTagAsync(Guid tagId)
        {
            var tag = await GetTagAsync(tagId);

            if (tag == null)
                return false;

            var saveResult = await _context.SaveChangesAsync();
            return saveResult != 0;
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

        public IEnumerable<Tag> SearchTags(string searchTitle)
        {
            return _context.Tags
                .Select(t => new TagMatchModel
                {
                    Tag = t,
                    TitleMatchScore = EF.Functions.Like(t.Title.ToLower(), $"%{searchTitle}%") ? 1 : 0,
                })
                .Where(t => t.TitleMatchScore > 0)
                .OrderByDescending(t => t.TitleMatchScore)
                .ThenBy(t => t.Tag.Title)
                .Select(t => t.Tag);
        }
    }
}

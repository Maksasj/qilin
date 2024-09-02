using Qilin.Service.Data;
using Qilin.Service.Models;

namespace Qilin.Service.Repository
{
    public class TagStyleRepository : ITagStyleRepository
    {
        private QilinDbContext _context { get; set; }

        public TagStyleRepository(QilinDbContext context)
        {
            _context = context;
        }

        public async Task<TagStyle> GetStyleAsync(Guid styleId)
        {
            var query = _context.TagStyles.Where(style=> style.Id.Equals(styleId));

            if (!query.Any())
                return null;

            return query.First();
        }

        public async Task<TagStyle> GetStyleAsync(string styleTitle)
        {
            var query = _context.TagStyles.Where(style => style.StyleTitle.Equals(styleTitle));

            if (!query.Any())
                return null;

            return query.First();
        }

        public async Task<bool> CreateStyleAsync(TagStyle tagStyle)
        {
            _context.TagStyles.Add(tagStyle);

            var saveResult = await _context.SaveChangesAsync();
            return saveResult == 1;
        }

        public async Task<TagStyle> GetTagStyleAsync(Tag tag)
        {
            return await GetStyleAsync("Default");
        }
    }
}

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

            // Removing tag
            _context.Tags.RemoveRange(tag);

            // Remove all relations
            await DeleteRelationsForAsync(tag);

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

        public IEnumerable<TagRelation> GetTagRelations()
        {
            return _context.TagRelations;
        }

        public async Task<bool> DeleteRelationsForAsync(Tag tag)
        {
            // Removing all parent relations
            var parents = _context.TagRelations.Where(relation => relation.TagId.Equals(tag.Id));
            _context.TagRelations.RemoveRange(parents);

            // Removing all child relations
            var childs = _context.TagRelations.Where(relation => relation.ParentId.Equals(tag.Id));
            _context.TagRelations.RemoveRange(childs);

            var saveResult = await _context.SaveChangesAsync();
            return saveResult != 0;
        }

        public async Task<bool> DeleteRelationsForManyAsync(IEnumerable<Tag> tags)
        {
            foreach (var tag in tags)
            {
                // Removing all parent relations
                var parents = _context.TagRelations.Where(relation => relation.TagId.Equals(tag.Id));
                _context.TagRelations.RemoveRange(parents);

                // Removing all child relations
                var childs = _context.TagRelations.Where(relation => relation.ParentId.Equals(tag.Id));
                _context.TagRelations.RemoveRange(childs);
            }

            var saveResult = await _context.SaveChangesAsync();
            return saveResult != 0;
        }

        public async Task<bool> DeleteTagsAsync(IEnumerable<Tag> tags)
        {
            // First lets remove all relations
            await DeleteRelationsForManyAsync(tags);

            _context.Tags.RemoveRange(tags);

            var saveResult = await _context.SaveChangesAsync();
            return saveResult != 0;
        }

        public bool RelationExist(Guid tagId, Guid parentId)
        {
            var query = _context.TagRelations.Where(relation =>
                relation.TagId.Equals(tagId) && relation.ParentId.Equals(parentId)
            );

            return query.Any();
        }

        public async Task<bool> TagTagAsync(Guid targetTagId, Guid toBeAppliedTagId)
        {
            if(!HasTag(targetTagId))
                return false;

            if (!HasTag(toBeAppliedTagId))
                return false;

            if (RelationExist(targetTagId, toBeAppliedTagId))
                return false;

            // Todo check if this is a recursive tag relation

            _context.TagRelations.Add(new TagRelation
            {
                TagId = targetTagId,
                ParentId = toBeAppliedTagId
            });

            var saveResult = await _context.SaveChangesAsync();
            return saveResult == 1;
        }
    }
}

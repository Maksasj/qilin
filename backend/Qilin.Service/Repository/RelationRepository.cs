using System.Collections;
using Qilin.Service.Data;
using Qilin.Service.Models;

namespace Qilin.Service.Repository
{
    public class RelationRepository : IRelationRepository
    {
        public QilinDbContext _context { get; set; }
        public readonly IEntityRepository _entityRepository;
        public readonly ITagRepository _tagRepository;

        public RelationRepository(QilinDbContext context, IEntityRepository entityRepository, ITagRepository tagRepository)
        {
            _context = context;
            _entityRepository = entityRepository;
            _tagRepository = tagRepository;
        }

        public IEnumerable<TagRelation> GetAllTagRelations()
        {
            return _context.TagRelations;
        }

        public IEnumerable<EntityTagRelation> GetAllEntityRelations()
        {
            return _context.EntityTagRelations;
        }

        public IEnumerable<TagRelation> GetTagRelations(Guid tagId)
        {
            if (!_tagRepository.HasTag(tagId))
                return Enumerable.Empty<TagRelation>();

            return _context.TagRelations.Where(relation => relation.TagId.Equals(tagId));
        }

        public IEnumerable<EntityTagRelation> GetEntityRelations(Guid entityId)
        {
            if (!_entityRepository.HasEntity(entityId))
                return Enumerable.Empty<EntityTagRelation>();

            return _context.EntityTagRelations.Where(relation => relation.EntityId.Equals(entityId));
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

        public bool TagRelationExist(Guid tagId, Guid parentId)
        {
            var query = _context.TagRelations.Where(relation =>
                relation.TagId.Equals(tagId) && relation.ParentId.Equals(parentId)
            );

            return query.Any();
        }

        public bool EntityRelationExist(Guid entityId, Guid tagId)
        {
            var query = _context.EntityTagRelations.Where(relation =>
                relation.EntityId.Equals(entityId) && relation.TagId.Equals(tagId)
            );

            return query.Any();
        }

        public async Task<bool> TagTagAsync(Guid targetTagId, Guid toBeAppliedTagId)
        {
            if (!_tagRepository.HasTag(targetTagId))
                return false;

            if (!_tagRepository.HasTag(toBeAppliedTagId))
                return false;

            if (TagRelationExist(targetTagId, toBeAppliedTagId))
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

        public async Task<bool> TagEntityAsync(Guid targetEntityId, Guid toBeAppliedTagId)
        {
            if (!_entityRepository.HasEntity(targetEntityId))
                return false;

            if (!_tagRepository.HasTag(toBeAppliedTagId))
                return false;

            if (EntityRelationExist(targetEntityId, toBeAppliedTagId))
                return false;

            _context.EntityTagRelations.Add(new EntityTagRelation
            {
                EntityId = targetEntityId,
                TagId = toBeAppliedTagId
            });

            var saveResult = await _context.SaveChangesAsync();
            return saveResult == 1;
        }
    }
}

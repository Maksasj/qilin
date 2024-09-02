using Microsoft.AspNetCore.Mvc;
using Qilin.Service.Models;
using Qilin.Service.Repository;

namespace Qilin.Service.Services
{
    public class QilinService : IQilinService
    {
        private readonly ILogger<QilinService> _logger;

        private readonly ITagRepository _tagRepository;
        private readonly IEntityRepository _entityRepository;
        private readonly IRelationRepository _relationRepository;
        private readonly ITagStyleRepository _tagStyleRepository;

        public QilinService(
            ILogger<QilinService> logger, 
            ITagRepository tagRepository, 
            IEntityRepository entityRepository, 
            IRelationRepository relationRepository,
            ITagStyleRepository tagStyleRepository
            )
        {
            _logger = logger;
            _tagRepository = tagRepository;
            _entityRepository = entityRepository;
            _relationRepository = relationRepository;
            _tagStyleRepository = tagStyleRepository;
        }

        public IEnumerable<Tag> GetTags()
        {
            return _tagRepository.GetTags();
        }

        public IEnumerable<Tag> SearchTags(string searchTitle)
        {
            return _tagRepository.SearchTags(searchTitle);
        }


        public async Task<Tag> GetTagAsync(Guid tagId)
        {
            return await _tagRepository.GetTagAsync(tagId);
        }

        public async Task<bool> CreateTag(string tagTitle, string? tagDescription)
        {
            return await _tagRepository.CreateTagAsync(new Tag
            {
                Title = tagTitle,
                Description = tagDescription
            });
        }

        public async Task<bool> DeleteTag(Guid tagId)
        {
            var tag = await _tagRepository.GetTagAsync(tagId);

            if (tag == null)
                return false;

            // Remove all relations
            await _relationRepository.DeleteRelationsForAsync(tag);

            return await _tagRepository.DeleteTagAsync(tagId);
        }

        public async Task<IEnumerable<Entity>> GetEntitiesAsync()
        {
            return _entityRepository.GetEntities();
        }

        public async Task<Entity> GetEntityAsync(Guid entityId)
        {
            return await _entityRepository.GetEntityAsync(entityId);
        }

        public IEnumerable<TagRelation> GetTagRelations()
        {
            return _relationRepository.GetAllTagRelations();
        }

        public async Task<bool> TagTagAsync(Guid targetTagId, Guid toBeAppliedTagId)
        {
            return await _relationRepository.TagTagAsync(targetTagId, toBeAppliedTagId);
        }

        public async Task<bool> TagEntityAsync(Guid targetEntityId, Guid toBeAppliedTagId)
        {
            return await _relationRepository.TagEntityAsync(targetEntityId, toBeAppliedTagId);
        }

        public async Task<IEnumerable<Tag>> GetEntityTagsAsync(Guid entityId)
        {
            if(!_entityRepository.HasEntity(entityId))
                return Enumerable.Empty<Tag>();

            var relations = _relationRepository
                .GetEntityRelations(entityId)
                .Select(relation => relation.TagId);

            return _tagRepository
                .GetTags()
                .Where(tag => relations.Contains(tag.Id));
        }

        public async Task<TagStyle> GetTagStyleAsync(Tag tag)
        {
            return await _tagStyleRepository.GetTagStyleAsync(tag);
        }
    }
}

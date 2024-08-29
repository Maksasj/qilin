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

        public QilinService(ILogger<QilinService> logger, ITagRepository tagRepository, IEntityRepository entityRepository)
        {
            _logger = logger;
            _tagRepository = tagRepository;
            _entityRepository = entityRepository;
        }

        public async Task<IEnumerable<Tag>> GetTagsAsync()
        {
            return _tagRepository.GetTags();
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
            return await _tagRepository.DeleteTagAsync(tagId);
        }

        public async Task<IEnumerable<Entity>> GetEntitiesAsync()
        {
            return _entityRepository.GetEntities();
        }
    }
}

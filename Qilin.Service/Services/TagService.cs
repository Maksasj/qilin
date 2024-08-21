using Microsoft.AspNetCore.Mvc;
using Qilin.Service.Models;
using Qilin.Service.Repository;

namespace Qilin.Service.Services
{
    public class TagService : ITagService
    {
        private readonly ILogger<TagService> _logger;
        private readonly ITagRepository _tagRepository;

        public TagService(ILogger<TagService> logger, ITagRepository tagRepository)
        {
            _logger = logger;
            _tagRepository = tagRepository;
        }

        public async Task<Tag[]> GetTagsAsync()
        {
            return _tagRepository.GetTags().ToArray();
        }

        public async Task<bool> CreateTag(string tagTitle, string? tagDescription)
        {
            return await _tagRepository.AddTag(new Tag
            {
                Title = tagTitle,
                Description = tagDescription
            });
        }

        public async Task<bool> DeleteTag(Guid tagId)
        {
            return await _tagRepository.DeleteTag(tagId);
        }
    }
}

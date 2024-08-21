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

        public async Task<IActionResult> CreateTag(string tagTitle, string? tagDescription)
        {
            _tagRepository.AddTag(new Tag
            {
                Title = tagTitle,
                Description = tagDescription
            });

            return new OkObjectResult(null);
        }

        public async Task<IActionResult> DeleteTag(Guid tagId)
        {
            _tagRepository.DeleteTag(tagId);

            return new OkObjectResult(null);
        }
    }
}

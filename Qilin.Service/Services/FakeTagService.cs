using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Qilin.Service.Models;

namespace Qilin.Service.Services
{
    public class FakeTagService : ITagService
    {
        private readonly ILogger<TagService> _logger;
        private List<Tag> _tags;

        public FakeTagService(ILogger<TagService> logger)
        {
            _logger = logger;

            _tags.Add(new Tag
            {
                Id = Guid.NewGuid(),
                Title = "One Piece",
                Description = "This is a test one piece tag"
            });

            _tags.Add(new Tag
            {
                Id = Guid.NewGuid(),
                Title = "Art work"
            });
        }

        public async Task<Tag[]> GetTagsAsync()
        {
            return _tags.ToArray();
        }

        public async Task<bool> CreateTag(string tagTitle, string? tagDescription)
        {
            _tags.Add(new Tag
            {
                Id = Guid.NewGuid(),
                Title = tagTitle,
                Description = tagDescription
            });

            return true;
        }

        public async Task<bool> DeleteTag(Guid tagId)
        {
            var tag = _tags.Find(tag => tag.Id.Equals(tagId));

            if (tag == null)
                return false;

            _tags.Remove(tag);

            return true;
        }
    }
}
